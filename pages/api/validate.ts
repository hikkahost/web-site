import { webcrypto } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Data = { ok: string } | { error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!req.body.hash) {
        return res.status(400).json({
            error: 'Missing required field hash',
        });
    }

    if (!req.body.userId) {
        return res.status(400).json({
            error: 'Missing required field userId',
        });
    }

    if (!process.env.BOT_TOKEN) {
        return res.status(500).json({ error: 'Internal server error' });
    }

    const data = Object.fromEntries(new URLSearchParams(req.body.hash));
    const isValid = await isHashValid(data, process.env.BOT_TOKEN);
    const userId = req.body.userId;

    return res.status(403).json({ error: isValid.toString() });

    if (isValid) {
        const response = await (await fetch(
            `http://api.hikkahost.tech:7777/api/user/${userId}/token`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": process.env.SERVER ?? ""
                },
            }
        )).json() as { token: string };

        return res.status(200).json({ ok: response.token });
    }

    return res.status(403).json({ error: 'Invalid hash' });
}

async function isHashValid(data: Record<string, string>, botToken: string) {
    const encoder = new TextEncoder();

    const checkString = Object.keys(data)
        .filter((key) => key !== 'hash')
        .map((key) => `${key}=${data[key]}`)
        .sort()
        .join('\n');

    const secretKey = await webcrypto.subtle.importKey(
        'raw',
        encoder.encode('WebAppData'),
        { name: 'HMAC', hash: 'SHA-256' },
        true,
        ['sign']
    );

    const secret = await webcrypto.subtle.sign('HMAC', secretKey, encoder.encode(botToken));

    const signatureKey = await webcrypto.subtle.importKey(
        'raw',
        secret,
        { name: 'HMAC', hash: 'SHA-256' },
        true,
        ['sign']
    );

    const signature = await webcrypto.subtle.sign('HMAC', signatureKey, encoder.encode(checkString));

    const hex = Buffer.from(signature).toString('hex');

    return {
        hex: hex,
    }

    return data.hash === hex;
}

function isValidHash1(parsedData: any, bot_token: string) {
    // Get Telegram hash
    const hash = parsedData.hash

    // Remove 'hash' value & Sort alphabetically
    const data_keys = Object.keys(parsedData).filter(v => v !== 'hash').sort()

    // Create line format key=<value>
    const items = data_keys.map(key => key + '=' + parsedData[key])

    const data_check_string = items.join('\n')

    function HMAC_SHA256(value: string, key: string) {
        const crypto = require('crypto');
        return crypto.createHmac('sha256', key).update(value).digest()
    }

    function hex(bytes: any) {
        return bytes.toString('hex');
    }

    // Generate secret key
    const secret_key = HMAC_SHA256(bot_token, 'WebAppData')

    // Generate hash to validate
    const hashGenerate = hex(HMAC_SHA256(data_check_string, secret_key))

    // Return bool value is valid
    return Boolean(hashGenerate === hash)
}
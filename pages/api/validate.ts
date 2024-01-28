import { createHmac } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Data = { ok: string } | { error: any };

type TransformInitData = {
    [k: string]: string | { hash: string };
};

function transformInitData(initData: string): TransformInitData {
    return Object.fromEntries(new URLSearchParams(initData));
}

const verifyTelegramWebAppData = async (telegramInitData: any, TELEGRAM_BOT_TOKEN: string) => {
    // HMAC-SHA-256 signature of the bot's token with the constant string WebAppData used as a key.
    const secret = createHmac('sha256', 'WebAppData')
        .update(TELEGRAM_BOT_TOKEN);

    // in the format key=<value> with a line feed character ('\n', 0x0A) used as separator
    // e.g., 'auth_date=<auth_date>\nquery_id=<query_id>\nuser=<user>
    const dataCheckString = Object.entries(telegramInitData)

    // The hexadecimal representation of the HMAC-SHA-256 signature of the data-check-string with the secret key
    const _hash = createHmac('sha256', secret.digest())
        .update(dataCheckString.join('\n'))
        .digest('hex');

    // if hash are equal the data may be used on your server.
    // Complex data types are represented as JSON-serialized objects.
    console.log(_hash, telegramInitData.hash);
    return _hash === telegramInitData.hash;
};

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

    const data = transformInitData(req.body.hash);
    const isOk = await verifyTelegramWebAppData(
        data,
        process.env.BOT_TOKEN!
    );
    const userId = req.body.userId;

    if (isOk) {
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
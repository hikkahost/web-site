import { webcrypto } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Data = { ok: string } | { error: any };

type TransformInitData = {
    [k: string]: string;
};

function transformInitData(initData: string): TransformInitData {
    return Object.fromEntries(new URLSearchParams(initData));
}

async function validate(data: TransformInitData, botToken: string) {
    const encoder = new TextEncoder();

    const checkString = Object.keys(data)
        .filter((key) => key !== "hash")
        .map((key) => `${key}=${data[key]}`)
        .sort()
        .join("\n");

    const subtle = webcrypto.subtle;

    const secretKey = await subtle.importKey(
        "raw",
        encoder.encode("WebAppData"),
        { name: "HMAC", hash: "SHA-256" },
        true,
        ["sign"]
    );
    const secret = await subtle.sign("HMAC", secretKey, encoder.encode(botToken));
    const signatureKey = await subtle.importKey(
        "raw",
        secret,
        { name: "HMAC", hash: "SHA-256" },
        true,
        ["sign"]
    );
    const signature = await subtle.sign(
        "HMAC",
        signatureKey,
        encoder.encode(checkString)
    );

    const hex = Buffer.from(signature).toString('hex');

    console.log(hex, data.hash);

    return data.hash === hex;
}

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

    if (JSON.parse(data.user).id != req.body.userId) {
        return res.status(403).json({ error: 'AHAHAH, NICE TRY' });
    }

    const isOk = await validate(
        data,
        process.env.BOT_TOKEN!
    );
    const userId = req.body.userId;

    if (isOk) {
        const response = await (await fetch(
            `http://158.160.84.24:5000/api/user/${userId}/token`,
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
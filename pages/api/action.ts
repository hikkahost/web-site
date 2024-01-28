import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { token, action } = req.query;

    if (!token) {
        return res.status(400).json({ error: "Invalid token" });
    }

    let userId = token.toString().split(":")[0];

    const response = await fetch(
        `http://api.hikkahost.tech:7777/api/host/${userId}/?action=${action}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "token": token.toString()
            },
        }
    );

    var data: any = await response.json();

    return res.status(200).json({ data });
}
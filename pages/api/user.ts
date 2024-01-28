import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { userId } = req.query;

    const response = await fetch(
        `http://api.hikkahost.tech:7777/api/user/${userId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "token": ""
            },
        }
    );

    var data: any = await response.json();

    return res.status(200).json({ response: data });
}
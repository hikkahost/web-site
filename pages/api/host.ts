import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ error: "Invalid token" });
    }

    let userId = token.toString().split(":")[0];

    let start_time = new Date();
    const response = await fetch(
        `http://158.160.84.24:5000/api/host/${userId}/stats`,
        {
            headers: {
                "Content-Type": "application/json",
                "token": token.toString()
            },
        }
    );
    let ping = new Date().getTime() - start_time.getTime();

    var data: any = await response.json();

    return res.status(200).json({ data, ping: ping });
}

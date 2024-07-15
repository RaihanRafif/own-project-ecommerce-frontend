// pages/api/product/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    console.log("444");


    if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    try {
        const response = await fetch(`https://data.mongodb-api.com/product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY!,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch product' });
        }

        const product = await response.json();
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import clientPromise from '@/lib/mongodb';
import { apiIpKey } from '@/utils/credentials';

interface Request extends NextRequest {
    ip: string;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const shouldCount = searchParams.get('count') === 'true';

    const client = await clientPromise;
    const db = client.db('portfolio');

    const collection = db.collection<{ country: string; city: string; date: Date; userAgent: string; region: string }>(
        'visits'
    );

    if (shouldCount) {
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
        const userAgent = req.headers.get('user-agent') as string;
        const jsonData = await fetch(`https://apiip.net/api/check?ip=${ip}&accessKey=${apiIpKey}`);
        const data: any = await jsonData.json();

        await collection.insertOne({
            date: new Date(),
            userAgent,
            country: data.countryName,
            city: data.city,
            region: data.regionName,
        });
    }

    return NextResponse.json({ success: true });
}

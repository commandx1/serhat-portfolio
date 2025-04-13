import { NextRequest, NextResponse } from 'next/server';

import clientPromise from '@/lib/mongodb';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const shouldCount = searchParams.get('count') === 'true';
    const emptyResponse = searchParams.get('emptyResponse') === 'true';

    const client = await clientPromise;
    const db = client.db('portfolio');

    const collection = db.collection<{ _id: string; count: number }>('visits');

    const doc = await collection.findOne({ _id: 'page-visit' });

    if (!doc) {
        await collection.insertOne({ _id: 'page-visit', count: 1 });
        return NextResponse.json({ count: 1 });
    }

    if (shouldCount) {
        await collection.updateOne({ _id: 'page-visit' }, { $inc: { count: 1 } });
        doc.count += 1;
    }

    return NextResponse.json(emptyResponse ? {} : { count: doc.count });
}

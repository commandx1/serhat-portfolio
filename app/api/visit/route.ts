import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

const filePath = path.resolve('./data', 'visits.json');

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const hasVisited = searchParams.get('hasVisited') === 'true';

    // Klasör yoksa oluştur
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
    }

    // Dosya yoksa başlat
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({ count: 1 }, null, 2));
        return NextResponse.json({ count: 1 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    if (!hasVisited) {
        data.count += 1;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ count: data.count });
}

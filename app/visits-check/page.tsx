'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [visitCount, setVisitCount] = useState<number | null>(null);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');

        fetch(`/api/visit?hasVisited=${hasVisited ? 'true' : 'false'}`)
            .then(res => res.json())
            .then(data => {
                setVisitCount(data.count);
                if (!hasVisited) {
                    sessionStorage.setItem('hasVisitedPortfolio', 'true');
                }
            });
    }, []);

    return (
        <div>
            <h1>Ziyaret Sayısı</h1>
            {visitCount !== null && <p>Bu sayfa {visitCount} kez görüntülendi.</p>}
        </div>
    );
}

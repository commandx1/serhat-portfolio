'use client';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [visitCount, setVisitCount] = useState<number | null>(null);

    useEffect(() => {
        const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');

        fetch(`/api/visit?count=${!hasVisitedThisSession}`)
            .then(res => res.json())
            .then(data => {
                setVisitCount(data.count);
                if (!hasVisitedThisSession) {
                    sessionStorage.setItem('hasVisitedPortfolio', 'true');
                }
            });
    }, []);

    return (
        <Container>
            <h1>Ziyaret Sayısı</h1>
            {visitCount !== null && <p>Bu sayfa {visitCount} kez görüntülendi.</p>}
        </Container>
    );
}

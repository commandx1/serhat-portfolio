'use client';

import { useEffect, useRef } from 'react';

import styles from './layout-bg.module.scss';

const LayoutBg = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current || typeof window === undefined) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        let WIDTH: number;
        let HEIGHT: number;
        let mouseMoving = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let mouseMoveChecker: any;
        let mouseX: number;
        let mouseY: number;
        const stars: Star[] = [];
        const dots: (Dot | null)[] = [];
        const initStarsPopulation = 80;
        const dotsMinDist = 2;

        const params = {
            maxDistFromCursor: 50,
            dotsSpeed: 0,
            backgroundSpeed: 0,
        };

        class Star {
            id: number;
            x: number;
            y: number;
            r: number;
            color: string;

            constructor(id: number, x: number, y: number) {
                this.id = id;
                this.x = x;
                this.y = y;
                this.r = Math.floor(Math.random() * 2) + 1;
                const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
                this.color = `rgba(255,255,255,${alpha})`;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = this.r * 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                ctx.closePath();
                ctx.fill();
            }

            move() {
                this.y -= 0.15 + params.backgroundSpeed / 100;
                if (this.y <= -10) this.y = HEIGHT + 10;
                this.draw();
            }
        }

        class Dot {
            id: number;
            x: number;
            y: number;
            r: number;
            maxLinks = 2;
            speed = 0.5;
            a = 0.5;
            aReduction = 0.005;
            color: string;
            linkColor: string;
            dir: number;

            constructor(id: number, x: number, y: number) {
                this.id = id;
                this.x = x;
                this.y = y;
                this.r = Math.floor(Math.random() * 5) + 1;
                this.color = `rgba(255,255,255,${this.a})`;
                this.linkColor = `rgba(255,255,255,${this.a / 4})`;
                this.dir = Math.floor(Math.random() * 140) + 200;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = this.r * 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                ctx.closePath();
                ctx.fill();
            }

            link() {
                if (!ctx || this.id === 0) return;
                const previousDot1 = getPreviousDot(this.id, 1);
                const previousDot2 = getPreviousDot(this.id, 2);
                const previousDot3 = getPreviousDot(this.id, 3);
                if (!previousDot1) return;

                ctx.strokeStyle = this.linkColor;
                ctx.beginPath();
                ctx.moveTo(previousDot1.x, previousDot1.y);
                ctx.lineTo(this.x, this.y);
                if (previousDot2) ctx.lineTo(previousDot2.x, previousDot2.y);
                if (previousDot3) ctx.lineTo(previousDot3.x, previousDot3.y);
                ctx.stroke();
                ctx.closePath();
            }

            move() {
                this.a -= this.aReduction;
                if (this.a <= 0) {
                    this.die();
                    return;
                }
                this.color = `rgba(255,255,255,${this.a})`;
                this.linkColor = `rgba(255,255,255,${this.a / 4})`;

                this.x += Math.cos(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);
                this.y += Math.sin(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);

                this.draw();
                this.link();
            }

            die() {
                dots[this.id] = null;
            }
        }

        function getPreviousDot(id: number, stepback: number): Dot | false {
            if (id === 0 || id - stepback < 0) return false;
            return dots[id - stepback] ?? false;
        }

        function setCanvasSize() {
            WIDTH = document.documentElement.clientWidth;
            HEIGHT = document.documentElement.clientHeight;
            canvasRef.current!.width = WIDTH;
            canvasRef.current!.height = HEIGHT;
        }

        function init() {
            ctx!.strokeStyle = 'white';
            ctx!.shadowColor = 'white';
            for (let i = 0; i < initStarsPopulation; i++) {
                stars[i] = new Star(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT));
            }
            ctx!.shadowBlur = 0;
            animate();
        }

        function animate() {
            ctx!.clearRect(0, 0, WIDTH, HEIGHT);
            for (const star of stars) star.move();
            for (const dot of dots) dot?.move();
            drawIfMouseMoving();
            requestAnimationFrame(animate);
        }

        window.onmousemove = e => {
            mouseMoving = true;
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Eğer hiç nokta yoksa yeni bir nokta ekleyerek animasyonu başlat
            if (dots.length === 0 || dots.every(dot => dot === null)) {
                dots.length = 0; // Önceki null'ları temizle
                dots.push(new Dot(0, mouseX, mouseY));
            }

            clearTimeout(mouseMoveChecker);
            mouseMoveChecker = setTimeout(() => {
                mouseMoving = false;
            }, 100);
        };

        function drawIfMouseMoving() {
            if (!mouseMoving) return;

            // Eğer dizi tamamen boşsa ilk noktayı tekrar ekle
            if (dots.length === 0 || dots.every(dot => dot === null)) {
                dots.length = 0; // Null referansları temizle
                dots.push(new Dot(0, mouseX, mouseY));
            }

            const previousDot = getPreviousDot(dots.length, 1);
            if (!previousDot) return;

            const diffX = Math.abs(previousDot.x - mouseX);
            const diffY = Math.abs(previousDot.y - mouseY);

            if (diffX < dotsMinDist || diffY < dotsMinDist) return;

            const xVariation =
                (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
            const yVariation =
                (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor) + 1;

            dots.push(new Dot(dots.length, mouseX + xVariation, mouseY + yVariation));
        }

        function degToRad(deg: number) {
            return deg * (Math.PI / 180);
        }

        setCanvasSize();
        init();

        window.addEventListener('resize', setCanvasSize);
    }, []);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');

        fetch(`/api/visit?hasVisited=${hasVisited ? 'true' : 'false'}`)
            .then(res => res.json())
            .then(() => {
                if (!hasVisited) {
                    sessionStorage.setItem('hasVisitedPortfolio', 'true');
                }
            });
    }, []);

    return (
        <>
            <div className={styles.landscape} />
            <div className={styles.filter} />
            <canvas ref={canvasRef} />
        </>
    );
};

export default LayoutBg;

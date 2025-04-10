import { useEffect } from 'react';

const useCanvas = () => {
    useEffect(() => {
        // Canvas initialization
        const c = document.getElementById('canv') as HTMLCanvasElement;
        const ctx = c.getContext('2d') as CanvasRenderingContext2D;
        let w = (c.width = window.innerWidth);
        let h = (c.height = window.innerHeight);

        // Options interface
        interface Options {
            len: number;
            count: number;
            baseTime: number;
            addedTime: number;
            dieChance: number;
            spawnChance: number;
            sparkChance: number;
            sparkDist: number;
            sparkSize: number;
            color: string;
            baseLight: number;
            addedLight: number;
            shadowToTimePropMult: number;
            baseLightInputMultiplier: number;
            addedLightInputMultiplier: number;
            cx: number;
            cy: number;
            repaintAlpha: number;
            hueChange: number;
        }

        const opts: Options = {
            len: 20,
            count: 50,
            baseTime: 10,
            addedTime: 10,
            dieChance: 0.05,
            spawnChance: 1,
            sparkChance: 0.1,
            sparkDist: 10,
            sparkSize: 2,
            color: 'hsl(hue,100%,light%)',
            baseLight: 50,
            addedLight: 10,
            shadowToTimePropMult: 6,
            baseLightInputMultiplier: 0.01,
            addedLightInputMultiplier: 0.02,
            cx: w / 2,
            cy: h / 2,
            repaintAlpha: 0.04,
            hueChange: 0.1,
        };

        let tick = 0;
        const lines: Line[] = [];
        let dieX = w / 2 / opts.len;
        let dieY = h / 2 / opts.len;
        const baseRad = (Math.PI * 2) / 6;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w, h);

        // Line class
        class Line {
            x: number;
            y: number;
            addedX: number;
            addedY: number;
            rad: number;
            lightInputMultiplier: number;
            color: string;
            cumulativeTime: number;
            time: number;
            targetTime: number;

            constructor() {
                this.x = 0;
                this.y = 0;
                this.addedX = 0;
                this.addedY = 0;
                this.rad = 0;
                this.lightInputMultiplier = 0;
                this.color = '';
                this.cumulativeTime = 0;
                this.time = 0;
                this.targetTime = 0;
                this.reset();
            }

            reset() {
                this.x = 0;
                this.y = 0;
                this.addedX = 0;
                this.addedY = 0;
                this.rad = 0;
                this.lightInputMultiplier =
                    opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
                this.color = opts.color.replace('hue', (tick * opts.hueChange).toString());
                this.cumulativeTime = 0;
                this.beginPhase();
            }

            beginPhase() {
                this.x += this.addedX;
                this.y += this.addedY;
                this.time = 0;
                this.targetTime = Math.floor(opts.baseTime + opts.addedTime * Math.random());
                this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
                this.addedX = Math.cos(this.rad);
                this.addedY = Math.sin(this.rad);

                if (
                    Math.random() < opts.dieChance ||
                    this.x > dieX ||
                    this.x < -dieX ||
                    this.y > dieY ||
                    this.y < -dieY
                ) {
                    this.reset();
                }
            }

            step() {
                this.time++;
                this.cumulativeTime++;

                if (this.time >= this.targetTime) {
                    this.beginPhase();
                }

                const prop = this.time / this.targetTime;
                const wave = Math.sin((prop * Math.PI) / 2);
                const x = this.addedX * wave;
                const y = this.addedY * wave;

                ctx.shadowBlur = prop * opts.shadowToTimePropMult;
                ctx.fillStyle = ctx.shadowColor = this.color.replace(
                    'light',
                    (
                        opts.baseLight +
                        opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)
                    ).toString()
                );
                ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

                if (Math.random() < opts.sparkChance) {
                    ctx.fillRect(
                        opts.cx +
                            (this.x + x) * opts.len +
                            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
                            opts.sparkSize / 2,
                        opts.cy +
                            (this.y + y) * opts.len +
                            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
                            opts.sparkSize / 2,
                        opts.sparkSize,
                        opts.sparkSize
                    );
                }
            }
        }

        function loop() {
            window.requestAnimationFrame(loop);
            tick++;

            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            if (lines.length < opts.count && Math.random() < opts.spawnChance) {
                lines.push(new Line());
            }

            lines.forEach(line => line.step());
        }

        loop();

        window.addEventListener('resize', () => {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);

            opts.cx = w / 2;
            opts.cy = h / 2;

            dieX = w / 2 / opts.len;
            dieY = h / 2 / opts.len;
        });
    }, []);
};

export default useCanvas;

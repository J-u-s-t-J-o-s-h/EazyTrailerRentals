'use client';

import { useEffect, useRef } from 'react';

export default function HoneycombBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let hexagons: Hexagon[] = [];

        // Configuration
        const colorBg = '#050505'; // Dark background

        class Hexagon {
            x: number;
            y: number;
            r: number;

            constructor(x: number, y: number, r: number) {
                this.x = x;
                this.y = y;
                this.r = r;
            }

            draw(ctx: CanvasRenderingContext2D) {
                // Ambient pulse for "alive" feel - reduced intensity
                const time = Date.now() * 0.0015;
                const intensity = Math.sin(this.x * 0.01 + this.y * 0.01 + time) * 0.05 + 0.05; // 0.0 to 0.1

                // Dynamic color based on intensity - much more subtle
                // Keeping it monochrome dark
                // Dynamic color based on intensity - Increased visibility
                const baseLightness = 5; // Previous: 3
                const lightness = baseLightness + (intensity * 15); // Previous: * 5
                const strokeLightness = baseLightness + 8 + (intensity * 20); // Previous: * 8

                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI / 3) * i + (Math.PI / 6);

                    const hx = this.x + this.r * Math.cos(angle);
                    const hy = this.y + this.r * Math.sin(angle);
                    if (i === 0) ctx.moveTo(hx, hy);
                    else ctx.lineTo(hx, hy);
                }
                ctx.closePath();

                // Fill
                ctx.fillStyle = `hsl(0, 0%, ${lightness}%)`;
                ctx.fill();

                // Stroke
                ctx.strokeStyle = `hsl(0, 0%, ${strokeLightness}%)`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }

        const init = () => {
            // Resize
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Responsive radius for Mobile/Tablet optimization
            const isMobile = window.innerWidth < 768;
            const r = isMobile ? 18 : 30;

            // Hexagon Math (Pointy Top)
            const rCalc = r;
            const hexW = 2 * rCalc;
            const hexH = Math.sqrt(3) * rCalc;
            const xSpacing = 1.5 * rCalc;
            const ySpacing = hexH;

            hexagons = [];

            const rows = Math.ceil(canvas.height / ySpacing) + 2;
            const cols = Math.ceil(canvas.width / xSpacing) + 2;

            for (let c = 0; c < cols; c++) {
                for (let ro = 0; ro < rows; ro++) {
                    let x = c * xSpacing;
                    let y = ro * ySpacing;

                    // Shift odd columns down
                    if (c % 2 !== 0) {
                        y += ySpacing / 2;
                    }

                    hexagons.push(new Hexagon(x, y, r - 1)); // gap
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = colorBg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            hexagons.forEach(hex => hex.draw(ctx));

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0 bg-[#050505] pointer-events-none"
        />
    );
}

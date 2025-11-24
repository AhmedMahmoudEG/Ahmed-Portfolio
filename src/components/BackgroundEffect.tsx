"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    life: number;
    maxLife: number;
    alpha: number;
    color: string;
    type: "smoke" | "spirit";
}

export default function BackgroundEffect() {
    const bgCanvasRef = useRef<HTMLCanvasElement>(null);
    const cursorCanvasRef = useRef<HTMLCanvasElement>(null);

    const particlesRef = useRef<Particle[]>([]);
    const cursorRef = useRef({ x: 0, y: 0 });
    const trailRef = useRef({ x: 0, y: 0 });
    const lastTimeRef = useRef<number>(0);

    // Interaction State
    const isHoveringRef = useRef(false);
    const isClickingRef = useRef(false);
    const clickAnimationRef = useRef(0); // 0 to 1 progress of cut animation

    useEffect(() => {
        const bgCanvas = bgCanvasRef.current;
        const cursorCanvas = cursorCanvasRef.current;
        if (!bgCanvas || !cursorCanvas) return;

        const bgCtx = bgCanvas.getContext("2d");
        const cursorCtx = cursorCanvas.getContext("2d");
        if (!bgCtx || !cursorCtx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
            cursorCanvas.width = window.innerWidth;
            cursorCanvas.height = window.innerHeight;

            cursorRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            trailRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        };

        const handleMouseMove = (e: MouseEvent) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };

            // Check for hover targets (buttons, links)
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            isHoveringRef.current = !!isInteractive;
        };

        const handleMouseDown = () => {
            isClickingRef.current = true;
            clickAnimationRef.current = 0; // Start animation
        };

        const handleMouseUp = () => {
            isClickingRef.current = false;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Initial positions
        cursorRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        trailRef.current = { ...cursorRef.current };

        const animate = (time: number) => {
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;

            // --- Background Layer (Particles) ---
            bgCtx.fillStyle = "rgba(15, 15, 15, 0.2)";
            bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

            // Interpolate trail position
            const dx = cursorRef.current.x - trailRef.current.x;
            const dy = cursorRef.current.y - trailRef.current.y;
            trailRef.current.x += dx * 0.12;
            trailRef.current.y += dy * 0.12;

            // Spawn particles
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 1) {
                const spawnCount = Math.min(8, Math.ceil(dist * 0.15));

                for (let i = 0; i < spawnCount; i++) {
                    const isSpirit = Math.random() > 0.85;

                    particlesRef.current.push({
                        x: trailRef.current.x + (Math.random() - 0.5) * 25,
                        y: trailRef.current.y + (Math.random() - 0.5) * 25,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * (isSpirit ? 15 : 40) + 5,
                        life: 1.0,
                        maxLife: 1.0,
                        alpha: Math.random() * 0.4 + 0.1,
                        color: isSpirit ? "#2dd4bf" : "#2e1065",
                        type: isSpirit ? "spirit" : "smoke",
                    });
                }
            }

            // Draw Particles
            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];

                p.x += p.vx;
                p.y += p.vy;
                p.vx += (Math.random() - 0.5) * 0.2;
                p.vy += (Math.random() - 0.5) * 0.2;
                p.life -= 0.02;

                if (p.life <= 0) {
                    particlesRef.current.splice(i, 1);
                    continue;
                }

                bgCtx.beginPath();
                bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                if (p.type === "spirit") {
                    bgCtx.shadowBlur = 15;
                    bgCtx.shadowColor = "#2dd4bf";
                    bgCtx.fillStyle = `rgba(45, 212, 191, ${p.alpha * p.life})`;
                } else {
                    bgCtx.shadowBlur = 20;
                    bgCtx.shadowColor = "#4c1d95";
                    bgCtx.fillStyle = `rgba(26, 11, 46, ${p.alpha * p.life * 1.5})`;
                }
                bgCtx.fill();
                bgCtx.shadowBlur = 0;
            }

            if (particlesRef.current.length > 200) {
                particlesRef.current.splice(0, particlesRef.current.length - 200);
            }

            // --- Cursor Layer ---
            cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

            const cx = cursorRef.current.x;
            const cy = cursorRef.current.y;

            cursorCtx.save();
            cursorCtx.translate(cx, cy);

            if (isHoveringRef.current) {
                // --- Sword Cursor (Scaled Down) ---

                // Handle Click Animation (Slash)
                let rotation = 0;
                if (isClickingRef.current) {
                    clickAnimationRef.current = Math.min(clickAnimationRef.current + 0.2, 1);
                } else {
                    clickAnimationRef.current = Math.max(clickAnimationRef.current - 0.1, 0);
                }

                // Rotate -45deg to 45deg based on click
                rotation = clickAnimationRef.current * Math.PI / 2;
                cursorCtx.rotate(rotation);

                // Glow
                cursorCtx.shadowBlur = 20;
                cursorCtx.shadowColor = "#2dd4bf";

                // Blade
                cursorCtx.beginPath();
                cursorCtx.moveTo(0, 0);
                cursorCtx.lineTo(-3, -15); // Base left (scaled down)
                cursorCtx.lineTo(0, -40);  // Tip (scaled down)
                cursorCtx.lineTo(3, -15);  // Base right (scaled down)
                cursorCtx.closePath();
                cursorCtx.fillStyle = "#e2e8f0"; // Silver blade
                cursorCtx.fill();

                // Hilt/Crossguard
                cursorCtx.beginPath();
                cursorCtx.moveTo(-7, -10); // Scaled down
                cursorCtx.lineTo(7, -10);  // Scaled down
                cursorCtx.lineWidth = 3;   // Scaled down
                cursorCtx.strokeStyle = "#2dd4bf"; // Teal crossguard
                cursorCtx.stroke();

                // Handle
                cursorCtx.beginPath();
                cursorCtx.moveTo(0, -10); // Scaled down
                cursorCtx.lineTo(0, 0);
                cursorCtx.lineWidth = 2;  // Scaled down
                cursorCtx.strokeStyle = "#1e293b"; // Dark handle
                cursorCtx.stroke();

                // Pommel
                cursorCtx.beginPath();
                cursorCtx.arc(0, 1.5, 2, 0, Math.PI * 2); // Scaled down
                cursorCtx.fillStyle = "#2dd4bf";
                cursorCtx.fill();

            } else {
                // --- Default Wolf Diamond Cursor ---

                // Outer Glow
                cursorCtx.shadowBlur = 15;
                cursorCtx.shadowColor = "#2dd4bf";

                // Main shape
                cursorCtx.beginPath();
                cursorCtx.moveTo(0, -8);
                cursorCtx.lineTo(6, 0);
                cursorCtx.lineTo(0, 8);
                cursorCtx.lineTo(-6, 0);
                cursorCtx.closePath();
                cursorCtx.fillStyle = "#2dd4bf";
                cursorCtx.fill();

                // Inner detail
                cursorCtx.beginPath();
                cursorCtx.moveTo(0, -4);
                cursorCtx.lineTo(3, 0);
                cursorCtx.lineTo(0, 4);
                cursorCtx.lineTo(-3, 0);
                cursorCtx.closePath();
                cursorCtx.fillStyle = "#ffffff";
                cursorCtx.fill();
            }

            cursorCtx.restore();

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={bgCanvasRef}
                className="fixed inset-0 -z-10 pointer-events-none"
            />
            <canvas
                ref={cursorCanvasRef}
                className="fixed inset-0 z-[9999] pointer-events-none"
            />
        </>
    );
}

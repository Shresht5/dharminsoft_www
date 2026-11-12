"use client";
import { useEffect, useRef, useState } from "react";
import H from "@/components/text/H";
import P from "@/components/text/P";

interface StatItem {
    target: number;
    suffix: string;
    label: string;
}

const STATS: StatItem[] = [
    { target: 25, suffix: "+", label: "Happy customers" },
    { target: 6, suffix: "+", label: "Years of experience" },
    { target: 80, suffix: "%", label: "Customers recommend" },
    { target: 15, suffix: "+", label: "Projects served" },
];

function AnimatedCounter({
    target,
    suffix,
    start,
    duration = 1800,
}: {
    target: number;
    suffix: string;
    start: boolean;
    duration?: number;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic for smooth deceleration at the end
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [start, target, duration]);

    return (
        <span className="font-[family-name:var(--font-serif)] text-[40px] md:text-[50px] font-bold text-[var(--colour-front)] ">
            {count}
            <span className="text-[var(--colour-blue)]">{suffix}</span>
        </span>
    );
}

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="max-w-[1080px] mx-auto px-4 py-12 md:py-16"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center justify-center space-y-1 p-4 rounded-xl border border-[var(--colour-gray)]/15"
                    >
                        <H className="leading-none">
                            <AnimatedCounter
                                target={stat.target}
                                suffix={stat.suffix}
                                start={hasStarted}
                            />
                        </H>
                        <P className=" text-[var(--colour-gray)]">
                            {stat.label}
                        </P>
                    </div>
                ))}
            </div>
        </div>
    );
}

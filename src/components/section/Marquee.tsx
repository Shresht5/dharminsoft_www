export default function Marquee({ data }: { data: string[] }) {
    return (
        <div className="w-full overflow-hidden border-y  py-4 select-none">
            <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused]">
                {[0, 1, 2, 3].map((groupIndex) => (
                    <div
                        key={groupIndex}
                        aria-hidden={groupIndex === 1}
                        className="flex shrink-0 items-center gap-6 pr-6"
                    >
                        {data.map((item) => (
                            <div key={`${groupIndex}-${item}`} className="flex items-center gap-6">
                                <span className="font-(--font-unique) text-base md:text-lg font-medium tracking-wide text-[var(--colour-back)] whitespace-nowrap">
                                    {item}
                                </span>
                                <span className="text-[var(--colour-blue)] text-sm">●</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

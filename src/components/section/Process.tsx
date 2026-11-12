import H from "@/components/text/H";
import P from "@/components/text/P";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Let’s talk",
        description: "Tell us about your business and what slows you down.",
    },
    {
        step: "02",
        title: "We plan",
        description: "You get a clear plan, timeline and price. No surprises.",
    },
    {
        step: "03",
        title: "We build",
        description: "We create your software and show you progress along the way.",
    },
    {
        step: "04",
        title: "We support",
        description: "We train your team and stay close long after launch.",
    },
];

export default function Process() {
    return (
        <div id="process" className="max-w-[1080px] mx-auto px-4 py-12 md:py-16">
            {/* Section Header */}
            <div className="max-w-[640px] space-y-2 mb-10 md:mb-12">
                <H weight="400" className="font-[family-name:var(--font-unique)]  text-[var(--colour-red)]">
                    Simple and stress-free
                </H>
                <H size="40px" className="font-[family-name:var(--font-serif)] text-[var(--colour-front)]">
                    Process
                </H>
                <div className="text-[var(--colour-gray)] pt-1">
                    <P>
                        No confusing jargon. We talk, we plan, we build, and we stay with you afterwards.
                    </P>
                </div>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCESS_STEPS.map((item) => (
                    <div
                        key={item.step}
                        className="relative p-4 rounded-xl border border-[var(--colour-gray)]/20 hover:border-[var(--colour-blue)] transition group flex flex-col justify-between space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-(--font-unique) text-3xl md:text-4xl font-bold text-[var(--colour-blue)]/80 group-hover:text-[var(--colour-blue)] transition">
                                {item.step}
                            </span>
                            <span className="h-[1px] flex-1 ml-4 bg-[var(--colour-gray)]/20 group-hover:bg-[var(--colour-blue)]/40 transition" />
                        </div>

                        <div className="space-y-2">
                            <H size="20px" className="text-[var(--colour-front)]">
                                {item.title}
                            </H>
                            <P className="text-sm md:text-base text-[var(--colour-gray)] leading-relaxed">
                                {item.description}
                            </P>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

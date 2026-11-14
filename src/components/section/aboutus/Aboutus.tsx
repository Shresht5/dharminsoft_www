import H from "@/components/text/H";
import Image from "next/image";

const highlights = [
  {
    number: "01",
    title: "Built for Real Businesses",
    description:
      "We focus on practical tools that replace messy notebooks, spreadsheets, and manual daily work.",
  },
  {
    number: "02",
    title: "Direct Founder Support",
    description:
      "As a dedicated startup team, you work directly with the builders—no middlemen or slow ticket queues.",
  },
  {
    number: "03",
    title: "Startup-Friendly Pricing",
    description:
      "Enterprise-grade software engineered with modern tech at honest, affordable rates for growing teams.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-[1080px] mx-auto px-4 space-y-12">
        {/* Top Row: Story on Left, Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Story Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)] uppercase tracking-wider text-sm font-semibold">
              About DharminSoft
            </H>

            <H
              size="40px"
              className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold leading-tight"
            >
              A small team building big tools for businesses
            </H>

            <p className="text-[var(--colour-gray)] text-base md:text-lg leading-relaxed">
              DharminSoft started with a simple goal: to make reliable, modern
              software accessible to everyday shops, startups, and growing
              companies without the high agency price tag.
            </p>

            <p className="text-[var(--colour-gray)] text-base md:text-lg leading-relaxed">
              We are a focused team of developers who care deeply about clean
              design, fast performance, and software that is actually easy to
              use from day one.
            </p>
          </div>

          {/* Static Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-md bg-slate-100">
              <Image
                src="https://images.pexels.com/photos/7693734/pexels-photo-7693734.jpeg?_gl=1*loxrme*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2MzExOTIkbzMkZzEkdDE3OTQ2MzE4ODMkajMzJGwwJGgw"
                alt="DharminSoft startup team collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Core Values / Startup Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-gray-500/20 p-6 space-y-3"
            >
              <span className="inline-block font-[family-name:var(--font-unique)] text-sm font-bold text-[var(--colour-red)]">
                {item.number}
              </span>

              <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--colour-front)]">
                {item.title}
              </h3>

              <p className="text-[var(--colour-gray)] text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

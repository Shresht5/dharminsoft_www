import Image from "next/image";
import React from "react";
import H from "../../text/H";
import Typewriter from "../../text/Typewriter";
import P from "../../text/P";

export default function MainHome() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden bg-slate-950/55 text-white flex items-center">
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/7434019/pexels-photo-7434019.jpeg?_gl=1*ep0jqh*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2MjQ5NDQkbzEkZzEkdDE3OTQ2MjUxMDMkajU3JGwwJGgw"
        alt="DharminSoft team working on business software"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
        priority
        unoptimized
      />

      {/* Subtle gradient overlay so text is always easy to read */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        {/* Left Column: Headline & Typewriter */}
        <div className="flex-1 space-y-3">
          <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)] tracking-wider uppercase text-sm md:text-base font-semibold">
            Technology partner for growing businesses
          </H>

          {/* Single H1 for better SEO and clean line-height */}
          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-[54px] leading-[1.15] font-bold">
            <span className="block">We build the tools</span>
            <span className="block">
              that <span className="text-[var(--colour-blue)]">run</span> your
            </span>
            <span className="block min-h-[1.2em]">
              <Typewriter
                words={["Shop", "Restaurant", "Business", "Store", "Startup"]}
                className="text-[var(--colour-red)]"
              />
            </span>
          </h1>
        </div>

        {/* Right Column: Description & CTA Buttons */}
        <div className="w-full md:w-auto md:max-w-[400px] space-y-6 flex flex-col items-start md:items-end md:text-right">
          <P className="text-gray-200 text-base md:text-lg leading-relaxed">
            Stop juggling notebooks, spreadsheets and phone calls. DharminSoft
            gives you simple, beautiful software that does the boring work for
            you, so you can focus on your customers.
          </P>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-[var(--colour-red)] hover:opacity-90 text-white font-medium transition cursor-pointer">
              Free Demo
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 text-white font-medium transition cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

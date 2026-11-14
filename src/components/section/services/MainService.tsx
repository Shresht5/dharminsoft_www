import Image from "next/image";
import H from "../../text/H";
import Typewriter from "../../text/Typewriter";
import P from "../../text/P";

export default function MainService() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden bg-slate-950/55 text-white ">
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/7681842/pexels-photo-7681842.jpeg?_gl=1*mc0laf*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2MzExOTIkbzMkZzEkdDE3OTQ2MzEyMzckajE1JGwwJGgw"
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
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 py-16 ">
        {/* Left Column: Headline & Typewriter */}
        <div className="flex-1 space-y-3">
          <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)] tracking-wider  text-sm md:text-base font-semibold">
            Custom software development
          </H>

          {/* Single H1 for better SEO and clean line-height */}
          <H
            size="40px"
            className="font-[family-name:var(--font-serif)] text-[40px]  md:text-[50px] font-semibold"
          >
            Solutions that scale your bussines
          </H>
        </div>

        {/* Right Column: Description & CTA Buttons */}
      </div>
    </div>
  );
}

import H from "@/components/text/H";

const technologies = [
  "React",
  "Node.js",
  "Next.js",
  "React Native",
  "Electron.js",
  "Docker",
  "Nest.js",
  "MySQL",
  "CI/CD",
  "Microservices",
  "TypeScript",
  "OpenAI",
  "Claude AI",
  "MongoDB",
  "HTML",
  "Tailwind",
];

export default function TechStack() {
  return (
    <section className="w-full py-4">
      <div className="max-w-[1080px] mx-auto px-4 space-y-10">
        {/* Section Header */}
        <div>
          <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)]  tracking-wider text-sm font-semibold">
            Our Tech Stack
          </H>
          <H
            size="40px"
            className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold"
          >
            Technologies we use
          </H>
        </div>

        {/* Simple Unified Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="group relative overflow-hidden rounded-xl border border-gray-500/20 px-4 py-5 flex items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--colour-red)]/60 hover:shadow-lg"
            >
              {/* Animated Top Accent Line */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--colour-red)] to-[var(--colour-blue)] transition-all duration-300 group-hover:w-full" />

              {/* Skill Name */}
              <span className="font-[family-name:var(--font-serif)] text-base sm:text-lg font-bold text-[var(--colour-front)] transition-colors duration-300 group-hover:text-[var(--colour-red)]">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

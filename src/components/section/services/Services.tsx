import H from "@/components/text/H";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Beautiful websites that load fast, look great on phones and bring in enquiries.",
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Android and iPhone apps that put your business in your customers' pockets.",
  },
  {
    number: "03",
    title: "Desktop Development",
    description:
      "Powerful programs for your office computers, even when the internet is down.",
  },
  {
    number: "04",
    title: "Host & Domain Setup",
    description:
      "Need hosting on an existing 3rd-party platform? We configure your domain, SSL, and servers smoothly.",
  },
  {
    number: "05",
    title: "Custom Solution",
    description:
      "Need a specific solution or custom program built around your exact business workflow.",
  },
  {
    number: "06",
    title: "Low Rates",
    description:
      "Our rates are among the most competitive in the industry so you always get an affordable price.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-[1080px] mx-auto px-4 space-y-10">
        {/* Section Header (Matches ProductsSection) */}
        <div>
          <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)]  tracking-wider text-sm font-semibold">
            What We Do
          </H>
          <H
            size="40px"
            className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold"
          >
            Our Services
          </H>
        </div>

        {/* 3x2 Services Grid without Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-500/20 p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--colour-red)]/50 hover:shadow-xl"
            >
              {/* Animated Top Accent Bar */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--colour-red)] to-[var(--colour-blue)] transition-all duration-500 ease-out group-hover:w-full" />

              {/* Card Header: Number + Arrow */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-[family-name:var(--font-unique)] text-sm font-bold tracking-widest text-[var(--colour-red)] transition-transform duration-300 group-hover:translate-x-1">
                  {service.number}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="font-[family-name:var(--font-serif)] text-xl md:text-2xl font-bold text-[var(--colour-front)] mb-3 transition-colors duration-300 group-hover:text-[var(--colour-red)]">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[var(--colour-gray)] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import H from "@/components/text/H";
import Image from "next/image";

const products = [
  {
    tag: "Enterprise Suite",
    title: "ERP (Enterprise Resource Planning)",
    description:
      "A comprehensive, all-in-one system that connects every department of a large business—including finance, HR, manufacturing, and supply chain—into a single database.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?_gl=1*ekb5mp*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2Mjc4MjgkbzIkZzEkdDE3OTQ2Mjc5NDAkajM2JGwwJGgw",
    alt: "ERP Enterprise Resource Planning dashboard",
  },
  {
    tag: "Operations & Workflow",
    title: "Management System",
    description:
      "A focused software tool designed to handle one specific operational task—such as tracking store inventory, managing customer contacts, or generating invoices—making it ideal for small to medium businesses.",
    image:
      "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?_gl=1*12l1db5*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2Mjc4MjgkbzIkZzEkdDE3OTQ2Mjc5OTMkajUxJGwwJGgw",
    alt: "Business management system analytics",
  },
  {
    tag: "Online Storefront",
    title: "E-Commerce",
    description:
      "An online storefront and digital platform that allows businesses to showcase products, accept secure payments, and manage orders over the internet.",
    image:
      "https://images.pexels.com/photos/16052344/pexels-photo-16052344.jpeg?_gl=1*2yfr67*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2Mjc4MjgkbzIkZzEkdDE3OTQ2MjgxMzUkajYwJGwwJGgw",
    alt: "E-commerce online store platform",
  },
  {
    tag: "Digital Presence",
    title: "Company Website",
    description:
      "A professional multi-page online presence that establishes business credibility, showcasing home, about us, core services, client testimonials, and direct contact options to convert visitors into customers.",
    image:
      "https://images.pexels.com/photos/8524940/pexels-photo-8524940.jpeg?_gl=1*1gmybue*_ga*MTI2MTIzNTk5OS4xNzk0NjI0OTQ1*_ga_8JE65Q40S6*czE3OTQ2Mjc4MjgkbzIkZzEkdDE3OTQ2MjgxODckajgkbDAkaDA.",
    alt: "Modern company website design",
  },
];

export default function ProductsSection() {
  return (
    <div className="w-full py-8">
      <div className="max-w-[1080px] mx-auto px-4 space-y-8 ">
        {/* Section Header */}
        <div className=" ">
          <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)] uppercase tracking-wider text-sm font-semibold">
            Our Solutions
          </H>
          <H
            size="40px"
            className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold"
          >
            Software built
          </H>
        </div>

        {/* Alternating Rows */}
        <div className="space-y-20 md:space-y-28">
          {products.map((product, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={product.title}
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-14`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-block font-[family-name:var(--font-unique)] text-[var(--colour-red)] text-sm font-semibold uppercase tracking-wider">
                    0{index + 1} — {product.tag}
                  </span>

                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--colour-front)] leading-tight">
                    {product.title}
                  </h3>

                  <p className="text-[var(--colour-gray)] text-base md:text-lg leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2">
                    <button className="px-6 py-2.5 rounded-lg bg-[var(--colour-red)] hover:opacity-90 text-white font-medium text-sm transition cursor-pointer">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import H from "@/components/text/H";
import P from "@/components/text/P";
import Links from "@/components/button/Links";

const PRODUCTS = [
    {
        title: "Company Website",
        tag: "Online Presence",
        description:
            "Fast, mobile-friendly websites designed to showcase your brand, build trust, and convert visitors into customers.",
        href: "/product#company-website",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        title: "E-Commerce",
        tag: "Online Store",
        description:
            "Complete online stores with product catalogs, smooth checkout, payment gateways, and order tracking.",
        href: "/product#ecommerce",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Management App",
        tag: "Operations",
        description:
            "Custom web and mobile apps to manage daily tasks, staff attendance, customers, and appointments in one place.",
        href: "/product#management-app",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "ERP",
        tag: "All-in-One System",
        description:
            "End-to-end enterprise software connecting billing, inventory, accounting, HR, and real-time business reports.",
        href: "/product#erp",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
    },
];

export default function Products() {
    return (
        <div id="products" className="max-w-[1080px] mx-auto px-4 py-12 md:py-16">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
                <div className="max-w-[600px] space-y-2">
                    <H className="font-[family-name:var(--font-unique)]" weight="400" colour="--colour-red">
                        Our Products
                    </H>
                    <H size="40px" className="font-[family-name:var(--font-serif)] text-[var(--colour-front)]">
                        Software built to grow your business
                    </H>
                </div>

                <Links href="/product">
                    <P className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-[var(--colour-blue)] hover:underline">
                        View all products →
                    </P>
                </Links>
            </div>

            {/* 2x2 Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((product) => (
                    <div
                        key={product.title}
                        className="p-6 md:p-8 rounded-xl border border-[var(--colour-gray)]/20 hover:border-[var(--colour-blue)] transition group flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-4">
                            {/* Icon + Category Tag */}
                            <div className="flex items-center justify-between">
                                <div className="p-3 rounded-lg bg-[var(--colour-blue)]/10 text-[var(--colour-blue)]">
                                    {product.icon}
                                </div>
                                <span className="font-(--font-unique) text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--colour-gray)]/10 text-[var(--colour-gray)]">
                                    {product.tag}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-2">
                                <H size="22px" className="text-[var(--colour-front)] group-hover:text-[var(--colour-blue)] transition">
                                    {product.title}
                                </H>
                                <P className="text-sm md:text-base text-[var(--colour-gray)] leading-relaxed">
                                    {product.description}
                                </P>
                            </div>
                        </div>

                        {/* Action Link */}
                        <div className="pt-2">
                            <Links href={product.href}>
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--colour-front)] group-hover:text-[var(--colour-blue)] transition">
                                    Learn more
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Links>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

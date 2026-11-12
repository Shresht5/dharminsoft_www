import H from "@/components/text/H";
import P from "@/components/text/P";
import React from 'react'

export default function ContactS() {
    return (
        <div id="contact" className="max-w-[1080px] mx-auto px-4 py-8 md:py-12">
            <H className="font-[family-name:var(--font-unique)]" weight="400" colour="--colour-red">Seek us here</H>
            <H size="40px" className="font-[family-name:var(--font-serif)] text-[var(--colour-front)]">
                Contact
            </H>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Working Hours */}
                <div className="p-4 rounded-xl   space-y-2">
                    <H size="18px" className="text-[var(--colour-blue)]">
                        Working hours
                    </H>
                    <div className="text-sm md:text-base text-[var(--colour-gray)] space-y-1">
                        <P>Mon-Sat : (10:00 to 18:00)</P>
                        <P>Sat-Sun : (10:00 to 14:00)</P>
                    </div>
                </div>

                {/* Address */}
                <div className="p-4 rounded-xl  space-y-2">
                    <H size="18px" className="text-[var(--colour-blue)]">
                        Address
                    </H>
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm md:text-base text-[var(--colour-gray)] hover:text-[var(--colour-front)] transition"
                    >
                        Bhopal, Madhya Pradesh, India
                    </a>
                </div>

                {/* Support */}
                <div className="p-4 rounded-xl  space-y-2">
                    <H size="18px" className="text-[var(--colour-blue)]">
                        Support
                    </H>
                    <div className="flex flex-col space-y-1 text-sm md:text-base text-[var(--colour-gray)]">
                        <a
                            href="mailto:dharminsoft@gmail.com"
                            className="hover:text-[var(--colour-blue)] transition"
                        >
                            dharminsoft@gmail.com
                        </a>
                        <a
                            href="tel:+918827086468"
                            className="hover:text-[var(--colour-blue)] transition"
                        >
                            +91 88270 86468
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

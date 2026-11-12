import Image from 'next/image'
import React from 'react'
import H from '../text/H'
import Typewriter from '../text/Typewriter'
import P from '../text/P'

export default function Main() {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-[var(--colour-gray)] text-white ">
            <Image
                src="https://images.pexels.com/photos/8101611/pexels-photo-8101611.jpeg?_gl=1*36rkgl*_ga*MjQ2MTQ5MjYzLjE3NjM3MjMxMTY.*_ga_8JE65Q40S6*czE3OTQ0NjI3ODIkbzQkZzEkdDE3OTQ0NjI5MDQkajE2JGwwJGgw"
                alt="photo of company"
                fill
                sizes="100vw"
                className="object-cover object-top opacity-60"
                loading="eager"
                unoptimized
            />
            <div className="absolute h-full max-w-[1080px] mx-auto flex flex-col md:flex-row items-start justify-center px-4 space-y-2 md:space-y-4">
                <div>
                    <div>
                        <H className="font-[family-name:var(--font-unique)] text-[var(--colour-red)]">Technology partner for growing businesses</H>
                    </div>
                    <div className="space-y-0">
                        <h1 className="font-[family-name:var(--font-serif)] text-[40px] md:text-[50px]">We build the tools</h1>
                        <h1 className="font-[family-name:var(--font-serif)] text-[40px] md:text-[50px]">that <span className="text-[var(--colour-blue)]">run</span> your</h1>
                        <Typewriter
                            words={["Shop", "Restaurant", "Business", "Store", "Startup"]}
                            className="font-[family-name:var(--font-serif)] text-[var(--colour-red)] text-[40px] md:text-[50px] "
                        />
                    </div>
                </div>
                <div className="space-y-2 md:space-y-4 flex flex-col justify-end">
                    <div>
                        <P className="max-w-[400px]">Stop juggling notebooks, spreadsheets and phone calls. DharminSoft gives you simple, beautiful software that does the boring work for you, so you can focus on your customers.</P>
                    </div>
                    <div className="flex space-x-4 flex  justify-end">
                        <H>contact us</H>
                        <H>Free Demo</H>
                    </div>
                </div>
            </div>
        </div>
    )
}

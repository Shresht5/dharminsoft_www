import React from 'react'
import H from '../text/H'
import P from '../text/P'
import Links from '../button/Links'

const SOCIAL_LINKS = [
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
    {
        name: "X",
        href: "https://x.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="px-4 py-8 max-w-270 mx-auto space-y-4">
            <H size="20px"><Links href='/'>DS</Links></H>        {/* logo */}
            <div className="grid sm:grid-cols-2 space-y-4">
                <div className="space-y-2">
                    <H size="20px"><Links href='/'>DharminSoft</Links></H>
                    <P colour="--colour-back" className="max-w-[400px]">From a website that wins trust to an app your customers love, our team can take care of your complete digital presence under one roof.</P>
                    <div className="flex items-center gap-4">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-current hover:text-[var(--colour-blue)] transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="space-y-2 flex flex-col sm:items-end">
                    <H><Links href='/product'>Products</Links></H>
                    <H><Links href='/service'>Services</Links></H>
                    <H><Links href='/aboutus'>About Us</Links></H>
                    <H><Links href='/contactus'>Contact Us</Links></H>
                </div>
            </div>
        </footer >
    )
}

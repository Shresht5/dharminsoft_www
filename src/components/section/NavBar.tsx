"use client";
import { useState } from "react";
import Links from "@/components/button/Links";
import H from "@/components/text/H";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/service", label: "Services" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contactus", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative max-w-[1080px] mx-auto px-4 py-4 border-b-[2px] border-[var(--colour-gray)]">
      <div className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Links href="/">
          <div className="flex gap-1 items-center">
            <H size="20px" className="inline pr-1">
              DS
            </H>
            <H className="inline">DharminSoft</H>
          </div>
        </Links>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Links key={link.href} href={link.href}>
              <H weight={"400"}>{link.label}</H>
            </Links>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-1 text-[var(--colour-front)]"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 fill-none stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 fill-none stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full z-50 bg-[var(--colour-back)] grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Links
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setIsOpen(!isOpen)}
              >
                <H weight={"400"}>{link.label}</H>
              </Links>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

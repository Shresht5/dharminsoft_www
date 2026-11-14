import H from "@/components/text/H";
import P from "@/components/text/P";

const CONTACT_DETAILS = [
  {
    title: "Email Us",
    value: "dharminsoft@gmail.com",
    href: "mailto:dharminsoft@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Call Us",
    value: "+91 8827086468",
    href: "tel:+918827086468",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Visit Our Office",
    value: "Bhopal, Madhya Pradesh 462011, India",
    href: "https://maps.app.goo.gl/9KpzCNtk81b96iUQ9",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Contactus() {
  return (
    <div id="contact" className="max-w-[1080px] mx-auto px-4 py-4 md:py-8">
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <H className="font-[family-name:var(--font-unique)] text-xs sm:text-sm  tracking-wider text-[var(--colour-red)]">
          Get In Touch
        </H>
        <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-[var(--colour-front)]">
          Contact Us
        </h2>
        <div className="max-w-[560px] text-[var(--colour-gray)]">
          <P>
            Have a project in mind or want a free demo of our software? Reach
            out to our Bhopal team anytime.
          </P>
        </div>
      </div>

      {/* Two-Column Layout: Contact Info Left + Bhopal Map Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Contact Cards */}
        <div className="flex flex-col justify-between gap-4">
          {CONTACT_DETAILS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-start gap-4 p-5 rounded-xl border border-[var(--colour-gray)]/20 hover:border-[var(--colour-blue)] transition group"
            >
              <div className="p-3 rounded-lg bg-[var(--colour-blue)]/10 text-[var(--colour-blue)] shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <H
                  size="18px"
                  className="group-hover:text-[var(--colour-blue)] transition"
                >
                  {item.title}
                </H>
                <P className="text-sm md:text-base text-[var(--colour-gray)]">
                  {item.value}
                </P>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Embedded Bhopal Map */}
        <div className="w-full min-h-[320px] md:min-h-full rounded-xl overflow-hidden border border-[var(--colour-gray)]/20">
          <iframe
            title="DharminSoft Office Location in Bhopal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.74934683295!2d77.40589145000001!3d23.199409700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1794473541309!5m2!1sen!2sin"
            className="w-full h-full min-h-[320px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}

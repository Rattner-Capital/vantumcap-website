"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Investment Strategy", href: "#strategy" },
  { label: "Our Team", href: "#team" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Disciplined Approach",
    body: "Rigorous research and a disciplined investment process.",
    icon: "◫",
  },
  {
    title: "Risk Management",
    body: "Protecting capital while seeking attractive returns.",
    icon: "◇",
  },
  {
    title: "Aligned Interests",
    body: "We invest alongside our partners and clients.",
    icon: "◌",
  },
  {
    title: "Long-Term Perspective",
    body: "Building lasting value through patience and conviction.",
    icon: "◎",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-vantum-ink text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg-clean.png')" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,13,24,0.9)_0%,rgba(7,13,24,0.72)_26%,rgba(7,13,24,0.36)_48%,rgba(7,13,24,0.12)_72%,rgba(7,13,24,0.03)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,14,25,0.7)_0%,rgba(8,14,25,0.4)_22%,rgba(8,14,25,0.16)_44%,rgba(8,14,25,0)_70%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7 md:px-14 md:pt-9">
          <header className="relative flex items-center justify-between gap-4">
            <div className="relative h-[74px] w-[240px] overflow-hidden sm:h-[86px] sm:w-[300px]">
              <Image
                src="/vantum-logo.png"
                alt="Vantum Capital"
                fill
                priority
                className="origin-left scale-[2.35] object-contain object-left"
              />
            </div>

            <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.12em] text-slate-200 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-vantum-lightGold"
                >
                  {item.label}
                </a>
              ))}
              <button className="rounded-sm border border-vantum-lightGold/60 px-4 py-2 text-[11px] tracking-[0.16em] text-vantum-lightGold transition-colors hover:border-vantum-lightGold hover:bg-vantum-lightGold/10">
                Investor Login
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="rounded-sm border border-vantum-lightGold/50 p-2 text-vantum-lightGold lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            </button>

            {mobileMenuOpen ? (
              <div className="absolute right-0 top-14 w-[92vw] max-w-xs rounded-md border border-vantum-lightGold/30 bg-[#0b1321]/95 p-4 shadow-glow backdrop-blur md:w-[360px] lg:hidden">
                <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.12em] text-slate-100">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-sm border border-transparent px-2 py-2 transition hover:border-vantum-lightGold/35 hover:text-vantum-lightGold"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button className="mt-2 rounded-sm border border-vantum-lightGold/60 px-3 py-2 text-vantum-lightGold">
                    Investor Login
                  </button>
                </nav>
              </div>
            ) : null}
          </header>

          <section className="flex flex-1 items-center pb-28 pt-16 sm:pt-24 lg:pb-36 lg:pt-28">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl leading-[0.95] text-slate-100 sm:text-6xl md:text-7xl lg:text-[86px]">
                Turning Situational Complexity
                <br />
                Into Outcomes
                <span className="text-vantum-gold">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200/95 sm:text-xl">
                Vantum Capital invests in situations shaped by operational and
                capital structure complexity, unlocking value through deep
                research, rigorous underwriting, hands-on execution, and
                disciplined risk management.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#strategy"
                  className="rounded-sm bg-vantum-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-ink transition hover:bg-vantum-lightGold"
                >
                  Our Strategy
                </a>
                <a
                  href="#about"
                  className="rounded-sm border border-vantum-gold/70 bg-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-lightGold transition hover:bg-vantum-gold/15"
                >
                  About Vantum
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/15 bg-[#0c1523]/55 shadow-glow backdrop-blur-md">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="flex items-start gap-3 px-5 py-5 sm:px-6 lg:min-h-[112px]"
                >
                  <div className="pt-1 text-lg text-vantum-gold">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-slate-100">
                      {feature.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300/95">
                      {feature.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-[#0b1321]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 md:px-10">
          <h3 className="font-serif text-4xl text-slate-100">About Us</h3>
          <p className="mt-5 max-w-3xl text-slate-300">
            Vantum Capital is an independent investment firm focused on
            protecting capital and compounding value through cycles. We pursue
            opportunities where disciplined underwriting and thoughtful
            structuring can create durable outcomes.
          </p>
        </div>
      </section>

      <section id="strategy" className="border-t border-white/10 bg-[#0a111d]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 md:px-10">
          <h3 className="font-serif text-4xl text-slate-100">
            Investment Strategy
          </h3>
          <p className="mt-5 max-w-3xl text-slate-300">
            Our strategy is built around selective positioning, downside-aware
            risk controls, and a repeatable research process. We focus on
            asymmetric opportunities with clear catalysts and disciplined exit
            frameworks.
          </p>
        </div>
      </section>

      <section id="team" className="border-t border-white/10 bg-[#0b1321]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 md:px-10">
          <h3 className="font-serif text-4xl text-slate-100">Our Team</h3>
          <p className="mt-5 max-w-3xl text-slate-300">
            The firm combines institutional investment experience with a
            partnership mindset. We prioritize alignment, transparency, and a
            high-conviction process grounded in deep fundamental work.
          </p>
        </div>
      </section>

      <section id="insights" className="border-t border-white/10 bg-[#0a111d]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 md:px-10">
          <h3 className="font-serif text-4xl text-slate-100">Insights</h3>
          <p className="mt-5 max-w-3xl text-slate-300">
            We publish periodic market commentary and portfolio perspectives
            designed to communicate our thinking and provide context for
            portfolio positioning.
          </p>
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 bg-[#0b1321]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 md:px-10">
          <h3 className="font-serif text-4xl text-slate-100">Contact</h3>
          <p className="mt-5 max-w-3xl text-slate-300">
            For investor and partnership inquiries, please contact the Vantum
            Capital team at{" "}
            <a
              href="mailto:info@vantumcap.com"
              className="text-vantum-lightGold underline underline-offset-4"
            >
              info@vantumcap.com
            </a>
            .
          </p>
          <a
            href="mailto:info@vantumcap.com"
            className="mt-8 inline-block rounded-sm border border-vantum-gold/70 px-6 py-3 text-sm uppercase tracking-[0.14em] text-vantum-lightGold transition hover:bg-vantum-gold/15"
          >
            Send an inquiry
          </a>
        </div>
      </section>
    </main>
  );
}

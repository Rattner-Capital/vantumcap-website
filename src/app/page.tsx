"use client";

import SiteHeader from "@/components/SiteHeader";

const features = [
  {
    title: "Distressed & Special Situations",
    body: "Dislocated opportunities driven by complexity and execution.",
    icon: "◫",
  },
  {
    title: "Underperforming Credit",
    body: "Mispriced credit with downside protection focus.",
    icon: "◇",
  },
  {
    title: "Buyout Vehicles",
    body: "Control investments driving operational value creation.",
    icon: "◌",
  },
  {
    title: "Asset Turnarounds",
    body: "Repositioning assets through hands-on execution.",
    icon: "◎",
  },
];

export default function Home() {
  return (
    <main className="bg-vantum-ink text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-[100%_auto] bg-[center_32%] bg-no-repeat"
          style={{ backgroundImage: "url('/hero-clean.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col pb-8 pt-2 sm:pb-10 sm:pt-3 md:pt-4">
          <div className="shrink-0 px-5 sm:px-8 md:px-14">
            <SiteHeader overlay />
          </div>

          <div className="flex min-h-0 flex-1 flex-col pl-4 pr-5 sm:pl-6 sm:pr-8 md:pl-10 md:pr-14">
            <section className="relative z-0 shrink-0 pb-8 pt-32 sm:pb-10 sm:pt-36 lg:pb-12 lg:pt-40">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl leading-[0.98] text-slate-100 sm:text-5xl md:text-6xl lg:text-[74px]">
                  Turning Complexity
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
                    href="/strategy"
                    className="rounded-sm bg-vantum-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-ink transition hover:bg-vantum-lightGold"
                  >
                    Our Strategy
                  </a>
                  <a
                    href="/about"
                    className="rounded-sm border border-vantum-gold/70 bg-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-lightGold transition hover:bg-vantum-gold/15"
                  >
                    About Vantum
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-auto mb-6 shrink-0 rounded-2xl border border-white/15 bg-[#0c1523]/55 shadow-glow backdrop-blur-md sm:mb-8">
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
        </div>
      </section>

      <section id="about" className="border-t border-white/15 bg-[#06173B]">
        <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10 md:py-36">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs text-slate-400">01</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-vantum-lightGold">
                About Vantum
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl">
                Independent capital for complex and dislocated opportunities.
              </h2>
              <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                <p>
                  Vantum Capital is a multi-strategy investment firm focused on
                  situations shaped by operational and capital structure
                  complexity.
                </p>
                <p>
                  We pair deep research, rigorous underwriting, and hands-on
                  execution to pursue differentiated outcomes with disciplined
                  risk management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#06173B]">
        <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10 md:py-36">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs text-slate-400">02</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-vantum-lightGold">
                Investment Philosophy
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl">
                Credit-intensive, research-driven, and execution-focused.
              </h2>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
                <div>
                  <h3 className="font-serif text-2xl text-white">Downside First</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    Structure and sizing decisions prioritize capital
                    preservation through cycles.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    Selective Conviction
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    We concentrate in opportunities where complexity creates
                    durable mispricing.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    Active Execution
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    Hands-on engagement supports value realization and risk
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="border-t border-white/15 bg-[#06173B]">
        <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10 md:py-36">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs text-slate-400">03</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-vantum-lightGold">
                Strategy / Areas of Focus
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl">
                Dynamic allocation across a focused strategy set.
              </h2>
              <div className="mt-10 grid gap-0 border-y border-white/15">
                {features.map((feature) => (
                  <article
                    key={`strategy-${feature.title}`}
                    className="grid gap-5 border-b border-white/15 py-8 last:border-b-0 sm:grid-cols-12 sm:gap-8"
                  >
                    <div className="sm:col-span-5">
                      <h3 className="font-serif text-3xl leading-tight text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="sm:col-span-7">
                      <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                        {feature.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-white/15 bg-[#06173B]">
        <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10 md:py-36">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs text-slate-400">04</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-vantum-lightGold">
                Contact
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl">
                Partner with Vantum Capital
              </h2>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
                For investor and partnership inquiries, please contact us at{" "}
                <a
                  href="mailto:info@vantumcap.com"
                  className="text-vantum-lightGold underline underline-offset-4"
                >
                  info@vantumcap.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

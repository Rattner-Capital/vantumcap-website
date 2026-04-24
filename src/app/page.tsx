const navItems = [
  "About Us",
  "Investment Strategy",
  "Our Team",
  "Insights",
  "Contact",
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
  return (
    <main className="relative min-h-screen overflow-hidden bg-vantum-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-reference.png')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,14,25,0.88)_0%,rgba(8,14,25,0.58)_28%,rgba(8,14,25,0.18)_55%,rgba(8,14,25,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,14,25,0.84)_0%,rgba(8,14,25,0.5)_22%,rgba(8,14,25,0.18)_40%,rgba(8,14,25,0)_65%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7 md:px-14 md:pt-9">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-sm border border-vantum-lightGold/65 text-vantum-lightGold sm:h-12 sm:w-12">
              VC
            </div>
            <div className="font-serif text-xl tracking-wide text-slate-100 sm:text-3xl">
              Vantum Capital
            </div>
          </div>

          <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.12em] text-slate-200 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-vantum-lightGold"
              >
                {item}
              </a>
            ))}
            <button className="rounded-sm border border-vantum-lightGold/60 px-4 py-2 text-[11px] tracking-[0.16em] text-vantum-lightGold transition-colors hover:border-vantum-lightGold hover:bg-vantum-lightGold/10">
              Investor Login
            </button>
          </div>
        </header>

        <section className="flex flex-1 items-center pb-28 pt-16 sm:pt-24 lg:pb-36 lg:pt-28">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl leading-[0.95] text-slate-100 sm:text-6xl md:text-7xl lg:text-[86px]">
              Invested in
              <br />
              Enduring Value
              <span className="text-vantum-gold">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200/95 sm:text-xl">
              Vantum Capital is a multi-strategy investment firm focused on
              generating consistent, risk-adjusted returns across market cycles.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-sm bg-vantum-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-ink transition hover:bg-vantum-lightGold">
                Our Strategy
              </button>
              <button className="rounded-sm border border-vantum-gold/70 bg-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-vantum-lightGold transition hover:bg-vantum-gold/15">
                About Vantum
              </button>
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
                <div className="pt-1 text-lg text-vantum-gold">{feature.icon}</div>
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
    </main>
  );
}

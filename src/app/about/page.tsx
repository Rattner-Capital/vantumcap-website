import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#0a111d]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#d0ac72]">About Vantum</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Firm Overview</h1>
        <p id="firm-overview" className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Vantum Capital is a special situations investment firm focused on complexity, dislocation, and operational transformation. We invest where capital structure nuance and execution depth create differentiated risk-adjusted opportunities.
        </p>
        <section id="team" className="mt-14 border-t border-white/10 pt-14">
          <h2 className="font-serif text-4xl text-white">Team</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Our leadership team combines principal investing, institutional trading, and operational scaling experience across stressed and transition-intensive environments.</p>
          <Link href="/team" className="mt-6 inline-block text-xs uppercase tracking-[0.14em] text-[#d0ac72]">
            Meet the Team
          </Link>
        </section>
        <section id="governance-compliance" className="mt-14 border-t border-white/10 pt-14">
          <h2 className="font-serif text-4xl text-white">Governance & Compliance</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Vantum employs structured governance processes, role clarity, and documented investment committee procedures designed for institutional accountability.</p>
        </section>
        <section id="risk-management" className="mt-14 border-t border-white/10 pt-14">
          <h2 className="font-serif text-4xl text-white">Risk Management</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Risk controls are embedded in sourcing, underwriting, and portfolio construction with emphasis on downside scenarios, liquidity discipline, and catalyst validation.</p>
        </section>
      </div>
    </main>
  );
}

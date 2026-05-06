export default function InvestorsPage() {
  return (
    <main className="bg-[#0a111d]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#d0ac72]">Investors</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Investor Overview</h1>
        <p id="overview" className="mt-6 max-w-3xl text-slate-300">
          Vantum Capital partners with sophisticated institutions seeking complexity-oriented, research-intensive special situations exposure.
        </p>
        <section id="onboarding-access" className="mt-12 border-t border-white/10 pt-12">
          <h2 className="font-serif text-4xl text-white">Onboarding & Access</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Onboarding workflows are structured for institutional diligence, documentation, and communication cadence. Access protocols are coordinated directly through investor relations.
          </p>
        </section>
        <section id="data-room-access" className="mt-12 border-t border-white/10 pt-12">
          <h2 className="font-serif text-4xl text-white">Data Room Access</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Secure materials are shared through approved channels after eligibility review and completion of required documentation.
          </p>
        </section>
      </div>
    </main>
  );
}

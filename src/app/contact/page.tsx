export default function ContactPage() {
  return (
    <main className="bg-[#090f19]">
      <div className="mx-auto max-w-[900px] px-6 py-20 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#d0ac72]">Contact</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Institutional Inquiries</h1>
        <p className="mt-6 text-lg text-slate-300">For investor onboarding, strategic opportunities, and firm-level introductions, please contact:</p>
        <div className="mt-8 border border-white/10 bg-[#101827] p-8">
          <p className="text-xs uppercase tracking-[0.14em] text-[#d0ac72]">Investor Relations</p>
          <a href="mailto:investorrelations@vantumcap.com" className="mt-3 block font-serif text-3xl text-white">
            investorrelations@vantumcap.com
          </a>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">
            Please include your institution, investment focus, and preferred contact details. Vantum responds to relevant institutional inquiries on a rolling basis.
          </p>
        </div>
      </div>
    </main>
  );
}

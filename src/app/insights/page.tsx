import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-vantum-ink px-6 py-24 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-5xl">Insights</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          This page is coming soon.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-sm border border-vantum-gold/70 px-5 py-2 text-sm uppercase tracking-[0.12em] text-vantum-lightGold hover:bg-vantum-gold/15"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

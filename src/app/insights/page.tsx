import { insightPosts } from "@/components/site/siteData";

export default function InsightsPage() {
  return (
    <main className="bg-[#0a111d]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#d0ac72]">Insights</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Insights Hub</h1>
        <p id="insights-hub" className="mt-6 max-w-2xl text-slate-300">Research, market commentary, and thematic perspectives on complexity-driven investing.</p>
        <section id="market-commentary" className="mt-12 grid gap-4 md:grid-cols-3">
          {insightPosts.map((post) => (
            <article key={post.title} className="border border-white/10 bg-[#101827] p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[#d0ac72]">{post.category}</p>
              <h2 className="mt-3 font-serif text-2xl text-white">{post.title}</h2>
              <p className="mt-3 text-sm text-slate-400">{post.date}</p>
            </article>
          ))}
        </section>
        <section id="research-whitepapers" className="mt-12 border-t border-white/10 pt-12">
          <h2 className="font-serif text-4xl text-white">Research & Whitepapers</h2>
          {/* Replace these placeholders with approved publications when available. */}
          <p className="mt-4 max-w-3xl text-slate-300">Vantum publishes periodic thematic research and whitepapers for institutional audiences. Please contact investor relations for distribution lists and publication notifications.</p>
        </section>
      </div>
    </main>
  );
}

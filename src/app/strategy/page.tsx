import { strategyCards } from "@/components/site/siteData";

export default function StrategyPage() {
  return (
    <main className="bg-[#0b1220]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#d0ac72]">Investment Strategies</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Disciplined deployment across complex opportunity sets.</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {strategyCards.map((strategy) => {
            const anchorMap: Record<string, string> = {
              "Special Situations": "special-situations",
              "Distressed Credit": "distressed-credit",
              "Real Estate Value Transformation": "real-estate",
              "Event-Driven Opportunities": "event-driven",
              "Advisory & Co-Investment": "advisory",
            };
            const id = anchorMap[strategy.title];
            return (
              <article id={id} key={strategy.title} className="border border-white/10 bg-[#101a2d] p-7">
                <h2 className="font-serif text-3xl text-white">{strategy.title}</h2>
                <p className="mt-4 text-slate-300">{strategy.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

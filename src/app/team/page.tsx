import Link from "next/link";
import { teamMembers } from "./teamData";

export default function TeamPage() {
  return (
    <main className="bg-[#0a111d]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <div className="border-b border-white/10 pb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#d0ac72]">Leadership</p>
          <h1 className="mt-4 font-serif text-6xl leading-[0.95] text-white sm:text-7xl">Our Team</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Vantum Capital is led by principals with deep operating and capital markets experience across complex, catalyst-driven situations.
          </p>
        </div>
        <section className="mt-12 grid gap-10 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article key={member.slug} className="group border-l border-[#b08d57]/30 pl-6">
              <Link href={`/team/${member.slug}`} className="block">
                <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{member.name}</h2>
                <p className="mt-2 text-[15px] uppercase tracking-[0.08em] text-[#d0ac72] sm:text-base">{member.title}</p>
              </Link>
              <Link href={`/team/${member.slug}`} className="mt-6 block overflow-hidden border border-white/10 bg-[#101827] transition hover:border-[#b08d57]/60">
                {/* Replace with approved portrait assets when available. */}
                <div className="relative flex h-[380px] items-end justify-center bg-[linear-gradient(165deg,#11192a_0%,#1d2a45_50%,#23375f_100%)]">
                  <span className="absolute right-5 top-5 text-xs uppercase tracking-[0.14em] text-[#d0ac72]/85 opacity-0 transition group-hover:opacity-100">
                    View Profile
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </section>
        <Link href="/" className="mt-12 inline-block rounded-sm border border-white/30 px-5 py-2 text-sm uppercase tracking-[0.12em] text-slate-200 transition hover:border-[#b08d57] hover:text-[#d0ac72]">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import { teamMembers } from "./teamData";
import SiteHeader from "@/components/SiteHeader";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F2ECE7] text-[#06173B]">
      <SiteHeader />
      <div className="mx-auto max-w-[1320px] px-6 py-14 sm:px-10 md:py-16">
        <div className="border-b border-[#06173B]/15 pb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#06173B]/70">
            Leadership
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[0.95] text-[#06173B] sm:text-7xl">
            Our Team
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#06173B]/75 sm:text-lg">
            Vantum Capital is led by principals with deep operating and capital
            markets experience across complex, catalyst-driven situations.
          </p>
        </div>

        <section className="mt-12 grid gap-10 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="group border-l border-[#06173B]/25 pl-6"
            >
              <Link href={`/team/${member.slug}`} className="block">
                <h2 className="font-serif text-4xl leading-tight text-[#06173B] sm:text-5xl">
                  {member.name}
                </h2>
                <p className="mt-2 text-[15px] uppercase tracking-[0.08em] text-[#06173B]/70 sm:text-base">
                  {member.title}
                </p>
              </Link>
              <Link
                href={`/team/${member.slug}`}
                className="mt-6 block overflow-hidden border border-[#06173B]/12 bg-[#dbe5f4] transition hover:opacity-90"
              >
                <div className="relative flex h-[430px] items-end justify-center bg-[linear-gradient(165deg,#e4edf9_0%,#b8cee9_42%,#7e9fc8_100%)]">
                  <div className="mb-10 h-[124px] w-[124px] rounded-sm bg-[#d5b2a6]/95" />
                  <span className="absolute right-5 top-5 text-xs uppercase tracking-[0.14em] text-[#06173B]/65 opacity-0 transition group-hover:opacity-100">
                    View Bio
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <Link
          href="/"
          className="mt-12 inline-block rounded-sm border border-[#06173B] px-5 py-2 text-sm uppercase tracking-[0.12em] text-[#06173B] transition hover:bg-[#06173B] hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

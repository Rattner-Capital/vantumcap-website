import Link from "next/link";
import { teamMembers } from "./teamData";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#0a285a] sm:px-10 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="font-serif text-6xl text-[#06173B]">Our Team</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Experienced investment and operating leadership across strategy,
          execution, and institutional platform management.
        </p>

        <section className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="border-l border-[#ced7e7] pl-6 text-[#0a285a]"
            >
              <h2 className="font-serif text-[34px] leading-tight">{member.name}</h2>
              <p className="mt-2 text-[17px] leading-snug text-slate-600">
                {member.title}
              </p>
              <Link
                href={`/team/${member.slug}`}
                className="mt-5 block overflow-hidden border border-[#d4dceb] bg-[#eef3fb] transition hover:opacity-90"
              >
                <div className="flex h-[360px] items-center justify-center bg-[linear-gradient(160deg,#d7e6fb_0%,#9ebbe0_45%,#6f93c1_100%)]">
                  <div className="h-[120px] w-[120px] rounded-sm bg-[#d5b2a6]/95" />
                </div>
              </Link>
            </article>
          ))}
        </section>

        <Link
          href="/"
          className="mt-12 inline-block rounded-sm border border-[#06173B] px-5 py-2 text-sm uppercase tracking-[0.12em] text-[#06173B] hover:bg-[#06173B] hover:text-white"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}

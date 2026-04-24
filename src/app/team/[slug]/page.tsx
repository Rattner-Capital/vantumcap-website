import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../teamData";
import SiteHeader from "@/components/SiteHeader";

type TeamDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamDetailPage({ params }: TeamDetailProps) {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F2ECE7] text-[#0a285a]">
      <SiteHeader />
      <section className="border-b border-[#06173B]/14 bg-[#06173B] pb-12 pt-4">
        <div className="mx-auto w-full max-w-[1320px] px-2 sm:px-4">
          <div className="grid lg:grid-cols-12">
            <div className="px-6 py-10 text-white lg:col-span-5 lg:px-10 lg:py-12">
            <p className="text-xs uppercase tracking-[0.16em] text-white/75">
              Who We Are / Leadership
            </p>
            <h1 className="mt-4 whitespace-nowrap font-serif text-[46px] leading-[0.9] sm:text-[56px] lg:text-[64px]">
              {member.name}
            </h1>
            <p className="mt-6 whitespace-nowrap text-lg leading-snug text-white/90 sm:text-[26px]">
              {member.title}
            </p>
            <Link
              href="/team"
              className="mt-8 inline-block border-b border-white/40 pb-1 text-sm uppercase tracking-[0.14em] text-white/85 hover:border-white hover:text-white"
            >
              Back to Team
            </Link>
            </div>
            <div className="lg:col-span-7 lg:pl-20 lg:pr-0">
              <div className="relative mt-6 flex h-[420px] w-full max-w-[760px] items-end justify-center overflow-hidden border border-white/20 bg-[linear-gradient(165deg,#e4edf9_0%,#b8cee9_42%,#7e9fc8_100%)] lg:mt-14 lg:translate-y-24">
                <div className="mb-10 h-[138px] w-[138px] rounded-sm bg-[#d5b2a6]/95" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2ECE7] px-6 pb-14 pt-16 sm:px-10 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-6xl leading-[0.95] text-[#06173B] sm:text-7xl">
            About
          </h2>
          <div className="mt-9 space-y-7 text-lg leading-relaxed text-[#06173B]/78 sm:text-[22px]">
            {member.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

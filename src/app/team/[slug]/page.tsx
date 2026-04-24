import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../teamData";

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
    <main className="min-h-screen bg-white text-[#0a285a]">
      <section className="grid min-h-[560px] lg:grid-cols-12">
        <div className="bg-[#06173B] px-8 py-16 text-white lg:col-span-6 lg:px-14 lg:py-20">
          <p className="text-sm uppercase tracking-[0.12em] text-white/80">
            Who We Are / Leadership
          </p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95]">{member.name}</h1>
          <p className="mt-8 text-2xl text-white/90">{member.title}</p>
        </div>
        <div className="flex items-end justify-center bg-[#F2ECE7] px-6 lg:col-span-6">
          <div className="mb-8 h-[190px] w-[190px] rounded-sm bg-[#d5b2a6]/95 sm:h-[240px] sm:w-[240px]" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-6xl text-[#0a3a8c]">About</h2>
          <div className="mt-8 space-y-7 text-lg leading-relaxed text-slate-700 sm:text-xl">
            {member.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-12 inline-block rounded-sm border border-[#0a3a8c] px-5 py-2 text-sm uppercase tracking-[0.12em] text-[#0a3a8c] hover:bg-[#0a3a8c] hover:text-white"
          >
            Back to Team
          </Link>
        </div>
      </section>
    </main>
  );
}

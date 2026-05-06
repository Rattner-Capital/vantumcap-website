import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../teamData";
import ScrollToTopOnMount from "@/components/site/ScrollToTopOnMount";

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

  const portraitBySlug: Record<string, string> = {
    "samuel-r-rattner": "/team/samuel-r-rattner.png",
    "stephen-m-levine": "/team/stephen-m-levine.png",
  };

  return (
    <main className="min-h-screen bg-[#f7f9fb] text-[#102f4a]">
      <ScrollToTopOnMount />
      <section className="border-b border-[#dfe7eb] bg-white px-6 pb-16 pt-14 sm:px-10">
        <div className="mx-auto max-w-[1320px]">
          <Link
            href="/team"
            className="text-[12px] uppercase tracking-[0.12em] text-[#4a667d] hover:text-[#0a4f7d]"
          >
            About / Leadership &amp; Team / Profile
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h1 className="font-serif text-[56px] leading-[0.96] text-[#112f49]">
                {member.name}
              </h1>
              <p className="mt-5 text-[28px] leading-tight text-[#1f3d56]">
                {member.title}
              </p>
              <Link
                href="/#team"
                className="mt-8 inline-block text-[12px] uppercase tracking-[0.14em] text-[#0f3858] hover:text-[#0a4f7d]"
              >
                Back to Team →
              </Link>
            </div>
            <div>
              <div className="relative aspect-[4/3.8] w-full overflow-hidden border border-[#dfe7eb] bg-[#e6ddd4]">
                <Image
                  src={portraitBySlug[member.slug]}
                  alt={`${member.name} portrait`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb] px-6 pb-20 pt-16 sm:px-10">
        <div className="mx-auto max-w-[1040px]">
          <p className="inline-block rounded-full border border-[#d7e1e9] bg-white px-4 py-1 text-[11px] text-[#0c2f4f]">
            Biography
          </p>
          <div className="mt-8 space-y-7 text-[22px] leading-[1.65] text-[#284761]">
            {member.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/site/TypewriterText";
import { strategyCards } from "@/components/site/siteData";

export default function Home() {
  const firstThreeStrategies = strategyCards.slice(0, 3);
  const strategyDescriptors: Record<string, string> = {
    "Special Situations":
      "Control Investments, Strategic Transitions, Event-Driven Opportunities",
    "Distressed Credit":
      "Stressed Capital Structures, Rescue Financing, Opportunistic Credit",
    "Value Transformation":
      "Asset Repositioning, Operational Turnarounds, Capital Optimization",
  };

  return (
    <main id="top" className="bg-white">
      <section className="relative min-h-[74vh] overflow-hidden border-b border-[#d9e2ea] sm:min-h-[84vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-clean.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,33,56,0.52),rgba(4,29,49,0.78))]" />
        <div className="relative w-full px-8 pb-28 pt-24 sm:px-12 sm:pb-36 sm:pt-32 lg:pl-[90px] lg:pr-8 lg:pt-[170px]">
          <h1 className="max-w-[760px] font-serif text-[60px] leading-[0.96] text-white sm:text-[66px]">
            Vantum Capital
          </h1>
          <h2 className="mt-4 max-w-[760px] text-[39px] leading-[1.04] text-[#edf4fa]">
            <TypewriterText
              phrases={[
                "Special Situations and Opportunistic Capital.",
                "Disciplined Investing.",
                "Active Management.",
                "Event-Driven Opportunities.",
              ]}
            />
          </h2>
          <p className="mt-10 max-w-[660px] text-[27px] leading-[1.55] text-[#dceaf6]">
            Investing across special situations, distressed credit, and operationally complex assets through a fundamentally driven, risk-aware approach.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/#about" className="border border-white/35 px-8 py-3.5 text-[13px] text-white hover:bg-white/10">
              About Vantum
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5ebf0] bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-center px-6 py-3 sm:px-10" />
      </section>

      <section id="about" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1320px] px-8 pb-10 pt-14">
          <span className="inline-block rounded-full border border-[#d4dee7] bg-[#f5f8fb] px-4 py-1 text-[11px] text-[#0c2f4f]">
            Founded 2025
          </span>
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[560px_640px] lg:gap-[165px]">
            <h3 className="max-w-[560px] font-serif text-[52px] leading-[1.03] text-[#102f4a]">
              Special Situations Investment Manager
            </h3>
            <p className="max-w-[640px] text-[20px] leading-[1.5] text-[#1f3d56]">
              Established in Chicago in 2025, Vantum Capital focuses on special situations, distressed credit, and value-dislocated assets where operational, strategic, or capital structure changes can unlock attractive risk-adjusted outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e7edf2] bg-white">
        <div className="mx-auto max-w-[1320px] px-8 pb-20 pt-[66px]">
          <div className="grid gap-8 md:grid-cols-3">
            {firstThreeStrategies.map((strategy) => (
              <article key={strategy.title} className="flex min-h-[445px] flex-col border border-[#dfe7eb] bg-white px-12 py-12">
                <div className="mb-9 h-12 w-12 text-[#5b778f]">
                  <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12.5h13l3.8 4.2H41v18.8a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 7 35.5V12.5Z" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M7 17h34v18.5a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 7 35.5V17Z" stroke="currentColor" strokeWidth="1.7"/>
                    <circle cx="30.2" cy="29.5" r="4.3" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M30.2 26.9v5.2M27.6 29.5h5.2" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                </div>
                <h4 className="font-sans text-[24px] font-normal leading-[1.2] text-[#112f49]">{strategy.title}</h4>
                <p className="mt-4 text-[16px] leading-[1.35] text-[#1e3d58]">
                  {strategyDescriptors[strategy.title]}
                </p>
                <p className="mt-10 text-[16px] italic leading-[1.65] text-[#345168]">{strategy.body}</p>
                <div className="mt-auto border-t border-[#dfe7eb] pt-7" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-[#e7edf2] bg-white">
        <div className="mx-auto max-w-[1320px] px-8 pb-28 pt-24">
          <span className="inline-block rounded-full border border-[#d4dee7] bg-[#f5f8fb] px-4 py-1 text-[11px] text-[#0c2f4f]">
            Investment Professionals
          </span>
          <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[560px_640px] lg:gap-[165px]">
            <h3 className="max-w-[560px] font-serif text-[52px] leading-[1.03] text-[#102f4a]">
              Leadership &amp; Team
            </h3>
            <p className="max-w-[640px] text-[20px] leading-[1.5] text-[#1f3d56]">
              Vantum Capital is led by principals with deep investing, credit markets, operating, and capital structure experience across complex and dislocated situations.
            </p>
          </div>

          <div className="mt-12 grid max-w-[980px] gap-8 md:grid-cols-2">
            <article>
              {/* Replace with approved leadership photo when available. */}
              <a href="/team/samuel-r-rattner" className="group block">
                <div className="relative aspect-[4/3.9] w-full overflow-hidden border border-[#dfe7eb] bg-[#e6ddd4]">
                  <Image
                    src="/team/samuel-r-rattner.png"
                    alt="Samuel R. Rattner portrait"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h4 className="mt-3 font-serif text-[34px] leading-tight text-[#112f49] group-hover:text-[#0a4f7d]">
                  Samuel R. Rattner
                </h4>
                <p className="mt-1 text-[15px] text-[#1e3d58]">
                  Managing Partner &amp; CEO →
                </p>
              </a>
            </article>

            <article>
              {/* Replace with approved leadership photo when available. */}
              <a href="/team/stephen-m-levine" className="group block">
                <div className="relative aspect-[4/3.9] w-full overflow-hidden border border-[#dfe7eb] bg-[#dfd5cc]">
                  <Image
                    src="/team/stephen-m-levine.png"
                    alt="Stephen M. Levine portrait"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h4 className="mt-3 font-serif text-[34px] leading-tight text-[#112f49] group-hover:text-[#0a4f7d]">
                  Stephen M. Levine
                </h4>
                <p className="mt-1 text-[15px] text-[#1e3d58]">
                  Managing Partner →
                </p>
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

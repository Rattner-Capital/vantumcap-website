import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="contact-footer" className="border-t border-white/15 bg-[#002b49]">
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:px-10">
        <div className="mb-12 border border-white/20 bg-[linear-gradient(135deg,rgba(0,43,73,0.66)_0%,rgba(1,173,211,0.14)_100%)] p-7">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#b8d6ea]">Subscribe to Distribution List</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#d8e7f2]">
            Receive occasional updates from Vantum Capital, including market commentary, research publications, and firm announcements.
          </p>
          <div className="mt-5 flex max-w-xl flex-wrap gap-3">
            <input
              type="email"
              placeholder="Email"
              className="min-w-[220px] flex-1 border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder:text-[#b8d6ea]/80"
            />
            <button className="border border-white/40 px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#d8e7f2]">Proceed</button>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="relative h-[63px] w-[262px] max-w-full">
              <Image
                src="/vantum-logo-footer-white.png"
                alt="Vantum Capital"
                fill
                className="object-contain object-left"
                sizes="262px"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d8e7f2]">
              Special situations investment firm focused on complexity, dislocation, and value transformation opportunities.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#b8d6ea]">Contact</p>
            <p className="mt-4 text-sm text-[#d8e7f2]">investorrelations@vantumcap.com</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#b8d6ea]">Navigation</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[#d8e7f2]">
              <Link href="/about">About</Link>
              <Link href="/strategy">Investment Strategies</Link>
              <Link href="/investors">Investors</Link>
              <Link href="/insights">Insights</Link>
            </div>
          </div>
        </div>
        <div className="pt-6 text-[11px] leading-relaxed text-[#b8d6ea]">
          The information on this website is provided for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any security or advisory service. Any such offer will be made only through definitive documentation and in accordance with applicable law.
        </div>
      </div>
    </footer>
  );
}

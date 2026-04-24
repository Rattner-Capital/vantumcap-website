"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  overlay?: boolean;
};

const navItems = [
  { label: "About Us", href: "/#about" },
  { label: "Investment Strategy", href: "/#strategy" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

/** Tight-cropped logo PNGs in `public/` (no white mat); keeps layout height ≈ visible lockup. */
const LOGO_INTRINSIC = { width: 2122, height: 649 } as const;
/** Hero lockup from `vantum-logo-hero.png` (square canvas; opaque lockup ~666×204). */
const HERO_LOGO_INTRINSIC = { width: 1000, height: 1000 } as const;
/** Frame matches lockup aspect at the same heights as `logoLockupHeightClass` (h × 666/204). */
const heroLogoFrameClass =
  "relative h-[54px] w-[176px] shrink-0 overflow-hidden sm:h-[64px] sm:w-[209px] lg:h-[76px] lg:w-[248px]" as const;
/** Oversized square so opaque content fills frame height (h × 1000/204); centered, object-contain. */
const heroLogoImageClass =
  "absolute left-1/2 top-1/2 h-[265px] w-[265px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[314px] sm:w-[314px] lg:h-[373px] lg:w-[373px]" as const;

/** Matches powder inner pages (e.g. team listing) so the header lines up with body copy. */
const POWDER_INNER =
  "mx-auto w-full max-w-[1320px] px-6 py-4 sm:px-10" as const;

export default function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navTextClass = overlay ? "text-slate-200" : "text-[#06173B]";
  const buttonClass = overlay
    ? "border-vantum-lightGold/60 text-vantum-lightGold hover:border-vantum-lightGold hover:bg-vantum-lightGold/10"
    : "border-[#06173B]/40 text-[#06173B] hover:border-[#06173B] hover:bg-[#06173B]/10";

  /** Hero + powder: same rendered lockup height (no transform scale). */
  const logoLockupHeightClass = "h-[54px] sm:h-[64px] lg:h-[76px]";
  /** Nav vertically centered on the hero logo (half of 54 / 64 / 76). */
  const overlayNavCenterClass =
    "top-[27px] -translate-y-1/2 sm:top-[32px] lg:top-[38px]";

  const shellClass = overlay
    ? "relative z-40 w-full"
    : "relative z-40 w-full border-b border-[#06173B]/15 bg-[#F2ECE7]";

  const powderRowClass = `relative flex items-center justify-between gap-4 ${POWDER_INNER}`;

  const navDesktop = (
    <div
      className={`hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.12em] lg:flex ${navTextClass}`}
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="transition-colors hover:text-vantum-lightGold"
        >
          {item.label}
        </Link>
      ))}
      <button
        type="button"
        className={`rounded-sm border px-4 py-2 text-[11px] tracking-[0.16em] transition-colors ${buttonClass}`}
      >
        Investor Login
      </button>
    </div>
  );

  const navMobileToggle = (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
      className="rounded-sm border border-vantum-lightGold/50 p-2 text-vantum-lightGold lg:hidden"
      onClick={() => setMobileMenuOpen((open) => !open)}
    >
      <span className="block h-0.5 w-5 bg-current" />
      <span className="mt-1.5 block h-0.5 w-5 bg-current" />
      <span className="mt-1.5 block h-0.5 w-5 bg-current" />
    </button>
  );

  const mobileMenuPanel = (menuRightClass: string) =>
    mobileMenuOpen ? (
      <div
        className={`absolute top-[calc(100%+0.5rem)] z-50 w-[92vw] max-w-xs rounded-md border border-vantum-lightGold/30 bg-[#0b1523]/95 p-4 shadow-glow backdrop-blur md:w-[360px] lg:hidden ${menuRightClass}`}
      >
        <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.12em] text-slate-100">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-sm border border-transparent px-2 py-2 transition hover:border-vantum-lightGold/35 hover:text-vantum-lightGold"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-2 rounded-sm border border-vantum-lightGold/60 px-3 py-2 text-vantum-lightGold"
          >
            Investor Login
          </button>
        </nav>
      </div>
    ) : null;

  return (
    <header className={shellClass}>
      {overlay ? (
        <div className="relative w-full">
          {/* Preserves prior ~40px hero header footprint in layout (logo stays absolute). */}
          <div className="h-10 w-full shrink-0" aria-hidden />

          <Link
            href="/"
            className="absolute z-50 block max-sm:left-0 max-sm:top-2 max-sm:translate-y-0 sm:left-[-60px] sm:top-[30px] sm:-translate-y-1 sm:-translate-y-1.5 lg:-translate-y-2"
          >
            <div
              className={`${heroLogoFrameClass} max-sm:origin-top-left max-sm:scale-[0.85]`}
            >
              <Image
                src="/vantum-logo-hero.png"
                alt="Vantum Capital"
                width={HERO_LOGO_INTRINSIC.width}
                height={HERO_LOGO_INTRINSIC.height}
                priority
                quality={95}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                className={heroLogoImageClass}
              />
            </div>
          </Link>

          <div
            className={`absolute right-0 z-40 flex items-center justify-end gap-3 sm:gap-4 ${overlayNavCenterClass}`}
          >
            {navDesktop}
            {navMobileToggle}
            {mobileMenuPanel("right-0")}
          </div>
        </div>
      ) : (
        <div className={powderRowClass}>
          <Link href="/" className="relative shrink-0">
            <Image
              src="/vantum-logo-powder.png"
              alt="Vantum Capital"
              width={LOGO_INTRINSIC.width}
              height={LOGO_INTRINSIC.height}
              priority
              quality={95}
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
              className={`block w-auto max-w-none ${logoLockupHeightClass}`}
            />
          </Link>
          {navDesktop}
          {navMobileToggle}
          {mobileMenuPanel("right-6 sm:right-10")}
        </div>
      )}
    </header>
  );
}

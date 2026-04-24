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

/** Matches powder inner pages (e.g. team listing) so the header lines up with body copy. */
const POWDER_INNER =
  "mx-auto w-full max-w-[1320px] px-6 py-4 sm:px-10" as const;

export default function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navTextClass = overlay ? "text-slate-200" : "text-[#06173B]";
  const buttonClass = overlay
    ? "border-vantum-lightGold/60 text-vantum-lightGold hover:border-vantum-lightGold hover:bg-vantum-lightGold/10"
    : "border-[#06173B]/40 text-[#06173B] hover:border-[#06173B] hover:bg-[#06173B]/10";

  /** Hero only: slightly smaller lockup + absolute so nav row stays thin (interior uses powderLogoImgClass). */
  const overlayLogoHeightClass = "h-[176px] sm:h-[200px] lg:h-[228px]";
  /** ~10% of logo height — lift logo + nav together without changing sizes. */
  const overlayHeroLiftClass =
    "-translate-y-[18px] sm:-translate-y-[20px] lg:-translate-y-[23px]";
  /** Nav stays vertically centered on logo; `top` nudged up by same ~10% as logo lift. */
  const overlayNavCenterClass =
    "top-[70px] -translate-y-1/2 sm:top-[80px] lg:top-[91px]";
  /**
   * Interior only: fixed slot keeps flex/nav/header metrics identical to before.
   * Slightly larger *visual* logo via scale (layout box unchanged — avoids widening slot / moving nav).
   */
  const powderLogoSlotClass =
    "relative block h-11 w-[144px] shrink-0 overflow-visible sm:h-14 sm:w-[183px] lg:h-[68px] lg:w-[222px]";
  /**
   * Match hero *rendered height* (overlayLogoHeightClass) without changing layout:
   * scale = hero h / slot content h, where slot h is h-11 (44px), sm:h-14 (56px), lg:h-[68px].
   * → 176/44 = 4, 200/56, 228/68 (no arbitrary scale guessing).
   */
  const powderLogoImgClass =
    "block h-full w-auto origin-left object-contain scale-[calc(176/44)] sm:scale-[calc(200/56)] lg:scale-[calc(228/68)]";

  const shellClass = overlay
    ? "relative z-40 w-full"
    : "sticky top-0 z-40 border-b border-[#06173B]/15 bg-[#F2ECE7]";

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
            className={`absolute left-0 top-0 z-50 block ${overlayHeroLiftClass} ${overlayLogoHeightClass}`}
          >
            <Image
              src="/vantum-logo.png"
              alt="Vantum Capital"
              width={LOGO_INTRINSIC.width}
              height={LOGO_INTRINSIC.height}
              priority
              quality={95}
              sizes="(max-width: 640px) 720px, (max-width: 1024px) 880px, 1000px"
              className={`block w-auto max-w-none ${overlayLogoHeightClass}`}
            />
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
          <Link href="/" className={powderLogoSlotClass}>
            <Image
              src="/vantum-logo-powder.png"
              alt="Vantum Capital"
              width={LOGO_INTRINSIC.width}
              height={LOGO_INTRINSIC.height}
              priority
              quality={95}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
              className={powderLogoImgClass}
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "./siteData";

export default function SiteHeader() {
  const [openMobile, setOpenMobile] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbe3ea] bg-white">
      <div className="w-full border-b border-[#e8edf2] bg-white">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-2 text-[12px] tracking-[0.02em] text-[#0c2f4f] sm:px-6 lg:px-7">
          <div />
          <div className="hidden items-center text-[14px] sm:flex">
            <a href="mailto:investorrelations@vantumcap.com" className="hover:text-[#0a4f7d]">
              investorrelations@vantumcap.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-6 sm:px-6 lg:px-7">
          <Link href="/" className="relative block h-[46px] w-[300px]">
            <Image
              src="/vantum-logo-nav.png"
              alt="Vantum Capital"
              fill
              className="object-contain object-left"
              sizes="300px"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-11 text-[19px] font-medium leading-none tracking-[0.01em] text-[#0b2d4a] lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link href={item.href} className="transition hover:text-[#0a4f7d]">
                {item.label}
              </Link>
              {item.children ? (
                <div className="pointer-events-none absolute left-0 top-full mt-5 w-[290px] translate-y-2 border border-[#d7e0e8] bg-white p-3 opacity-0 shadow-2xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block border-b border-[#e8edf2] px-2 py-2.5 text-[11px] text-[#0b2d4a] last:border-b-0 hover:text-[#0a4f7d]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          </nav>
          <div className="hidden items-center gap-4 self-center lg:flex">
            <Link href="/#contact-footer" className="inline-flex items-center justify-center self-center border border-[#0b2d4a] bg-[#0b2d4a] px-5 py-2 text-[12px] font-medium leading-none text-white">
              Get in Touch
            </Link>
          </div>
          <button type="button" aria-label="Toggle menu" className="rounded border border-[#0b2d4a]/40 px-3 py-2 text-xs text-[#0b2d4a] lg:hidden" onClick={() => setOpenMobile((prev) => !prev)}>
            Menu
          </button>
        </div>
      </div>
      {openMobile ? (
        <div className="border-t border-[#e8edf2] bg-white px-6 py-4 lg:hidden">
          {navigation.map((item) => (
            <div key={item.label} className="mb-3">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left text-xs text-[#0b2d4a]"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <span>{expanded === item.label ? "-" : "+"}</span>
                  </button>
                  {expanded === item.label ? (
                    <div className="border-l border-[#d7e0e8] pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 text-[11px] text-[#0b2d4a]"
                          onClick={() => setOpenMobile(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-xs text-[#0b2d4a]"
                  onClick={() => setOpenMobile(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Waterline from "@/components/Waterline";

type Item = { label: string; href: string };

type Props = {
  logo: string;
  name: string;
  tagline: string;
  nav: Item[];
  phone: string;
  phoneHref: string;
  ctaLabel: string;
  ctaHref: string;
  menuLabel: string;
  closeLabel: string;
};

export default function Header({
  logo,
  name,
  tagline,
  nav,
  phone,
  phoneHref,
  ctaLabel,
  ctaHref,
  menuLabel,
  closeLabel,
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 bg-paper">
      <div className="flex h-[68px] items-center gap-3 px-4 md:gap-4 md:px-6">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={`${name}, ${tagline}`} width={390} height={350} className="h-14 w-auto" />
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden min-w-0 lg:block">
          <ul className="flex flex-nowrap items-center gap-x-3 xl:gap-x-4">
            {nav.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`whitespace-nowrap border-b-2 py-1 text-[0.95rem] font-medium leading-none xl:text-base ${
                      current ? "border-lime text-ink" : "border-transparent text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={phoneHref}
            data-cta="bellen"
            className="hidden whitespace-nowrap font-mono text-[0.95rem] sm:inline"
            aria-label={`Bel ${name}, ${phone}`}
          >
            {phone}
          </a>
          <Link href={ctaHref} data-cta="offerte" className="btn btn-fill hidden sm:inline-flex">
            {ctaLabel}
          </Link>
          <button
            type="button"
            className="btn btn-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? closeLabel : menuLabel}
          </button>
        </div>
      </div>
      <Waterline />
      {open ? (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-ink bg-paper px-5 py-6 lg:hidden"
          style={{ top: "var(--header-h)" }}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ink/15">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex min-h-12 items-center font-display text-3xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href={phoneHref} data-cta="bellen" className="btn btn-line">
              {phone}
            </a>
            <Link href={ctaHref} data-cta="offerte" className="btn btn-fill">
              {ctaLabel}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

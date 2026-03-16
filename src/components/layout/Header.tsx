"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const regularItems = navItems.filter((item) => !item.highlight);
  const portalItem = navItems.find((item) => item.highlight);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`w-9 h-9 rounded-md flex items-center justify-center font-display font-bold text-xl transition-colors ${
                scrolled ? "bg-brand-blue text-white" : "bg-white text-brand-blue"
              }`}>
                CF
              </div>
              <div className={`hidden sm:block transition-colors ${scrolled ? "text-brand-blue" : "text-white"}`}>
                <div className="font-display font-bold text-lg uppercase tracking-wide leading-none">
                  Crossfire
                </div>
                <div className="text-xs font-medium opacity-70 tracking-widest uppercase">
                  Gymnastics
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {regularItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                      scrolled
                        ? isActive
                          ? "text-brand-orange"
                          : "text-slate-700 hover:text-brand-blue"
                        : isActive
                        ? "text-brand-orange"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop portal link + mobile hamburger */}
            <div className="flex items-center gap-3">
              {portalItem && (
                <a
                  href={portalItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden lg:inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    scrolled
                      ? "bg-brand-orange text-white hover:bg-brand-orange-light"
                      : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                  }`}
                >
                  {portalItem.label}
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrolled ? "text-slate-700 hover:text-brand-blue" : "text-white hover:text-white/80"
                }`}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

"use client";

import Link from "next/link";
import { navItems } from "@/data/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const regularItems = navItems.filter((item) => !item.highlight);
  const portalItem = navItems.find((item) => item.highlight);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-brand-blue z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display text-xl font-bold text-white uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-6 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {regularItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 px-2 text-white text-lg font-medium border-b border-white/10 hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Parent Portal CTA */}
        {portalItem && (
          <div className="px-6 pb-8">
            <a
              href={portalItem.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block w-full text-center bg-brand-orange text-white font-semibold py-4 rounded-md text-lg hover:bg-brand-orange-light transition-colors"
            >
              {portalItem.label} ↗
            </a>
          </div>
        )}
      </div>
    </>
  );
}

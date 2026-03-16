import Link from "next/link";
import { navItems } from "@/data/nav";

export default function Footer() {
  const regularItems = navItems.filter((item) => !item.highlight);

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-brand-orange flex items-center justify-center font-display font-bold text-xl text-white">
                CF
              </div>
              <div>
                <div className="font-display font-bold text-lg uppercase tracking-wide leading-none">
                  Crossfire
                </div>
                <div className="text-xs text-white/60 tracking-widest uppercase">
                  Gymnastics
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building champions in Boerne, TX since day one. Programs for all
              ages and skill levels in a fun, safe, and encouraging environment.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {regularItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-brand-orange text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://app.iclasspro.com/portal/crossfire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:text-brand-orange-light text-sm font-semibold transition-colors"
                >
                  Parent Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  37131 Interstate 10 W, Bldg 501
                  <br />
                  Boerne, Texas 78006
                </span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:info@crossfiregymnastics.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  info@crossfiregymnastics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Crossfire Gymnastics. All rights reserved.</p>
          <p>Boerne, TX 78006</p>
        </div>
      </div>
    </footer>
  );
}

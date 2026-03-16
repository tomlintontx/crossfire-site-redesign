import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crossfire Gymnastics in Boerne, TX — our mission, our facility, and our commitment to developing champions.",
};

const values = [
  {
    icon: "🏅",
    title: "Excellence",
    desc: "We hold ourselves and our athletes to the highest standards — on the mat and off.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Crossfire is more than a gym — it's a family of athletes, coaches, and parents all cheering each other on.",
  },
  {
    icon: "💪",
    title: "Growth",
    desc: "Every child grows at their own pace. We celebrate every milestone, big or small.",
  },
];

const stats = [
  { value: "500+", label: "Athletes enrolled" },
  { value: "8", label: "Programs offered" },
  { value: "10+", label: "Expert coaches" },
  { value: "15,000 sq ft", label: "State-of-the-art facility" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-brand-orange mb-5" />
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            Crossfire Gymnastics has been developing champions in the Texas Hill
            Country. We believe every child has what it takes.
          </p>
        </div>
      </div>

      {/* Mission & values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="To build confidence, discipline, and athletic excellence in every child who walks through our doors — no matter their age or experience level."
              />
              <div className="space-y-6 mt-8">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange-pale flex items-center justify-center text-xl shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-blue uppercase tracking-wide mb-1">
                        {v.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PlaceholderImage
                label="Crossfire Gymnastics facility"
                color="orange-pale"
                aspectRatio="portrait"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility stats */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-4xl md:text-5xl mb-1">
                  {stat.value}
                </div>
                <div className="text-white/75 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & contact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Find Us"
            subtitle="Conveniently located off I-10 in Boerne, Texas."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-6">
                Contact & Location
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    37131 Interstate 10 W, Bldg 501
                    <br />
                    Boerne, Texas 78006
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:info@crossfiregymnastics.com"
                    className="text-brand-orange hover:text-brand-orange-light transition-colors"
                  >
                    info@crossfiregymnastics.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Button
                  href="https://app.iclasspro.com/portal/crossfire"
                  external
                  variant="primary"
                  size="md"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <PlaceholderImage
              label="Map — 37131 I-10 W, Boerne TX"
              color="slate"
              aspectRatio="video"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

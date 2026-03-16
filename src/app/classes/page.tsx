import type { Metadata } from "next";
import ClassGrid from "@/components/classes/ClassGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Gymnastics classes for all ages — Toddlers, Girls Gymnastics, Ninja Academy, Tumbling, and Competitive Team in Boerne, TX.",
};

export default function ClassesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-brand-orange mb-5" />
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Our Classes
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            We offer programs for every age and skill level — from walking
            toddlers to competitive athletes ready to hit the mat.
          </p>
        </div>
      </div>

      {/* Class grid with filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClassGrid />
        </div>
      </section>

      {/* Competitive Team spotlight */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-brand-orange mb-5" />
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Competitive Team
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-4">
              Our competitive gymnastics team trains serious athletes who are
              ready to take their gymnastics to the next level. We compete in
              USAG-sanctioned events at local, regional, and national levels.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Tryouts are required. Multiple levels are available. If your
              gymnast is ready to compete, we want to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="mailto:info@crossfiregymnastics.com"
                external
                variant="primary"
                size="lg"
              >
                Inquire About Team
              </Button>
              <Button
                href="https://app.iclasspro.com/portal/crossfire"
                external
                variant="outline"
                size="lg"
              >
                Parent Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="py-16 bg-brand-orange-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pricing Summary"
            subtitle="Transparent, month-to-month pricing. No long-term contracts."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { name: "Playgroup", price: "$40/mo", note: "Walk-in or recurring" },
              { name: "45 min class", price: "$84/mo", note: "Little Tots" },
              { name: "55 min class", price: "$88/mo", note: "Girls Beg, Ninja, Tumbling" },
              { name: "75–90 min class", price: "$100–$120/mo", note: "Girls Int/Adv" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <div className="font-display font-bold text-3xl text-brand-orange mb-1">
                  {item.price}
                </div>
                <div className="font-semibold text-brand-blue text-sm">{item.name}</div>
                <div className="text-slate-500 text-xs mt-1">{item.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            Registration fee may apply. Contact us for sibling discounts and current specials.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { events } from "@/data/events";
import SectionHeading from "@/components/ui/SectionHeading";
import PartyCard from "@/components/parties/PartyCard";
import EventCard from "@/components/parties/EventCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Parties & Events",
  description:
    "Host an epic birthday party at Crossfire Gymnastics in Boerne, TX. Plus upcoming events including Annual Performance, Summer Camp, and more.",
};

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Date",
    desc: "Email us or call to check availability. We'll help you find the perfect time slot.",
  },
  {
    step: "2",
    title: "Pick Your Package",
    desc: "Member or non-member pricing — both include full gym access and a dedicated host.",
  },
  {
    step: "3",
    title: "We Handle the Rest",
    desc: "Show up, celebrate, and let our team create an unforgettable experience.",
  },
];

export default function PartiesEventsPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-brand-orange mb-5" />
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Parties & Events
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            Unforgettable birthday parties and exciting events all year long at
            Crossfire Gymnastics in Boerne.
          </p>
        </div>
      </div>

      {/* Birthday Parties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Birthday Parties"
            subtitle="Make it legendary. Host your child's birthday party at the coolest gym in Boerne."
            centered
          />
          <PartyCard />

          {/* How it works */}
          <div className="mt-20">
            <SectionHeading
              title="How It Works"
              subtitle="Three easy steps to the best birthday party ever."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              href="mailto:info@crossfiregymnastics.com"
              external
              variant="primary"
              size="lg"
            >
              Book a Party
            </Button>
            <p className="mt-3 text-slate-500 text-sm">
              Email us at{" "}
              <a
                href="mailto:info@crossfiregymnastics.com"
                className="text-brand-orange hover:underline"
              >
                info@crossfiregymnastics.com
              </a>{" "}
              to check availability.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="2026 Events"
            subtitle="Mark your calendar — here's what's coming up at Crossfire this year."
          />
          <div>
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

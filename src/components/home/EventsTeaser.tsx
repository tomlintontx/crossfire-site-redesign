import Link from "next/link";
import { events } from "@/data/events";
import SectionHeading from "@/components/ui/SectionHeading";

const upcomingEvents = events.slice(0, 3);

export default function EventsTeaser() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Mark your calendars — exciting events are coming to Crossfire!"
            className="mb-0"
          />
          <Link
            href="/parties-events"
            className="text-brand-orange font-semibold hover:text-brand-orange-light text-sm mt-4 md:mt-0 shrink-0"
          >
            View all events →
          </Link>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="flex gap-4 md:grid md:grid-cols-3 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col min-w-[280px] md:min-w-0 snap-start"
            >
              {event.highlight && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange uppercase tracking-wide mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  Featured
                </span>
              )}
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                {event.date}
              </p>
              <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-2">
                {event.title}
              </h3>
              {event.time && (
                <p className="text-sm text-slate-500 mb-2">{event.time}</p>
              )}
              {event.ageRange && (
                <p className="text-sm text-brand-orange font-medium mb-2">
                  {event.ageRange}
                </p>
              )}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

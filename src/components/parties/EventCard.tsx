import { GymEvent } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: GymEvent;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-6 md:gap-10 items-start",
        !isEven && "md:flex-row-reverse"
      )}
    >
      {/* Timeline node */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white",
            event.highlight ? "bg-brand-orange" : "bg-brand-blue"
          )}
        >
          {index + 1}
        </div>
        <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 bg-white rounded-xl p-6 shadow-sm border hover:-translate-y-1 hover:shadow-lg transition-all duration-200 mb-6",
          event.highlight ? "border-brand-orange/20" : "border-slate-100"
        )}
      >
        {event.highlight && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange uppercase tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            Featured Event
          </span>
        )}
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
          {event.date}
        </p>
        <h3 className="font-display font-bold text-2xl text-brand-blue uppercase tracking-wide mb-3">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-500">
          {event.time && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {event.time}
            </span>
          )}
          {event.ageRange && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.ageRange}
            </span>
          )}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

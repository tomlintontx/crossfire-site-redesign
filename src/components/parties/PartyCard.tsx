import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface PartyOption {
  type: "Member" | "Non-Member";
  price: number;
  inclusions: string[];
  featured?: boolean;
}

const partyOptions: PartyOption[] = [
  {
    type: "Member",
    price: 225,
    inclusions: [
      "2 hours of gym access",
      "Dedicated party host",
      "Up to 20 guests",
      "Use of party area",
      "Invitations provided",
      "10% off for active members",
    ],
    featured: true,
  },
  {
    type: "Non-Member",
    price: 250,
    inclusions: [
      "2 hours of gym access",
      "Dedicated party host",
      "Up to 20 guests",
      "Use of party area",
      "Invitations provided",
    ],
  },
];

export default function PartyCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {partyOptions.map((option) => (
        <div
          key={option.type}
          className={cn(
            "rounded-2xl p-8 flex flex-col border-2 transition-all duration-200",
            option.featured
              ? "bg-brand-blue text-white border-brand-orange shadow-xl"
              : "bg-white text-slate-800 border-slate-200 shadow-sm"
          )}
        >
          {option.featured && (
            <div className="inline-flex self-start bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              Best Value
            </div>
          )}
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest opacity-60">
            {option.type}
          </div>
          <div
            className={cn(
              "font-display font-bold text-5xl mb-1",
              option.featured ? "text-white" : "text-brand-blue"
            )}
          >
            ${option.price}
          </div>
          <div
            className={cn(
              "text-sm mb-6",
              option.featured ? "text-white/60" : "text-slate-500"
            )}
          >
            per party (up to 20 guests)
          </div>
          <ul className="space-y-2.5 flex-1 mb-8">
            {option.inclusions.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <svg
                  className={cn(
                    "w-4 h-4 mt-0.5 shrink-0",
                    option.featured ? "text-brand-orange" : "text-brand-orange"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={option.featured ? "text-white/80" : "text-slate-600"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Button
            href="mailto:info@crossfiregymnastics.com"
            external
            variant={option.featured ? "primary" : "secondary"}
            size="md"
          >
            Book This Party
          </Button>
        </div>
      ))}
    </div>
  );
}

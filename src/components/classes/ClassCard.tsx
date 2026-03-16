import { GymClass } from "@/data/classes";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { formatPrice } from "@/lib/utils";

interface ClassCardProps {
  gymClass: GymClass;
  mode?: "compact" | "full";
}

export default function ClassCard({ gymClass, mode = "full" }: ClassCardProps) {
  const { name, ageRange, duration, price, description, highlights } = gymClass;

  if (mode === "compact") {
    return (
      <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="age">{ageRange}</Badge>
          <Badge variant="duration">{duration}</Badge>
          <Badge variant="price">{formatPrice(price)}</Badge>
        </div>
        <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-2">
          {name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>
        <Button
          href="https://app.iclasspro.com/portal/crossfire"
          external
          variant="primary"
          size="sm"
          className="mt-4 self-start"
        >
          Enroll Now
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col">
      <PlaceholderImage
        label={name}
        color="slate"
        aspectRatio="video"
        className="rounded-none"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="age">Ages {ageRange}</Badge>
          <Badge variant="duration">{duration}</Badge>
          <Badge variant="price">{formatPrice(price)}</Badge>
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-blue uppercase tracking-wide mb-3">
          {name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
        {highlights && highlights.length > 0 && (
          <ul className="space-y-1 mb-5">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <Button
          href="https://app.iclasspro.com/portal/crossfire"
          external
          variant="primary"
          size="md"
          className="self-start"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { classes } from "@/data/classes";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { formatPrice } from "@/lib/utils";

// Show first 6 programs on home
const previewClasses = classes.slice(0, 6);

export default function ProgramsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <SectionHeading
            title="Our Programs"
            subtitle="Classes for every age and ability level, from first tumbles to competitive team."
            className="mb-0"
          />
          <Link
            href="/classes"
            className="text-brand-orange font-semibold hover:text-brand-orange-light text-sm mt-4 md:mt-0 shrink-0"
          >
            View all programs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <PlaceholderImage
                label={cls.name}
                color="slate"
                aspectRatio="video"
                className="rounded-none"
              />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="age">{cls.ageRange}</Badge>
                  <Badge variant="duration">{cls.duration}</Badge>
                  <Badge variant="price">{formatPrice(cls.price)}</Badge>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-2">
                  {cls.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
                  {cls.description}
                </p>
                <Link
                  href="/classes"
                  className="mt-4 text-sm font-semibold text-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

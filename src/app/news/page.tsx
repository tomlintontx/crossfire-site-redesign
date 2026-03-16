import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, updates, and announcements from Crossfire Gymnastics in Boerne, TX.",
};

const newsItems = [
  {
    id: "1",
    title: "2026 Summer Camp Registration Now Open",
    date: "March 1, 2026",
    category: "Announcement",
    excerpt:
      "Don't miss out on our most popular summer program! Spaces are filling up fast for our 6-week summer camp running June 8 through July 31.",
  },
  {
    id: "2",
    title: "Annual Performance — May 16 Save the Date",
    date: "February 15, 2026",
    category: "Event",
    excerpt:
      "Our annual showcase is coming up! Students of all levels will perform the skills they've worked so hard on all year. Details and ticket info coming soon.",
  },
  {
    id: "3",
    title: "New Ninja Academy Obstacles Added",
    date: "January 20, 2026",
    category: "Facility",
    excerpt:
      "We've just installed brand new ninja obstacle equipment! Our Ninja Academy students will love the new challenges. Come check it out at your next class.",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-brand-orange mb-5" />
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            News
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            Stay up to date with the latest happenings at Crossfire Gymnastics.
          </p>
        </div>
      </div>

      {/* News grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Updates"
            subtitle="Announcements, event news, and gym updates."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <PlaceholderImage
                  label={item.title}
                  color="slate"
                  aspectRatio="video"
                  className="rounded-none"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wide bg-brand-orange-pale px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-3 flex-1">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <span className="text-brand-orange text-sm font-semibold">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-[3px] bg-brand-orange mb-5 mx-auto" />
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Get updates on class schedules, events, and gym news delivered
            straight to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            action="#"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-white/40 text-xs">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}

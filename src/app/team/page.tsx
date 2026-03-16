import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the expert coaches and staff at Crossfire Gymnastics in Boerne, TX. Passionate, certified, and dedicated to your child's success.",
};

const coaches = [
  { name: "Head Coach", role: "Head Coach & Director", bio: "Years of competitive gymnastics experience at the collegiate and club level. Certified USAG professional dedicated to athlete development." },
  { name: "Girls Coach", role: "Girls Program Coach", bio: "Specializes in levels 1–4 girls gymnastics. Patient, encouraging, and passionate about teaching fundamentals the right way." },
  { name: "Ninja Coach", role: "Ninja Academy Coach", bio: "High-energy instructor with a background in parkour and obstacle course racing. Makes every class feel like an adventure." },
  { name: "Tumbling Coach", role: "Tumbling Specialist", bio: "Former cheerleading coach with expertise in progressive tumbling skills. Great with athletes from all backgrounds." },
  { name: "Toddler Coach", role: "Toddler Program Instructor", bio: "Early childhood development background combined with gymnastics expertise. Creates magical first experiences for our youngest athletes." },
  { name: "Team Coach", role: "Competitive Team Coach", bio: "USAG certified with experience coaching athletes to regional and national competitions. Demanding but nurturing." },
];

export default function TeamPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-brand-orange mb-5" />
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Our Team
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            Our coaches are passionate, experienced, and committed to helping
            every athlete reach their full potential.
          </p>
        </div>
      </div>

      {/* Coach grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet the Coaches"
            subtitle="Certified professionals who love what they do — and it shows."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 text-center"
              >
                {/* Circular placeholder headshot */}
                <div className="w-24 h-24 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-brand-blue/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-blue uppercase tracking-wide mb-1">
                  {coach.name}
                </h3>
                <p className="text-brand-orange text-sm font-semibold mb-3">
                  {coach.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join our team */}
      <section className="bg-brand-orange-pale py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Join Our Team"
            subtitle="Passionate about gymnastics and working with kids? We'd love to hear from you."
            centered
          />
          <p className="text-slate-600 leading-relaxed mb-8">
            Crossfire is always looking for energetic, dedicated coaches and
            support staff. Whether you have competitive gymnastics experience or
            a background in coaching youth sports, we want to hear from you.
          </p>
          <Button
            href="mailto:info@crossfiregymnastics.com?subject=Coaching%20Application"
            external
            variant="primary"
            size="lg"
          >
            Apply Now
          </Button>
          <p className="mt-3 text-slate-500 text-sm">
            Send your resume to{" "}
            <a
              href="mailto:info@crossfiregymnastics.com"
              className="text-brand-orange hover:underline"
            >
              info@crossfiregymnastics.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

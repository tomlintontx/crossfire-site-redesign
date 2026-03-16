import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function CTABanner() {
  return (
    <>
      {/* Birthday Parties CTA */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-12 h-[3px] bg-brand-orange mb-5" />
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mb-4">
                Make Their Birthday Legendary.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
                Host an unforgettable birthday party at Crossfire! Two-hour
                facility access, a dedicated party host, and the coolest gym in
                Boerne all to yourselves.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/parties-events" variant="primary" size="lg">
                  Party Info & Pricing
                </Button>
                <Button
                  href="mailto:info@crossfiregymnastics.com"
                  external
                  variant="outline"
                  size="lg"
                >
                  Book a Party
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <PlaceholderImage
                label="Birthday party photo"
                color="blue"
                aspectRatio="video"
                className="rounded-2xl ring-4 ring-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Classes are forming now. Enroll today and give your child the gift
            of gymnastics.
          </p>
          <Button
            href="https://app.iclasspro.com/portal/crossfire"
            external
            variant="outline"
            size="lg"
          >
            Enroll Now
          </Button>
        </div>
      </section>
    </>
  );
}

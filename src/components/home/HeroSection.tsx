import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-blue overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0F2348 0%, #1A3A6B 50%, #1E4D9C 100%)",
        }}
      />

      {/* Decorative dots pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange text-sm font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Boerne, Texas
            </div>
            <h1 className="font-display font-bold text-white uppercase leading-none tracking-tight">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Where
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Champions
              </span>
              <span className="relative block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Begin.
                <span className="absolute -bottom-2 left-0 w-24 h-[4px] bg-brand-orange" />
              </span>
            </h1>
            <p className="mt-10 text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Gymnastics programs for all ages and skill levels — from tiny
              toddlers taking their first tumble to competitive athletes reaching
              for the top.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/classes" variant="primary" size="lg">
                View Classes
              </Button>
              <Button
                href="https://app.iclasspro.com/portal/crossfire"
                external
                variant="outline"
                size="lg"
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <PlaceholderImage
              label="Gymnastics action photo"
              color="blue"
              aspectRatio="portrait"
              className="rounded-2xl shadow-2xl ring-4 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Diagonal clip bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}

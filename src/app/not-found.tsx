import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-blue flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display font-bold text-9xl text-white/10 leading-none select-none mb-4">
          404
        </div>
        <div className="w-12 h-[3px] bg-brand-orange mx-auto mb-5" />
        <h1 className="font-display font-bold text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 text-lg max-w-sm mx-auto mb-8">
          Looks like this page did a flip and landed somewhere else. Let's get
          you back on the mat.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/classes" variant="outline" size="lg">
            View Classes
          </Button>
        </div>
      </div>
    </div>
  );
}

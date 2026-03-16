import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center flex flex-col items-center",
        className
      )}
    >
      <div className="w-12 h-[3px] bg-brand-orange mb-4" />
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight",
          light ? "text-white" : "text-brand-blue"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg max-w-2xl",
            light ? "text-white/80" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

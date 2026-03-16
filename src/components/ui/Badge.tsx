import { cn } from "@/lib/utils";

type BadgeVariant = "age" | "price" | "duration" | "category";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  age: "bg-brand-blue/10 text-brand-blue",
  price: "bg-brand-orange/10 text-brand-orange",
  duration: "bg-slate-100 text-slate-600",
  category: "bg-brand-orange-pale text-brand-orange",
};

export default function Badge({
  variant = "age",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

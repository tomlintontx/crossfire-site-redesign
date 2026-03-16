import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  color?: "blue" | "orange" | "slate" | "orange-pale";
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

const colorStyles = {
  blue: "bg-brand-blue/20",
  orange: "bg-brand-orange/20",
  slate: "bg-slate-200",
  "orange-pale": "bg-brand-orange-pale",
};

const aspectStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export default function PlaceholderImage({
  label = "Photo",
  className,
  color = "slate",
  aspectRatio = "video",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl overflow-hidden",
        colorStyles[color],
        aspectStyles[aspectRatio],
        className
      )}
    >
      <div className="text-center text-slate-400 p-4">
        <svg
          className="w-10 h-10 mx-auto mb-2 opacity-40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm font-medium opacity-60">{label}</span>
      </div>
    </div>
  );
}

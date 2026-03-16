import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-light shadow-sm",
  secondary:
    "bg-brand-blue text-white hover:bg-brand-blue-mid shadow-sm",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-brand-blue",
  ghost:
    "text-brand-blue hover:bg-brand-orange-pale",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2";

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

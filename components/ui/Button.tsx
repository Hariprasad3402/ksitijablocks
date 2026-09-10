import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "inverse";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-cream hover:bg-brand-dark",
  outline: "bg-cream text-ink border border-ink/15 hover:bg-cream-dark",
  inverse: "bg-cream text-brand hover:bg-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </Link>
  );
}

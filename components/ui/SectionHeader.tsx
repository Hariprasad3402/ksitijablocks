import type { ReactNode } from "react";
import { Button } from "./Button";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  children,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-ink-soft">{description}</p>
        )}
        {children}
      </div>
      {action && (
        <Button href={action.href} variant="outline" className="shrink-0">
          {action.label}
        </Button>
      )}
    </div>
  );
}

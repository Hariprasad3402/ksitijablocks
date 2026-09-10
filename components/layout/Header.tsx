"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
        <Link
          href="#home"
          className="shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/Logo.png"
            alt="Ksitija Blocks — Built to Last"
            width={220}
            height={44}
            className="h-9 w-auto sm:h-10"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                index === 0
                  ? "border-b-2 border-brand text-brand"
                  : "text-ink-soft hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button href="#contact">Get a Quote</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-ink/15 text-ink md:hidden"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-ink/10 bg-cream px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-cream-dark text-brand"
                      : "text-ink-soft hover:bg-cream-dark hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:hidden">
            <Button
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full justify-center"
            >
              Get a Quote
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

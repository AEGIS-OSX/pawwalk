'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded">
          <div className="w-8 h-8 bg-primary-amber rounded-lg flex items-center justify-center">
            <span className="text-night-slate font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-night-slate hidden sm:inline">PawWalk</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <a href="#features" className="text-sm md:text-base text-night-slate hover:text-primary-amber transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-2 py-1">
            Features
          </a>
          <a href="#faq" className="text-sm md:text-base text-night-slate hover:text-primary-amber transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-2 py-1">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}

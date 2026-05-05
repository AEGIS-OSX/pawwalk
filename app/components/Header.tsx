'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-amber rounded-lg flex items-center justify-center">
            <span className="text-night-slate font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-night-slate">PawWalk</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="text-sm text-text-muted hover:text-night-slate transition-colors"
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-sm text-text-muted hover:text-night-slate transition-colors"
          >
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}

'use client';

export default function Footer() {
  return (
    <footer className="bg-night-slate text-white py-12 md:py-16 lg:py-20">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-amber rounded-lg flex items-center justify-center">
                <span className="text-night-slate font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-white">PawWalk</span>
            </div>
            <p className="text-sm text-white/70">
              Book trusted dog walkers, get photo updates, and track walks with live GPS.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@pawwalk.app"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  support@pawwalk.app
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pawwalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
                >
                  @pawwalk on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-white/50">
            © 2026 PawWalk. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs md:text-sm text-white/50 hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs md:text-sm text-white/50 hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine rounded px-1 py-0.5"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

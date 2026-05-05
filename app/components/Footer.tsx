export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold text-night-slate mb-4">
              PawWalk
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Book trusted dog walkers, get photo updates, and track walks with live GPS.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-sm font-semibold text-night-slate mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-text-muted hover:text-accent-pine transition-colors duration-150"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-text-muted hover:text-accent-pine transition-colors duration-150"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-night-slate mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@pawwalk.app"
                  className="text-sm text-text-muted hover:text-accent-pine transition-colors duration-150"
                >
                  support@pawwalk.app
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pawwalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent-pine transition-colors duration-150"
                >
                  @pawwalk on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-text-muted text-center">
            &copy; 2024 PawWalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

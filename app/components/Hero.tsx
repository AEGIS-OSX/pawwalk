'use client';

import { useState } from 'react';
import EmailSignup from './EmailSignup';

export default function Hero() {
  const [appStoreError, setAppStoreError] = useState(false);

  const handleAppStoreClick = () => {
    // TODO: Replace with actual App Store link from App Store Connect
    // Format: https://apps.apple.com/app/pawwalk/id[APP_ID]?utm_source=landing&utm_medium=web&utm_campaign=launch
    const appStoreUrl = 'https://apps.apple.com/app/pawwalk/id1234567890?utm_source=landing&utm_medium=web&utm_campaign=launch';
    
    // TODO: Track event in Plausible or GA4
    // Example: gtag('event', 'app_store_click', { source: 'hero' });
    
    window.location.href = appStoreUrl;
    
    // Fallback error handling if deeplink fails
    setTimeout(() => {
      setAppStoreError(true);
    }, 2000);
  };

  return (
    <section className="bg-white pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
      <div className="container max-w-2xl">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-night-slate mb-4 md:mb-6 leading-tight">
            PawWalk: Trusted walkers, live GPS, photo updates
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-muted mb-8 md:mb-10 leading-relaxed">
            Built for busy city dog owners. Book vetted walkers, get photo updates, and follow the walk live on your phone.
          </p>

          {/* Primary CTA: App Store */}
          <div className="mb-8 md:mb-10">
            <button
              onClick={handleAppStoreClick}
              className="btn-primary inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Download PawWalk on the App Store (opens in App Store with tracking)"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.93.64 1.54 1.68 1.54 2.88 0 1.2-.61 2.24-1.54 2.88.43.96 1.34 1.51 2.25 1.51 2.18 0 3.95-1.77 3.95-3.95s-1.77-3.95-3.95-3.95zm-11.1 0c-2.18 0-3.95 1.77-3.95 3.95s1.77 3.95 3.95 3.95c.91 0 1.82-.55 2.25-1.51-.93-.64-1.54-1.68-1.54-2.88 0-1.2.61-2.24 1.54-2.88-.43-.96-1.34-1.51-2.25-1.51zm11.1-9c-2.18 0-3.95 1.77-3.95 3.95 0 1.2.61 2.24 1.54 2.88-.43.96-1.34 1.51-2.25 1.51-.91 0-1.82-.55-2.25-1.51.93-.64 1.54-1.68 1.54-2.88 0-2.18-1.77-3.95-3.95-3.95-2.18 0-3.95 1.77-3.95 3.95 0 1.2.61 2.24 1.54 2.88-.43.96-1.34 1.51-2.25 1.51-.91 0-1.82-.55-2.25-1.51.93-.64 1.54-1.68 1.54-2.88 0-2.18-1.77-3.95-3.95-3.95S0 2.27 0 4.45s1.77 3.95 3.95 3.95c.91 0 1.82-.55 2.25-1.51-.93-.64-1.54-1.68-1.54-2.88 0-1.2.61-2.24 1.54-2.88-.43-.96-1.34-1.51-2.25-1.51C1.77.45 0 2.22 0 4.4s1.77 3.95 3.95 3.95c.91 0 1.82.55 2.25 1.51-.93.64-1.54 1.68-1.54 2.88 0 2.18 1.77 3.95 3.95 3.95 2.18 0 3.95-1.77 3.95-3.95 0-1.2-.61-2.24-1.54-2.88.43-.96 1.34-1.51 2.25-1.51.91 0 1.82.55 2.25 1.51-.93.64-1.54 1.68-1.54 2.88 0 2.18 1.77 3.95 3.95 3.95 2.18 0 3.95-1.77 3.95-3.95 0-1.2-.61-2.24-1.54-2.88.43-.96 1.34-1.51 2.25-1.51.91 0 1.82-.55 2.25-1.51-.93-.64-1.54-1.68-1.54-2.88 0-2.18-1.77-3.95-3.95-3.95z" />
              </svg>
              Download on the App Store
            </button>
          </div>

          {/* Error message for deeplink failure */}
          {appStoreError && (
            <div className="mb-8 p-4 bg-error/10 border border-error rounded-lg text-error text-sm md:text-base" role="alert">
              <p className="font-semibold mb-2">Could not open the App Store.</p>
              <p className="mb-3">Tap the button above again or use this link:</p>
              <a
                href="https://apps.apple.com/app/pawwalk/id1234567890?utm_source=landing&utm_medium=web&utm_campaign=launch"
                className="inline-block bg-error text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Open App Store
              </a>
            </div>
          )}

          {/* Secondary CTA: Email Signup */}
          <div className="border-t border-border pt-8 md:pt-10">
            <h2 className="text-lg md:text-xl font-semibold text-night-slate mb-4">Get updates by email</h2>
            <EmailSignup />
            <p className="text-xs md:text-sm text-text-muted mt-4">
              We will send a confirmation email. By signing up you agree to receive occasional launch updates.{' '}
              <a href="/privacy" className="text-accent-pine hover:text-primary-amber font-semibold">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function DownloadCTA() {
  const [appStoreError, setAppStoreError] = useState(false);

  const handleAppStoreClick = () => {
    // TODO: Replace with actual App Store link from App Store Connect
    const appStoreUrl = 'https://apps.apple.com/app/pawwalk/id1234567890?utm_source=landing&utm_medium=web&utm_campaign=launch';
    
    // TODO: Track event in Plausible or GA4
    window.location.href = appStoreUrl;
    
    setTimeout(() => {
      setAppStoreError(true);
    }, 2000);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleAppStoreClick}
        className="btn-primary w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 mb-4"
        aria-label="Download PawWalk on the App Store (opens in App Store with tracking)"
      >
        Download on the App Store
      </button>

      {appStoreError && (
        <div className="mt-4 p-4 bg-error/10 border border-error rounded-lg text-error text-sm" role="alert">
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

      <p className="text-xs md:text-sm text-text-muted mt-4">
        App Store link opens on iPhone. If the App Store does not open, try this link or sign up by email.
      </p>
    </div>
  );
}

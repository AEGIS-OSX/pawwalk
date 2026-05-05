'use client';

import { useState } from 'react';

interface DownloadCTAProps {
  appStoreUrl?: string;
  fallbackUrl?: string;
  buttonLabel?: string;
  microcopy?: string;
  errorMessage?: string;
  showIcon?: boolean;
}

export default function DownloadCTA({
  appStoreUrl = 'https://apps.apple.com/app/pawwalk/id123456789?utm_source=landing&utm_medium=web&utm_campaign=launch',
  fallbackUrl = 'https://apps.apple.com/app/pawwalk/id123456789',
  buttonLabel = 'Download on the App Store',
  microcopy = 'App Store link opens on iPhone. If the App Store does not open, try this link or sign up by email.',
  errorMessage = 'Could not open the App Store. Tap the badge again or use the link below to download.',
  showIcon = true,
}: DownloadCTAProps) {
  const [showError, setShowError] = useState(false);

  const handleAppStoreClick = () => {
    setShowError(false);
    // Attempt to open the App Store link
    // On iOS, this will open the App Store app; on other devices, it opens the web version
    window.location.href = appStoreUrl;

    // If the link doesn't open (e.g., on non-iOS devices), show error after a delay
    const timer = setTimeout(() => {
      setShowError(true);
    }, 1500);

    return () => clearTimeout(timer);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleAppStoreClick}
        className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2"
        aria-label={`${buttonLabel} (opens in App Store with tracking)`}
      >
        {showIcon && (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.05 13.5c-.91 0-1.82-.45-2.36-1.36.64-.83 1.73-1.34 2.36-1.34.91 0 1.82.45 2.36 1.36-.64.83-1.73 1.34-2.36 1.34zm0-4.5c-1.82 0-3.64.91-4.73 2.27-1.09-1.36-2.91-2.27-4.73-2.27-4.09 0-7.5 3.41-7.5 7.5s3.41 7.5 7.5 7.5c1.82 0 3.64-.91 4.73-2.27 1.09 1.36 2.91 2.27 4.73 2.27 4.09 0 7.5-3.41 7.5-7.5s-3.41-7.5-7.5-7.5z" />
          </svg>
        )}
        {buttonLabel}
      </button>

      <p className="text-xs text-text-muted">
        {microcopy}{' '}
        <a
          href={fallbackUrl}
          className="text-accent-pine hover:text-primary-amber underline"
        >
          try this link
        </a>
      </p>

      {showError && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-sm text-error"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

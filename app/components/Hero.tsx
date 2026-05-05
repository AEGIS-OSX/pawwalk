'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError && value) {
      setEmailError('');
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setEmailError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setEmail('');
        setTimeout(() => setEmailSubmitted(false), 5000);
      } else {
        setEmailError('Sorry, we could not save that right now. Try again in a moment.');
      }
    } catch (error) {
      setEmailError('Sorry, we could not save that right now. Try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppStoreClick = () => {
    const appStoreUrl = 'https://apps.apple.com/app/pawwalk/id123456789?utm_source=landing&utm_medium=web&utm_campaign=launch';
    window.location.href = appStoreUrl;
  };

  return (
    <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      <div className="container max-w-2xl">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-night-slate mb-6 leading-tight">
          PawWalk: Trusted walkers, live GPS, photo updates
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
          Built for busy city dog owners. Book vetted walkers, get photo updates, and follow the walk live on your phone.
        </p>

        {/* Primary CTA: App Store Button */}
        <div className="mb-8">
          <button
            onClick={handleAppStoreClick}
            className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2"
            aria-label="Download PawWalk on the App Store (opens in App Store with tracking)"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.05 13.5c-.91 0-1.82-.45-2.36-1.36.64-.83 1.73-1.34 2.36-1.34.91 0 1.82.45 2.36 1.36-.64.83-1.73 1.34-2.36 1.34zm0-4.5c-1.82 0-3.64.91-4.73 2.27-1.09-1.36-2.91-2.27-4.73-2.27-4.09 0-7.5 3.41-7.5 7.5s3.41 7.5 7.5 7.5c1.82 0 3.64-.91 4.73-2.27 1.09 1.36 2.91 2.27 4.73 2.27 4.09 0 7.5-3.41 7.5-7.5s-3.41-7.5-7.5-7.5z" />
            </svg>
            Download on the App Store
          </button>
          <p className="text-xs text-text-muted mt-3">
            App Store link opens on iPhone. If the App Store does not open,{' '}
            <a
              href="https://apps.apple.com/app/pawwalk/id123456789"
              className="text-accent-pine hover:text-primary-amber underline"
            >
              try this link
            </a>
            {' '}or sign up by email below.
          </p>
        </div>

        {/* Secondary CTA: Email Signup */}
        <div className="bg-surface rounded-lg p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-semibold text-night-slate mb-2">
            Get updates by email
          </h2>
          <p className="text-sm text-text-muted mb-4">
            We will send a confirmation email. By signing up you agree to receive occasional launch updates.{' '}
            <a href="/privacy" className="text-accent-pine hover:text-primary-amber underline">
              Privacy
            </a>
          </p>

          {emailSubmitted ? (
            <div className="bg-success/10 border border-success rounded-lg p-4 text-sm text-success">
              Thanks, check your inbox to confirm. You will receive one confirmation email from Mailchimp.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-night-slate placeholder-text-muted focus:outline-none focus:border-accent-pine focus:ring-2 focus:ring-accent-pine/20 disabled:opacity-50"
                aria-label="Email address"
                aria-invalid={emailError ? 'true' : 'false'}
                aria-describedby={emailError ? 'email-error' : undefined}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
              </button>
            </form>
          )}

          {emailError && (
            <p id="email-error" className="text-sm text-error mt-3">
              {emailError}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

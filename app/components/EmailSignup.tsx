'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // TODO: Wire to Mailchimp API
      // POST to /api/subscribe with { email }
      // Mailchimp list: "pawwalk_launch"
      // Double opt-in enabled
      // API key stored in environment variable: MAILCHIMP_API_KEY
      // List ID stored in environment variable: MAILCHIMP_LIST_ID
      // Example endpoint: https://[dc].api.mailchimp.com/3.0/lists/[list_id]/members
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
      
      // TODO: Track event in Plausible or GA4
      // Example: gtag('event', 'email_signup', { source: 'hero' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Sorry, we could not save that right now. Try again in a moment.');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 md:py-4 border border-border rounded-lg bg-white text-night-slate placeholder-text-muted focus:outline-none focus:border-accent-pine focus:ring-2 focus:ring-accent-pine/20 transition-all disabled:opacity-50"
          aria-label="Email address"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary px-6 md:px-8 py-3 md:py-4 font-semibold rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-success/10 border border-success rounded-lg text-success text-sm" role="status">
          <p className="font-semibold mb-1">Thanks, check your inbox to confirm.</p>
          <p>You will receive one confirmation email from Mailchimp.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-4 bg-error/10 border border-error rounded-lg text-error text-sm" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { validateEmail, getEmailErrorMessage } from '@/app/lib/validators';

interface EmailSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  privacyLink?: string;
  onSubmit?: (email: string) => Promise<boolean>;
}

export default function EmailSignup({
  title = 'Get updates by email',
  description = 'We will send a confirmation email. By signing up you agree to receive occasional launch updates.',
  placeholder = 'your@email.com',
  buttonLabel = 'Sign up',
  successMessage = 'Thanks, check your inbox to confirm. You will receive one confirmation email from Mailchimp.',
  errorMessage = 'Sorry, we could not save that right now. Try again in a moment.',
  privacyLink = '/privacy',
  onSubmit,
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing
    if (emailError && value) {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email format
    const validationError = getEmailErrorMessage(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }

    setIsSubmitting(true);
    setEmailError('');
    setSubmitError('');

    try {
      // Call the provided onSubmit handler or use default placeholder
      let success = false;
      if (onSubmit) {
        success = await onSubmit(email);
      } else {
        // Placeholder: in production, this would call /api/subscribe or similar
        // For static export, we just simulate success
        await new Promise((resolve) => setTimeout(resolve, 500));
        success = true;
      }

      if (success) {
        setIsSubmitted(true);
        setEmail('');
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(errorMessage);
      }
    } catch (error) {
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface rounded-lg p-6 md:p-8">
      <h2 className="text-lg md:text-xl font-semibold text-night-slate mb-2">
        {title}
      </h2>
      <p className="text-sm text-text-muted mb-4">
        {description}{' '}
        <a href={privacyLink} className="text-accent-pine hover:text-primary-amber underline">
          Privacy
        </a>
      </p>

      {isSubmitted ? (
        <div
          className="bg-success/10 border border-success rounded-lg p-4 text-sm text-success"
          role="status"
          aria-live="polite"
        >
          {successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-night-slate placeholder-text-muted focus:outline-none focus:border-accent-pine focus:ring-2 focus:ring-accent-pine/20 disabled:opacity-50 transition-colors"
              aria-label="Email address"
              aria-invalid={emailError ? 'true' : 'false'}
              aria-describedby={emailError ? 'email-error' : undefined}
            />
            {emailError && (
              <p id="email-error" className="text-sm text-error mt-2">
                {emailError}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary whitespace-nowrap disabled:opacity-50"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : buttonLabel}
          </button>
        </form>
      )}

      {submitError && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-sm text-error mt-3"
          role="alert"
          aria-live="polite"
        >
          {submitError}
        </div>
      )}
    </div>
  );
}

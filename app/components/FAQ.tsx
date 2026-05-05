'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I pay for walks?',
      answer: 'Payments are handled in the app after you install. You can add a card, pay per walk, and see receipts in your account.',
    },
    {
      question: 'Are PawWalk walkers vetted?',
      answer: 'Yes. Every walker completes ID verification and a local reference check before taking walks.',
    },
    {
      question: 'What if my walker is late or cancels?',
      answer: 'You will get an immediate notification and an option to reschedule or request a new walker. Contact support at support@pawwalk.app for urgent issues.',
    },
    {
      question: 'How do I cancel a walk?',
      answer: 'Open the booking in the app and select Cancel. Cancellation terms and any fees appear before you confirm.',
    },
  ];

  return (
    <section id="faq" className="bg-surface py-12 md:py-16 lg:py-20">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night-slate text-center mb-12 md:mb-16">
          Frequently asked questions
        </h2>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between hover:bg-sand/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base md:text-lg font-semibold text-night-slate text-left">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-accent-pine flex-shrink-0 ml-4 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 md:px-8 py-4 md:py-5 border-t border-border bg-white"
                >
                  <p className="text-base md:text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white rounded-lg border border-border text-center">
          <p className="text-base md:text-lg text-night-slate mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@pawwalk.app"
            className="inline-block bg-primary-amber text-night-slate px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pine"
          >
            Contact support@pawwalk.app
          </a>
        </div>
      </div>
    </section>
  );
}

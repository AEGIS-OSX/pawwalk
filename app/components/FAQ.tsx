'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-night-slate mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-surface text-left transition-colors duration-150"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-night-slate pr-4">
                  {item.question}
                </h3>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-accent-pine transition-transform duration-200"
                  aria-hidden="true"
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-sand border-t border-border"
                >
                  <p className="text-base text-text leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

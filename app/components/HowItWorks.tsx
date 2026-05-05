'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book',
      description: 'Enter your address, pick a time, and choose a walker.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Meet',
      description: 'Your walker arrives, you get an arrival photo, and the walk begins.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m0 0l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1v2.5" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Track',
      description: 'Follow the route live, get photo updates, and see the walk summary when it ends.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-surface py-12 md:py-16 lg:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night-slate text-center mb-12 md:mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step Number Circle */}
              <div className="w-16 h-16 md:w-14 md:h-14 bg-primary-amber rounded-full flex items-center justify-center text-night-slate font-bold text-2xl md:text-xl mb-6 flex-shrink-0">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 text-accent-pine mb-4 flex-shrink-0">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-lg font-semibold text-night-slate mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-0.5 bg-border transform translate-x-8" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

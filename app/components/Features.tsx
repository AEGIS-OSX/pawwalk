'use client';

export default function Features() {
  const features = [
    {
      title: 'Vetted walkers',
      description: 'Background checks, ID verification, and local references for every walker.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Live updates',
      description: 'Photo check-ins and live GPS so you know your dog is on the move.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Easy scheduling',
      description: 'Book recurring or one-off walks in two taps, and manage them from the app.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night-slate text-center mb-12 md:mb-16">
          Why PawWalk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-surface rounded-lg flex items-center justify-center text-accent-pine mb-4 md:mb-6 flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-lg font-semibold text-night-slate mb-2">
                {feature.title}
              </h3>
              <p className="text-base md:text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

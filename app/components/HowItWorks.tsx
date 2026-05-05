'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Book',
      description: 'Enter your address, pick a time, and choose a walker.',
    },
    {
      number: 2,
      title: 'Meet',
      description: 'Your walker arrives, you get an arrival photo, and the walk begins.',
    },
    {
      number: 3,
      title: 'Track',
      description: 'Follow the route live, get photo updates, and see the walk summary when it ends.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-night-slate mb-12 md:mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Step Number Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-pine text-white font-bold text-lg mb-6">
                {step.number}
              </div>
              {/* Step Title */}
              <h3 className="text-lg md:text-xl font-semibold text-night-slate mb-3">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-base text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

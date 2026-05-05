'use client';

import { useState } from 'react';

export default function ScreenshotShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      alt: 'PawWalk app — booking screen showing time and walker selection',
      title: 'Book in seconds',
      description: 'Select your dog, pick a time, and choose from vetted walkers nearby.',
    },
    {
      alt: 'PawWalk app — live walk tracking with map and route',
      title: 'Track live',
      description: 'Follow your dog\'s route in real-time with GPS and photo updates.',
    },
    {
      alt: 'PawWalk app — photo update and walk summary with duration and notes',
      title: 'Get updates',
      description: 'Receive photos and a summary when the walk ends.',
    },
  ];

  return (
    <section className="bg-surface py-12 md:py-16 lg:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night-slate text-center mb-12 md:mb-16">
          See it in action
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Mock Device Frame */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative mx-auto max-w-xs">
              {/* iPhone Frame */}
              <div className="bg-night-slate rounded-3xl p-3 shadow-lg">
                <div className="bg-white rounded-2xl overflow-hidden aspect-[9/19.5] flex items-center justify-center bg-gradient-to-br from-sand to-white">
                  {/* Placeholder for screenshot */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <p className="text-sm text-text-muted">{screenshots[activeIndex].alt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Info and Navigation */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-night-slate mb-3">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed">
                {screenshots[activeIndex].description}
              </p>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-primary-amber w-8'
                      : 'bg-border w-2 hover:bg-text-muted'
                  }`}
                  aria-label={`View screenshot ${index + 1}: ${screenshots[index].title}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Keyboard Navigation Hint */}
            <p className="text-xs text-text-muted mt-6">
              Use arrow keys or tap indicators to navigate screenshots
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ScreenshotShowcase() {
  const screenshots = [
    {
      id: 1,
      title: 'Booking Screen',
      description: 'PawWalk app — booking screen showing time and walker selection',
      image: '/screenshots/booking.png',
      alt: 'PawWalk app — booking screen showing time and walker selection',
    },
    {
      id: 2,
      title: 'Live Tracking',
      description: 'PawWalk app — live walk tracking with map and route',
      image: '/screenshots/tracking.png',
      alt: 'PawWalk app — live walk tracking with map and route',
    },
    {
      id: 3,
      title: 'Walk Summary',
      description: 'PawWalk app — photo update and walk summary with duration and notes',
      image: '/screenshots/summary.png',
      alt: 'PawWalk app — photo update and walk summary with duration and notes',
    },
  ];

  return (
    <section id="screenshots" className="bg-surface py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-night-slate mb-4">
          See it in action
        </h2>
        <p className="text-base md:text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
          From booking to tracking, PawWalk makes dog walking simple and transparent.
        </p>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-150"
            >
              {/* Image Container */}
              <div className="relative bg-sand aspect-[9/16] overflow-hidden flex items-center justify-center">
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  width={280}
                  height={560}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-night-slate mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stack Note */}
        <p className="text-xs text-text-muted text-center mt-8 md:hidden">
          Scroll to see all three app screens
        </p>
      </div>
    </section>
  );
}

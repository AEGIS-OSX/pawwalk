'use client';

export default function TrustSection() {
  const testimonials = [
    {
      quote: 'PawWalk made morning walks painless. I get a photo when the walk starts and a short note after. My dog comes home happy.',
      author: 'Aisha',
      location: 'Brooklyn',
    },
    {
      quote: 'Fast booking, clear tracking, and my walker is always on time. I recommend PawWalk to neighbors.',
      author: 'Marcus',
      location: 'Mission District',
    },
    {
      quote: 'Our pup loves the walkers. The app gives us peace of mind during work days.',
      author: 'Lina',
      location: 'Capitol Hill',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container max-w-4xl">
        {/* Social Proof Metric */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-text-muted">
            Join thousands of local pet owners who trust PawWalk for daily walks.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg p-6 md:p-8 flex flex-col"
            >
              {/* Quote Mark */}
              <div className="text-4xl text-primary-amber mb-4" aria-hidden="true">
                "
              </div>

              {/* Quote */}
              <p className="text-base md:text-sm text-night-slate leading-relaxed mb-6 flex-grow">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-night-slate">{testimonial.author}</p>
                <p className="text-sm text-text-muted">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

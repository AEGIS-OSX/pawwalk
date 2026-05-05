export default function TrustSection() {
  const testimonials = [
    {
      id: 1,
      quote: 'PawWalk made morning walks painless. I get a photo when the walk starts and a short note after. My dog comes home happy.',
      author: 'Aisha',
      location: 'Brooklyn',
    },
    {
      id: 2,
      quote: 'Fast booking, clear tracking, and my walker is always on time. I recommend PawWalk to neighbors.',
      author: 'Marcus',
      location: 'Mission District',
    },
    {
      id: 3,
      quote: 'Our pup loves the walkers. The app gives us peace of mind during work days.',
      author: 'Lina',
      location: 'Capitol Hill',
    },
  ];

  return (
    <section id="trust" className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container">
        {/* Metric Line */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl font-semibold text-night-slate">
            Join thousands of local pet owners who trust PawWalk for daily walks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col bg-surface rounded-lg p-6 md:p-8"
            >
              {/* Quote Mark */}
              <div className="text-4xl text-primary-amber mb-4" aria-hidden="true">
                "
              </div>

              {/* Quote Text */}
              <blockquote className="flex-1 mb-6">
                <p className="text-base md:text-lg text-night-slate leading-relaxed font-medium">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <footer className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-night-slate">
                  {testimonial.author}
                </p>
                <p className="text-xs text-text-muted">
                  {testimonial.location}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

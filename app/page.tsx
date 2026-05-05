export default function Page() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-night-slate mb-4">
            PawWalk: Trusted walkers, live GPS, photo updates
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-8">
            Built for busy city dog owners. Book vetted walkers, get photo updates, and follow the walk live on your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Download on the App Store
            </button>
            <button className="btn-secondary">
              Get updates by email
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-16 lg:py-20 border-t border-border">
        <h2 className="text-3xl md:text-4xl font-bold text-night-slate mb-12">
          Why PawWalk
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-night-slate mb-3">
              Vetted walkers
            </h3>
            <p className="text-text-muted">
              Background checks, ID verification, and local references for every walker.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-night-slate mb-3">
              Live updates
            </h3>
            <p className="text-text-muted">
              Photo check-ins and live GPS so you know your dog is on the move.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-night-slate mb-3">
              Easy scheduling
            </h3>
            <p className="text-text-muted">
              Book recurring or one-off walks in two taps, and manage them from the app.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 md:py-12 border-t border-border text-center text-sm text-text-muted">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <a href="/privacy" className="hover:text-accent-pine">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-accent-pine">
            Terms of Service
          </a>
          <a href="mailto:support@pawwalk.app" className="hover:text-accent-pine">
            support@pawwalk.app
          </a>
        </div>
        <p>&copy; 2024 PawWalk. All rights reserved.</p>
      </footer>
    </main>
  );
}

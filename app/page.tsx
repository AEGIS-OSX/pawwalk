import Header from './components/Header';
import Hero from './components/Hero';

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-white">
        <Hero />

        {/* Features Section */}
        <section id="features" className="container py-12 md:py-16 lg:py-20 border-t border-border">
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
    </>
  );
}

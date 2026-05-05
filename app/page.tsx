import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import DownloadCTA from './components/DownloadCTA';

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-white">
        <Hero />
        <Features />
        <ScreenshotShowcase />
        <TrustSection />
        <HowItWorks />

        {/* Download CTA Section */}
        <section className="bg-white py-12 md:py-16 lg:py-20 border-t border-border">
          <div className="container max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-night-slate mb-8">
              Ready to get started?
            </h2>
            <DownloadCTA />
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

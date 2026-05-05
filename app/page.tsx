import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';

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

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import DownloadCTA from './components/DownloadCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

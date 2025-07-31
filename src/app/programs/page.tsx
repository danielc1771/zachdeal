import { getCollectionProducts, type Product } from '@/lib/shopify';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramCard from '@/components/programs/ProgramCard';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export default async function ProgramsPage() {
  // Fetch all programs from Shopify
  const allPrograms: Product[] = await getCollectionProducts('programs', 50);
  
  // Filter for static programs (downloadable PDFs)
  const staticPrograms = allPrograms.filter(product => {
    const text = (product.title + ' ' + product.description).toLowerCase();
    return text.includes('pdf') || text.includes('download') || text.includes('static') || 
           (!text.includes('personalized') && !text.includes('custom') && !text.includes('subscription') && !text.includes('coaching'));
  });

  return (
    <div className="min-h-screen bg-bbd-black">
      {/* Hero Section */}
      <section id="hero">
        <ProgramsHero />
      </section>

      {/* Static Programs */}
      <section id="static-programs" className="py-12 sm:py-16 lg:py-20 bg-bbd-charcoal/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bebas text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-4 px-4 leading-tight">
              DOWNLOADABLE <span className="text-bbd-orange">PROGRAMS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-bbd-ivory/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Ready-to-use PDF workout programs you can download instantly and follow at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-bbd-ivory/70 px-4">
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-bbd-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Instant PDF Download</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-bbd-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">One-Time Purchase</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-bbd-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Proven Programs</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-bbd-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">No Subscription Required</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {staticPrograms.map((product) => (
              <ProgramCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More Button */}
          {staticPrograms.length >= 9 && (
            <div className="text-center mt-8 sm:mt-12 px-4">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-bbd-orange text-bbd-black font-bold text-base sm:text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
                LOAD MORE PROGRAMS
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="cta">
        <ProgramsCTA />
      </section>
    </div>
  );
}

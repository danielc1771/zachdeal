'use client';

import { useState, useEffect } from 'react';
import { getCollectionProducts, type Product } from '@/lib/shopify';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramCard from '@/components/programs/ProgramCard';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export default function ProgramsPage() {
  const [allPrograms, setAllPrograms] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const fetchedPrograms = await getCollectionProducts('programs', 50);
        setAllPrograms(fetchedPrograms);
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPrograms();
  }, []);
  
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

      {/* Programs Section - Immediately Visible */}
      <section id="static-programs" className="py-6 sm:py-8 lg:py-12 bg-bbd-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-bbd-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-bbd-ivory">Loading programs...</p>
            </div>
          ) : (
            <>
              {/* Mobile: 1 column, Desktop: 2-3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {staticPrograms.map((product) => (
                  <ProgramCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}

          {!loading && (
            <>
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

              {/* Benefits Section - Moved Below Products */}
              <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="font-bebas text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-4 px-4 leading-tight">
                WHY CHOOSE <span className="text-bbd-orange">OUR PROGRAMS</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-bbd-ivory mb-1 sm:mb-2">Instant PDF Download</h3>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-bbd-ivory mb-1 sm:mb-2">One-Time Purchase</h3>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-bbd-ivory mb-1 sm:mb-2">Proven Results</h3>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-bbd-ivory mb-1 sm:mb-2">Expert Support</h3>
              </div>
            </div>
            </div>
            </>
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

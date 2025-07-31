import Link from 'next/link';

export default function ProgramsCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-bbd-charcoal via-bbd-black to-bbd-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EE7F0E' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="font-bebas text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bbd-ivory mb-4 sm:mb-6 px-4 leading-tight">
            <span className="block">READY TO START YOUR</span>
            <span className="block text-bbd-orange mt-2">TRANSFORMATION?</span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-bbd-ivory/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of people who have transformed their bodies and lives with Built By Deal programs. 
            Your journey to the best version of yourself starts with a single decision.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-bbd-ivory mb-2 leading-tight">Instant Access</h3>
              <p className="text-bbd-ivory/70 text-sm sm:text-base leading-relaxed">Download immediately after purchase and start your transformation today</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-bbd-ivory mb-2 leading-tight">Proven Results</h3>
              <p className="text-bbd-ivory/70 text-sm sm:text-base leading-relaxed">Science-backed programs with thousands of success stories</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-bbd-ivory mb-2 leading-tight">Expert Support</h3>
              <p className="text-bbd-ivory/70 text-sm sm:text-base leading-relaxed">Get guidance from Zach Deal and our expert coaching team</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <Link
              href="#static-programs"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-bbd-orange text-bbd-black font-bold text-base sm:text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              SHOP PROGRAMS NOW
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
              </svg>
            </Link>
          </div>

          {/* Guarantee */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-bbd-black/50 border border-bbd-gold/30 rounded-full mx-4">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-bbd-gold font-medium text-sm sm:text-base">30-Day Money-Back Guarantee</span>
          </div>

          {/* Social Proof */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-bbd-ivory/10 px-4">
            <p className="text-bbd-ivory/60 mb-4 text-sm sm:text-base">Trusted by fitness enthusiasts worldwide</p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-bbd-ivory/40">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-bbd-orange">10,000+</div>
                <div className="text-xs sm:text-sm leading-tight">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-bbd-gold">4.9/5</div>
                <div className="text-xs sm:text-sm leading-tight">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-bbd-orange">50+</div>
                <div className="text-xs sm:text-sm leading-tight">Programs Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

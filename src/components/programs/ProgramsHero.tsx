"use client";


export default function ProgramsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/programsHero.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bbd-black/80 via-bbd-black/70 to-bbd-charcoal/60" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE7F0E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="font-bebas text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-bbd-ivory mb-4 sm:mb-6 leading-none drop-shadow-2xl px-2">
          <span className="block">TRANSFORMATION</span>
          <span className="block text-bbd-orange mt-2">PROGRAMS</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-bbd-ivory/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2">
          Unlock your potential with <span className="text-bbd-gold font-semibold">Built By Deal&apos;s</span> proven digital programs. 
          From beginner-friendly routines to advanced transformation protocols, find the perfect program to achieve your goals.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-bbd-orange mb-1 sm:mb-2 drop-shadow-lg">50+</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-bbd-gold mb-1 sm:mb-2 drop-shadow-lg">10K+</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-bbd-orange mb-1 sm:mb-2 drop-shadow-lg">4.9★</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Average Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={() => document.getElementById('static-programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-bbd-ivory text-bbd-ivory font-bold text-sm sm:text-base lg:text-lg rounded-md hover:bg-bbd-ivory hover:text-bbd-black transition-all duration-200 transform hover:scale-105 drop-shadow-lg w-full sm:w-auto"
          >
            DOWNLOAD PROGRAMS
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-bbd-ivory/60 text-sm sm:text-base px-4">
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Instant Download</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">30-Day Guarantee</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Expert Support</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

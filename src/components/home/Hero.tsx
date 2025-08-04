'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zackBanner.png"
          alt="Zach Deal - Built By Deal"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline - Simplified for mobile */}
        <p className="text-bbd-orange font-semibold text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 tracking-wider uppercase max-w-sm sm:max-w-none mx-auto">
          <span className="hidden sm:inline">Personalized Fitness & Nutrition</span>
          <span className="sm:hidden">Zach Deal Training</span>
        </p>

        {/* Main Heading - Optimized for mobile readability */}
        <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-bbd-ivory mb-4 sm:mb-6 leading-tight max-w-sm sm:max-w-none mx-auto">
          <span className="block sm:hidden">
            {/* Mobile: Single line, more compact */}
            <span className="block text-bbd-orange mb-1">TRANSFORM</span>
            <span className="block">YOUR BODY</span>
          </span>
          <span className="hidden sm:block">
            {/* Desktop: Original layout */}
            TRANSFORM YOUR BODY
            <br />
            <span className="text-bbd-orange">ELEVATE YOUR LIFE</span>
          </span>
        </h1>

        {/* Subheading - Significantly reduced for mobile */}
        <p className="text-sm sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-sm sm:max-w-3xl mx-auto leading-relaxed">
          <span className="block sm:hidden">
            {/* Mobile: Ultra-concise with correct branding */}
            Zach Deal programs & Victory Supps
          </span>
          <span className="hidden sm:block">
            {/* Desktop: More detailed with correct branding */}
            Join thousands who have transformed their physique with<br />
            Zach Deal&apos;s proven programs and Victory Supps supplements
          </span>
        </p>

        {/* CTA Buttons - Prioritized for mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 max-w-sm sm:max-w-none mx-auto px-4 sm:px-0">
          <Link
            href="/programs"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-bbd-orange text-bbd-black font-bold text-base sm:text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105"
          >
            <span className="sm:hidden">GET STARTED →</span>
            <span className="hidden sm:inline">SHOP PROGRAMS →</span>
          </Link>
          <Link
            href="/supplements"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-bbd-ivory text-bbd-ivory font-bold text-base sm:text-lg rounded-md hover:bg-bbd-ivory hover:text-bbd-black transition-all duration-200"
          >
            <span className="sm:hidden">VIEW SUPPLEMENTS</span>
            <span className="hidden sm:inline">VIEW SUPPLEMENTS</span>
          </Link>
        </div>

        {/* Trust Badges - Hidden on small mobile, simplified on larger screens */}
        <div className="hidden xs:flex flex-wrap justify-center gap-4 sm:gap-8 text-bbd-ivory text-sm sm:text-base">
          <div className="flex items-center gap-1 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">4.9/5</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-semibold">10K+ Clients</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 hidden sm:flex">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold">100% Secure</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-bbd-orange transition-colors"
        aria-label="Scroll to next section"
      >
        <svg className="w-6 h-6 text-bbd-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}

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
    <section className="relative min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden">
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
        {/* Tagline - Generic messaging */}
        <p className="text-bbd-orange font-semibold text-xs sm:text-lg md:text-xl mb-2 sm:mb-4 tracking-wider uppercase max-w-sm sm:max-w-none mx-auto">
          <span className="hidden sm:inline">Personalized Fitness & Nutrition</span>
          <span className="sm:hidden">Elite Training & Supplements</span>
        </p>

        {/* Main Heading - Full width to match CTA buttons */}
        <h1 className="font-display text-7xl xs:text-8xl sm:text-6xl md:text-7xl lg:text-8xl text-bbd-ivory mb-3 sm:mb-6 leading-tight max-w-sm sm:max-w-none mx-auto px-4 sm:px-0">
          <span className="block sm:hidden">
            {/* Mobile: Full width, larger text */}
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

        {/* Subheading - Generic messaging */}
        <p className="text-sm sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-sm sm:max-w-3xl mx-auto leading-relaxed">
          <span className="block sm:hidden">
            {/* Mobile: Generic, concise */}
            Proven programs & premium supplements
          </span>
          <span className="hidden sm:block">
            {/* Desktop: More detailed but generic */}
            Join thousands who have transformed their physique with<br />
            our proven training programs and premium supplements
          </span>
        </p>

        {/* CTA Buttons - Prioritized for mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-12 max-w-sm sm:max-w-none mx-auto px-4 sm:px-0">
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
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-bbd-orange transition-colors"
        aria-label="Scroll to next section"
      >
        <svg className="w-6 h-6 text-bbd-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}

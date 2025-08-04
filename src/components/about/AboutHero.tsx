'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zackBanner.png"
          alt="Zach Deal - The Viking Warrior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bbd-black/80 via-bbd-black/70 to-bbd-charcoal/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE7F0E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
        {/* Fitness Coach Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 sm:px-6 bg-bbd-orange/10 border border-bbd-orange/30 rounded-full mb-4 sm:mb-6">
          <span className="text-bbd-orange font-semibold text-xs sm:text-sm uppercase tracking-wider">
            💪 Certified Fitness Coach
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-bbd-ivory mb-4 sm:mb-6 leading-tight drop-shadow-2xl px-2">
          <span className="block">MEET ZACH DEAL</span>
          <span className="block text-bbd-orange mt-2">YOUR TRANSFORMATION GUIDE</span>
        </h1>

        {/* Subheading - Optimized for mobile */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2">
          <span className="block sm:hidden">
            {/* Mobile: Ultra-concise */}
            <span className="text-bbd-gold font-semibold">15+ years</span> helping <span className="text-bbd-gold font-semibold">5,000+ people</span> transform
          </span>
          <span className="hidden sm:block">
            {/* Desktop: Full description */}
            Certified personal trainer and nutritionist with <span className="text-bbd-gold font-semibold">15+ years of experience</span> helping over <span className="text-bbd-gold font-semibold">5,000 people</span> transform their bodies and elevate their lives.
          </span>
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-bbd-orange text-bbd-black font-bold text-sm sm:text-base lg:text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 drop-shadow-lg w-full sm:w-auto"
          >
            START MY JOURNEY
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-bbd-ivory text-bbd-ivory font-bold text-sm sm:text-base lg:text-lg rounded-md hover:bg-bbd-ivory hover:text-bbd-black transition-all duration-200 transform hover:scale-105 drop-shadow-lg w-full sm:w-auto"
          >
            LEARN MY STORY
          </button>
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
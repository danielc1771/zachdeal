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
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-bbd-ivory mb-4 sm:mb-6 leading-tight drop-shadow-2xl px-2">
          <span className="block">MEET ZACH DEAL</span>
          <span className="block text-bbd-orange mt-2">YOUR TRANSFORMATION GUIDE</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2">
          Certified personal trainer and nutritionist with <span className="text-bbd-gold font-semibold">15+ years of experience</span> helping over <span className="text-bbd-gold font-semibold">5,000 people</span> transform their bodies and elevate their lives.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-display text-bbd-orange mb-1 sm:mb-2 drop-shadow-lg">15+</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-display text-bbd-gold mb-1 sm:mb-2 drop-shadow-lg">5,000+</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-display text-bbd-orange mb-1 sm:mb-2 drop-shadow-lg">128+</div>
            <div className="text-xs sm:text-sm md:text-base text-bbd-ivory/80 leading-tight">Active Members</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Link
            href="/plans"
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
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Credentials */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-bbd-ivory/60 text-sm sm:text-base px-4">
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Certified Personal Trainer</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Certified Nutritionist</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bbd-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Science-Backed Methods</span>
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
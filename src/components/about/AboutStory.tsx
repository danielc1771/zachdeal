'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutStory() {
  return (
    <section id="story" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-banner-2.jpg"
          alt="Zach Deal's Story Background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-4 px-4 leading-tight">
            GET TO KNOW <span className="text-bbd-orange">MY STORY</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            From martial arts instructor to international fitness authority
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="bg-bbd-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-gray-700">
              <h3 className="font-display text-2xl sm:text-3xl text-bbd-orange mb-4">ZACH DEAL</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                If you don&apos;t know who I am, my name is <strong className="text-bbd-gold">Zach Deal</strong>. For the past 10 years, I&apos;ve helped over <strong className="text-bbd-gold">5,000 people</strong> transform their bodies. I began with my first personal training client in my hometown of North Carolina.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                From there, I moved to Miami and expanded my training business – to not only in-person training sessions – but also, helping thousands with my online training spanning all over the globe.
              </p>
            </div>

            <div className="bg-bbd-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-gray-700">
              <h4 className="font-display text-xl sm:text-2xl text-bbd-ivory mb-4">MY CREDENTIALS</h4>
              <p className="text-gray-200 text-lg leading-relaxed">
                I am a <strong className="text-bbd-orange">certified personal trainer</strong> as well as a <strong className="text-bbd-orange">certified nutritionist</strong>. I have over <strong className="text-bbd-gold">15 years experience</strong> in guiding others towards achieving their ambitions relating to health, fitness, and longevity.
              </p>
            </div>
          </div>

          {/* Right Column - Journey Timeline */}
          <div className="space-y-6">
            <div className="bg-bbd-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-gray-700">
              <h4 className="font-display text-xl sm:text-2xl text-bbd-ivory mb-6">MY JOURNEY</h4>
              
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-bbd-orange"></div>
                
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-bbd-orange rounded-full"></div>
                  <div className="text-bbd-gold font-semibold">Teenage Years</div>
                  <p className="text-gray-300">Started as a martial arts instructor, developing my passion for helping others achieve physical excellence.</p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-bbd-orange rounded-full"></div>
                  <div className="text-bbd-gold font-semibold">North Carolina</div>
                  <p className="text-gray-300">Trained my first personal training client, discovering my calling for transformation coaching.</p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-bbd-orange rounded-full"></div>
                  <div className="text-bbd-gold font-semibold">Miami Expansion</div>
                  <p className="text-gray-300">Moved to Miami and expanded from in-person training to building a global online community.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-bbd-gold rounded-full"></div>
                  <div className="text-bbd-gold font-semibold">Today</div>
                  <p className="text-gray-300">Leading an international fitness community with science-backed programs that deliver real results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-bbd-black/60 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-lg border border-gray-700">
          <h3 className="font-display text-2xl sm:text-3xl text-bbd-ivory mb-6 px-2">MY MISSION</h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-6 px-4">
            I can&apos;t put into words how much satisfaction I get seeing science-backed programs that I&apos;ve formulated, generate such successful and astonishing transformations. From the first video message I received from a satisfied client, in tears, telling me how she has reached her goal weight, to the most recent, a young man telling me he&apos;d gained 10 lbs on one of my programs – <strong className="text-bbd-orange">IT NEVER GETS OLD.</strong>
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-bbd-gold font-semibold mb-8 px-4">
            &ldquo;All of my formulations are backed by years of research, experience, and scientific evidence. If you heed my advice, and follow my instructions, you WILL reach your desired outcome.&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-6 py-3 bg-bbd-orange text-bbd-black font-bold text-base rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              GET MY PROGRAMS
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/supplements"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-bbd-ivory text-bbd-ivory font-bold text-base rounded-md hover:bg-bbd-ivory hover:text-bbd-black transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              SHOP VICTORY SUPPS
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
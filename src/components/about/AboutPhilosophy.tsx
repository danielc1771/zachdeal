'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPhilosophy() {
  const principles = [
    {
      title: "SCIENCE-BACKED APPROACH",
      description: "Every program is built on proven research, evidence-based methodologies, and years of real-world testing. No guesswork, just results."
    },
    {
      title: "PERSONALIZED TRANSFORMATION",
      description: "Your journey is unique. My programs adapt to your fitness level, goals, and lifestyle to ensure optimal progression for every individual."
    },
    {
      title: "SUSTAINABLE RESULTS",
      description: "Quick fixes don't last. I focus on building habits and systems that create lasting transformation you can maintain for life."
    },
    {
      title: "COMPLETE SYSTEM",
      description: "Training is just one piece. My approach integrates workout programming, nutrition guidance, and mindset coaching for total transformation."
    }
  ];

  const guarantees = [
    "Cut to single digits body fat",
    "Achieve incredible strength",
    "Improve athletic performance", 
    "Reveal attractive Viking body",
    "Master your body and weight",
    "Feel the greatest you've ever felt"
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-banner.jpg"
          alt="Philosophy Background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-bbd-ivory mb-4">
            MY <span className="text-bbd-orange">PHILOSOPHY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over the years, I&apos;ve worked on perfecting rock-solid formulas to inspire drastic fat loss, muscle growth, and an overall increase in athletic performance.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-bbd-black/70 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300"
            >
              <h3 className="font-display text-2xl text-bbd-orange mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* What You'll Experience */}
        <div className="bg-bbd-black/70 backdrop-blur-sm p-12 rounded-lg border border-gray-700 mb-16">
          <h3 className="font-display text-3xl text-center text-bbd-ivory mb-8">
            WHAT YOU&apos;LL <span className="text-bbd-orange">EXPERIENCE</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-bbd-orange rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-bbd-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-bbd-ivory font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Training Programs Showcase */}
        <div className="text-center">
          <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl text-bbd-ivory mb-4 sm:mb-6 px-4 leading-tight">
            JOIN <span className="text-bbd-orange">BUILT BY DEAL</span> TRAINING PROGRAMS
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
            Whether you choose our downloadable programs or personalized coaching plans, your transformation journey starts here. Let&apos;s begin building your best physique.
          </p>

          {/* Program Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-bbd-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔥</div>
              <h4 className="font-display text-base sm:text-lg text-bbd-orange mb-2 leading-tight">CUT FAT</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Torch stubborn body fat with proven cutting protocols</p>
            </div>
            
            <div className="bg-bbd-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💪</div>
              <h4 className="font-display text-base sm:text-lg text-bbd-orange mb-2 leading-tight">BUILD MUSCLE</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Gain lean, aesthetic muscle with targeted hypertrophy training</p>
            </div>
            
            <div className="bg-bbd-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h4 className="font-display text-base sm:text-lg text-bbd-orange mb-2 leading-tight">INCREASE STRENGTH</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Build incredible strength that translates to better performance</p>
            </div>
          </div>

          {/* Final Quote */}
          <div className="bg-gradient-to-r from-bbd-orange/20 to-bbd-gold/20 p-4 sm:p-6 lg:p-8 rounded-lg border border-bbd-orange/30">
            <p className="text-sm sm:text-base lg:text-lg text-bbd-ivory italic mb-3 sm:mb-4 px-2 leading-relaxed">
  &ldquo;All of my formulations are backed by years of research, experience, and scientific evidence. If you heed my advice, and follow my instructions, you <strong className="text-bbd-orange">WILL</strong> reach your desired outcome.&rdquo;
            </p>
            <p className="text-bbd-gold font-semibold text-sm sm:text-base mb-6 sm:mb-8">
              - Zach Deal, Built By Deal
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-bbd-gold text-bbd-black font-bold text-base sm:text-lg rounded-md hover:bg-bbd-orange transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                DOWNLOAD PROGRAMS
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
              <Link
                href="/supplements"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-bbd-orange text-bbd-orange font-bold text-base sm:text-lg rounded-md hover:bg-bbd-orange hover:text-bbd-black transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                ENHANCE WITH SUPPS
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-4.90.602L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
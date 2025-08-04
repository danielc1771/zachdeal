'use client';

import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bbd-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE7F0E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 sm:px-6 bg-bbd-orange/10 border border-bbd-orange/30 rounded-full mb-4 sm:mb-6">
            <span className="text-bbd-orange font-semibold text-xs sm:text-sm uppercase tracking-wider">
              💪 Ready for Transformation?
            </span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bbd-ivory mb-4 sm:mb-6 leading-tight px-4">
            <span className="block">ARE YOU READY TO</span>
            <span className="block text-bbd-orange mt-2">TRANSFORM YOUR BODY?</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands who have already started their journey to the ultimate physique. 
            Your transformation begins with a single decision.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-bbd-orange text-bbd-black font-bold text-base sm:text-lg lg:text-xl rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              GET PROGRAMS
              <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-bbd-ivory text-bbd-ivory font-bold text-base sm:text-lg lg:text-xl rounded-md hover:bg-bbd-ivory hover:text-bbd-black transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              START MY JOURNEY
              <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Program Preview */}
        <div className="bg-gradient-to-r from-bbd-charcoal to-bbd-black p-6 sm:p-8 lg:p-12 rounded-lg border border-gray-700 mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl text-bbd-ivory mb-3 sm:mb-4 px-2 leading-tight">
              GET MY MOST EFFECTIVE <span className="text-bbd-orange">PROGRAMS</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-4">
              Download proven programs or get personalized coaching plans
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-display text-lg sm:text-xl text-bbd-ivory mb-2 leading-tight">DOWNLOADABLE</h4>
              <p className="text-gray-400 text-sm sm:text-base">Instant access programs</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display text-lg sm:text-xl text-bbd-ivory mb-2 leading-tight">PERSONALIZED</h4>
              <p className="text-gray-400 text-sm sm:text-base">Custom coaching plans</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bbd-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-display text-lg sm:text-xl text-bbd-ivory mb-2 leading-tight">SUPPLEMENTS</h4>
              <p className="text-gray-400 text-sm sm:text-base">Premium nutrition support</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-6 py-3 bg-bbd-gold text-bbd-black font-bold text-base sm:text-lg rounded-md hover:bg-bbd-orange transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                VIEW PROGRAMS
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/supplements"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-bbd-gold text-bbd-gold font-bold text-base sm:text-lg rounded-md hover:bg-bbd-gold hover:text-bbd-black transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                SHOP SUPPLEMENTS
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center px-4">
          <h4 className="font-display text-xl sm:text-2xl text-bbd-ivory mb-4 sm:mb-6">
            FOLLOW <span className="text-bbd-orange">ZACH DEAL</span>
          </h4>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-bbd-orange/10 hover:bg-bbd-orange hover:text-bbd-black text-bbd-orange rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-bbd-orange/10 hover:bg-bbd-orange hover:text-bbd-black text-bbd-orange rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.384-.948-.948-1.384-2.099-1.384-3.396s.435-2.448 1.384-3.396c.948-.948 2.099-1.384 3.396-1.384s2.448.435 3.396 1.384c.948.948 1.384 2.099 1.384 3.396s-.435 2.448-1.384 3.396c-.948.948-2.099 1.384-3.396 1.384zm7.072 0c-1.297 0-2.448-.435-3.396-1.384-.948-.948-1.384-2.099-1.384-3.396s.435-2.448 1.384-3.396c.948-.948 2.099-1.384 3.396-1.384s2.448.435 3.396 1.384c.948.948 1.384 2.099 1.384 3.396s-.435 2.448-1.384 3.396c-.948.948-2.099 1.384-3.396 1.384z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-bbd-orange/10 hover:bg-bbd-orange hover:text-bbd-black text-bbd-orange rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
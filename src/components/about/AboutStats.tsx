'use client';

export default function AboutStats() {
  const stats = [
    {
      number: "15+",
      label: "Years Of Experience",
      description: "Perfecting transformation methods"
    },
    {
      number: "5,000+",
      label: "People I've Helped Transform",
      description: "Real results from real people"
    },
    {
      number: "128+",
      label: "Active People Doing Programs",
      description: "Currently crushing their goals"
    },
    {
      number: "4.9★",
      label: "Average Client Rating",
      description: "Proven satisfaction guarantee"
    }
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "CUT FAT, GAIN MUSCLE",
      description: "Proven methodologies to transform your physique in 12 weeks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "INCREASE STRENGTH",
      description: "Build incredible strength and athletic performance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "MASTER YOUR BODY",
      description: "Achieve complete control over your weight and physique"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "FEEL YOUR GREATEST",
      description: "Experience the confidence that comes with peak physical condition"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bbd-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-4 px-4 leading-tight">
            ARE YOU READY FOR <span className="text-bbd-orange">RESULTS LIKE THESE?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            The numbers speak for themselves - proven results from a proven system
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-bbd-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300 h-full">
                <div className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-bbd-orange mb-2 group-hover:text-bbd-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <h3 className="text-bbd-ivory font-semibold mb-2 text-xs sm:text-sm lg:text-base uppercase tracking-wider leading-tight">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-tight">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Achieve */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl text-center text-bbd-ivory mb-8 sm:mb-12 px-4 leading-tight">
            WHAT YOU&apos;LL <span className="text-bbd-orange">ACHIEVE</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-bbd-black/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-bbd-orange/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-bbd-orange/10 text-bbd-orange rounded-full flex items-center justify-center group-hover:bg-bbd-orange group-hover:text-bbd-black transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-lg sm:text-xl text-bbd-ivory mb-2 leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Quote */}
        <div className="text-center bg-gradient-to-r from-bbd-orange/10 to-bbd-gold/10 p-6 sm:p-8 lg:p-12 rounded-lg border border-bbd-orange/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-4xl sm:text-5xl lg:text-6xl text-bbd-orange mb-4">💪</div>
            <h3 className="font-display text-xl xs:text-2xl sm:text-3xl text-bbd-ivory mb-4 sm:mb-6 px-2 leading-tight">
              READY TO START YOUR <span className="text-bbd-orange">TRANSFORMATION</span> JOURNEY?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 px-2">
              Transform your body, elevate your life. Join thousands who have already experienced the life-changing results of science-backed training and nutrition.
            </p>
            <p className="font-display text-lg sm:text-xl lg:text-2xl text-bbd-gold mb-4 px-2">
              YOUR BEST PHYSIQUE AWAITS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
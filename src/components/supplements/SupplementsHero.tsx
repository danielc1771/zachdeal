export default function SupplementsHero() {
  return (
    <section className="relative bg-bbd-black pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-bebas text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bbd-ivory mb-3 sm:mb-4 leading-tight">
            PREMIUM <span className="text-bbd-orange">SUPPLEMENTS</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-bbd-ivory/80 max-w-2xl mx-auto leading-relaxed">
            High-quality supplements designed to maximize your performance and results
          </p>
        </div>
      </div>
    </section>
  );
}

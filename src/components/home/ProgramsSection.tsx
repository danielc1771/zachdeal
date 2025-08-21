import Link from 'next/link';
import { getCollectionProducts, type Product } from '@/lib/shopify';
import ProductCard from '@/components/ui/ProductCard';

export default async function ProgramsSection() {
  // Fetch products from the 'programs' collection
  const products: Product[] = await getCollectionProducts('programs', 6);

  return (
    <section className="py-20 bg-bbd-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-bbd-ivory mb-4">
            INTRODUCING <span className="text-bbd-orange">MASSTHETICS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Zach Deal&apos;s proven transformation system for building muscle and losing fat
          </p>
        </div>

        {/* Featured Program Layout */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {(() => {
              const product = products[0]; // Featured program

              return (
                <>
                  {/* Featured Program Card */}
                  <div className="order-2 lg:order-1">
                    <ProductCard
                      product={product}
                      basePath="programs"
                      showBadge={true}
                      badgeText="DIGITAL PROGRAM"
                      badgeColor="orange"
                      className="lg:w-full rounded-2xl"
                    />
                  </div>

                  {/* Program Highlights - Hidden on mobile */}
                  <div className="order-1 lg:order-2 space-y-8 hidden lg:block">
                    <div className="mb-8">
                      <p className="text-xl text-bbd-ivory/70">
                        Get access to Zach Deal&apos;s proven transformation system that has helped hundreds achieve their fitness goals.
                      </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: "Proven Results",
                          description: "500+ successful transformations"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: "12-Week Program",
                          description: "Complete step-by-step guidance"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-5 3v11a2 2 0 002 2h6a2 2 0 002-2V7H7z" />
                            </svg>
                          ),
                          title: "Nutrition Guide",
                          description: "Meal plans & macro tracking"
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          title: "24/7 Support",
                          description: "Access to community & coaching"
                        }
                      ].map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-bbd-charcoal/30 rounded-lg border border-gray-800/50">
                          <div className="flex-shrink-0 w-12 h-12 bg-bbd-orange/20 rounded-lg flex items-center justify-center text-bbd-orange">
                            {highlight.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-bbd-ivory text-lg mb-1">
                              {highlight.title}
                            </h4>
                            <p className="text-bbd-ivory/60 text-sm">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        href={`/programs/${product.handle}`}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-bbd-orange to-bbd-gold text-bbd-black font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-bbd-orange/25 transition-all duration-300 transform hover:scale-105"
                      >
                        START YOUR TRANSFORMATION
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        ) : (
          <div className="text-center text-bbd-ivory/60">
            <p>No programs available at the moment.</p>
          </div>
        )}

      </div>
    </section>
  );
}

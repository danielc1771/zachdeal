'use client';

import { useState, useEffect } from 'react';
import { getCollectionProducts, type Product } from '@/lib/shopify';
import SupplementsHero from '@/components/supplements/SupplementsHero';
import SupplementCard from '@/components/supplements/SupplementCard';
import SupplementsBenefits from '@/components/supplements/SupplementsBenefits';
import SupplementsCTA from '@/components/supplements/SupplementsCTA';

export default function SupplementsPage() {
  const [supplements, setSupplements] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSupplements() {
      try {
        const fetchedSupplements = await getCollectionProducts('supplements', 50);
        setSupplements(fetchedSupplements);
      } catch (error) {
        console.error('Error fetching supplements:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchSupplements();
  }, []);

  return (
    <div className="min-h-screen bg-bbd-black py-4">
      {/* Compact Hero Section */}
      <section id="hero">
        <SupplementsHero />
      </section>

      {/* Products Section - Immediately Visible */}
      <section id="supplements" className="py-6 sm:py-8 lg:py-12 bg-bbd-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-bbd-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-bbd-ivory">Loading supplements...</p>
            </div>
          ) : (
            <>
              {/* Mobile: 1 column, Desktop: 3-5 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
                {supplements.map((product) => (
                  <SupplementCard 
                    key={product.id} 
                    product={product} 
                  />
                ))}
              </div>

              {/* Empty State */}
              {supplements.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-bbd-ivory/60 text-base sm:text-lg">
                    Supplements coming soon! Check back for our premium supplement collection.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Benefits Section - Moved Below Products */}
      <section id="benefits">
        <SupplementsBenefits />
      </section>

      {/* Bottom CTA Section */}
      <section id="cta">
        <SupplementsCTA />
      </section>
    </div>
  );
}

import { getCollectionProducts, type Product } from '@/lib/shopify';
import SupplementsHero from '@/components/supplements/SupplementsHero';
import SupplementCard from '@/components/supplements/SupplementCard';
import SupplementsBenefits from '@/components/supplements/SupplementsBenefits';
import SupplementsCTA from '@/components/supplements/SupplementsCTA';

export default async function SupplementsPage() {
  // Fetch supplements from Shopify
  const supplements: Product[] = await getCollectionProducts('supplements', 50);

  return (
    <div className="min-h-screen bg-bbd-black">
      {/* Compact Hero Section */}
      <section id="hero">
        <SupplementsHero />
      </section>

      {/* Products Section - Immediately Visible */}
      <section id="supplements" className="py-6 sm:py-8 lg:py-12 bg-bbd-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile: 2 columns, Desktop: 3-5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
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

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Product } from '@/lib/shopify';

interface SupplementCardProps {
  product: Product;
  featured?: boolean;
}

export default function SupplementCard({ product, featured = false }: SupplementCardProps) {
  const productImage = product.featuredImage || product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  
  // Extract supplement type from title or description
  const getSupplementType = (title: string, description: string) => {
    const text = (title + ' ' + description).toLowerCase();
    if (text.includes('creatine')) return 'Creatine';
    if (text.includes('protein') || text.includes('whey')) return 'Protein';
    if (text.includes('pre-workout') || text.includes('energy')) return 'Pre-Workout';
    if (text.includes('vitamin') || text.includes('multivitamin')) return 'Vitamins';
    if (text.includes('recovery') || text.includes('bcaa')) return 'Recovery';
    if (text.includes('fat burn') || text.includes('thermogenic')) return 'Fat Burner';
    return 'Supplement';
  };
  
  // Extract serving info from description
  const getServingInfo = (description: string) => {
    const text = description.toLowerCase();
    if (text.includes('30 serving') || text.includes('30 scoop')) return '30 Servings';
    if (text.includes('60 serving') || text.includes('60 scoop')) return '60 Servings';
    if (text.includes('90 serving') || text.includes('90 scoop')) return '90 Servings';
    if (text.includes('120 serving') || text.includes('120 scoop')) return '120 Servings';
    return '30 Servings';
  };

  // Rating logic - show 5 stars for 4+ rating
  const rating = 4.8; // This could come from product data
  const displayStars = rating >= 4.0 ? 5 : Math.floor(rating);

  const supplementType = getSupplementType(product.title, product.description);
  const servingInfo = getServingInfo(product.description);

  return (
    <div className="group relative bg-gradient-to-br from-bbd-charcoal/20 to-bbd-black/40 rounded-xl overflow-hidden border border-bbd-charcoal/30 hover:border-bbd-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-bbd-orange/10 transform hover:scale-[1.02] h-full flex flex-col">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-10 bg-bbd-orange text-bbd-black text-xs font-bold px-2 py-1 rounded-md">
          FEATURED
        </div>
      )}

      {/* Product Image */}
      <Link href={`/supplements/${product.handle}`} className="block relative h-56 sm:h-64 lg:h-72 overflow-hidden flex-shrink-0">
        {productImage ? (
          <Image
            src={productImage.url}
            alt={productImage.altText || product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bbd-charcoal to-bbd-black flex items-center justify-center">
            <svg className="w-16 h-16 text-bbd-orange/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bbd-black/80 via-bbd-black/20 to-transparent"></div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Product Title */}
        <h3 className="font-bold text-bbd-ivory text-lg sm:text-xl mb-2 group-hover:text-bbd-orange transition-colors">
          {product.title}
        </h3>



        {/* Benefits/Features */}
        <div className="mb-4 flex-grow">
          <div className="flex flex-wrap gap-1">
            {supplementType === 'Protein' && (
              <>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">25g Protein</span>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">Fast Absorbing</span>
              </>
            )}
            {supplementType === 'Pre-Workout' && (
              <>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">Energy Boost</span>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">Focus</span>
              </>
            )}
            {supplementType === 'Creatine' && (
              <>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">5g Creatine</span>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">Strength</span>
              </>
            )}
            {supplementType === 'Vitamins' && (
              <>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">Daily Support</span>
                <span className="bg-bbd-gold/20 text-bbd-gold text-xs px-2 py-1 rounded">Essential</span>
              </>
            )}
            {supplementType === 'Recovery' && (
              <>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">BCAA</span>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">Recovery</span>
              </>
            )}
            {supplementType === 'Fat Burner' && (
              <>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">Thermogenic</span>
                <span className="bg-bbd-orange/20 text-bbd-orange text-xs px-2 py-1 rounded">Fat Loss</span>
              </>
            )}
          </div>
        </div>

        {/* Price and Rating - Positioned at bottom */}
        <div className="mt-auto">
          <div className="mb-3 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start">
            <div>
              <span className="text-lg sm:text-xl font-bold text-bbd-orange">
                {formatPrice(price.amount, price.currencyCode)}
              </span>
              <span className="text-xs text-bbd-ivory/60 ml-2">
                per {servingInfo.toLowerCase()}
              </span>
            </div>
            
            {/* Rating - To the right on mobile, below on desktop */}
            <div className="flex items-center sm:mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 h-3 fill-current ${
                  i < displayStars ? 'text-bbd-gold' : 'text-bbd-ivory/20'
                }`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-bbd-ivory/60 ml-1">({rating.toFixed(1)})</span>
            </div>
          </div>

          {/* Buy Now Button - Always at bottom */}
          <Link
            href={`/supplements/${product.handle}`}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 bg-bbd-orange text-bbd-black font-bold text-sm rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105"
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

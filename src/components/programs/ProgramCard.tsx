import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Product } from '@/lib/shopify';

interface ProgramCardProps {
  product: Product;
  featured?: boolean;
  priority?: boolean;
}

export default function ProgramCard({ product, featured = false, priority = false }: ProgramCardProps) {
  const productImage = product.featuredImage || product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  
  // Extract duration from title or description
  const getDuration = (title: string, description: string) => {
    const text = (title + ' ' + description).toLowerCase();
    if (text.includes('4 week') || text.includes('4-week')) return '4 Weeks';
    if (text.includes('6 week') || text.includes('6-week')) return '6 Weeks';
    if (text.includes('8 week') || text.includes('8-week')) return '8 Weeks';
    if (text.includes('12 week') || text.includes('12-week')) return '12 Weeks';
    if (text.includes('16 week') || text.includes('16-week')) return '16 Weeks';
    return '12 Weeks';
  };

  const duration = getDuration(product.title, product.description);

  // Rating logic - show 5 stars for 4+ rating
  const rating = 4.7; // This could come from product data
  const displayStars = rating >= 4.0 ? 5 : Math.floor(rating);

  return (
    <div className={`
      group relative bg-bbd-charcoal/50 rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105
      ${featured 
        ? 'border-bbd-orange shadow-2xl shadow-bbd-orange/20' 
        : 'border-bbd-ivory/10 hover:border-bbd-orange/50'
      }
      ${priority ? 'lg:scale-110 lg:z-10' : ''}
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-bbd-orange to-bbd-gold text-bbd-black px-3 py-1 rounded-full text-sm font-bold">
          FEATURED
        </div>
      )}

      {/* Product Image */}
      <Link href={`/programs/${product.handle}`} className="block relative h-72 overflow-hidden">
        {productImage ? (
          <Image
            src={productImage.url}
            alt={productImage.altText || product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bbd-charcoal to-bbd-black flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-bbd-orange/50 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-bbd-ivory/50 text-sm">Program Image</span>
            </div>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-bbd-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-bbd-ivory font-bold text-lg">VIEW PROGRAM</span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bebas text-2xl text-bbd-ivory mb-2 line-clamp-2 group-hover:text-bbd-orange transition-colors">
          {product.title}
        </h3>

        {/* Program Details */}
        <div className="flex items-center gap-4 mb-4 text-xs text-bbd-ivory/60">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Digital Download
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 fill-current ${
              i < displayStars ? 'text-bbd-gold' : 'text-bbd-ivory/20'
            }`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-bbd-ivory/60 ml-2">({rating.toFixed(1)})</span>
        </div>

        {/* Price - Positioned directly under product info */}
        <div className="mb-3">
          <span className="text-xl font-bold text-bbd-orange">
            {formatPrice(price.amount, price.currencyCode)}
          </span>
          {featured && (
            <div className="text-xs text-bbd-gold mt-1">
              ⭐ Most Popular
            </div>
          )}
        </div>

        {/* Buy Now Button - Prominent placement */}
        <Link
          href={`/programs/${product.handle}`}
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-bbd-orange text-bbd-black font-bold text-sm rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 mb-3"
        >
          BUY NOW
        </Link>

        {/* Trust Indicators - Simplified */}
        <div className="flex items-center justify-center gap-4 text-xs text-bbd-ivory/60">
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Instant Access
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            30-Day Guarantee
          </span>
        </div>
      </div>
    </div>
  );
}

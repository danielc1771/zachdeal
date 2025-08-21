import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Product } from '@/lib/shopify';

interface ProductCardProps {
  product: Product;
  basePath: string; // 'programs' or 'supplements'
  showBadge?: boolean;
  badgeText?: string;
  badgeColor?: 'orange' | 'red';
  className?: string;
}

export default function ProductCard({ 
  product, 
  basePath, 
  showBadge = false, 
  badgeText, 
  badgeColor = 'orange',
  className = ""
}: ProductCardProps) {
  const productImage = product.featuredImage || product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const isOutOfStock = !product.availableForSale;

  return (
    <div className={`bg-bbd-charcoal/50 rounded-lg overflow-hidden border border-gray-800 hover:border-bbd-orange transition-all duration-300 h-full flex flex-col ${className}`}>
      {/* Product Image */}
      <Link href={`/${basePath}/${product.handle}`} className="block relative h-72 overflow-hidden flex-shrink-0">
        {productImage ? (
          <Image
            src={productImage.url}
            alt={productImage.altText || product.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600">No image</span>
          </div>
        )}
        
        {/* Dynamic Badge */}
        {showBadge && badgeText && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
            badgeColor === 'red' 
              ? 'bg-red-600 text-white' 
              : 'bg-bbd-orange text-bbd-black'
          }`}>
            {badgeText}
          </div>
        )}

        {/* Out of Stock Badge - Always show if out of stock */}
        {isOutOfStock && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            SOLD OUT
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/${basePath}/${product.handle}`}>
          <h3 className="font-display text-2xl text-bbd-ivory mb-2 line-clamp-2 min-h-[3.5rem] hover:text-bbd-orange transition-colors">
            {product.title}
          </h3>
        </Link>
        
        {/* Description - only show on larger cards */}
        {className.includes('lg:w-1/2') && (
          <p className="text-bbd-ivory/70 text-lg mb-6 line-clamp-3">
            {product.description || "Transform your body with this comprehensive fitness program designed by Built By Deal."}
          </p>
        )}
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl lg:text-3xl font-bold text-bbd-orange">
            {formatPrice(price.amount, price.currencyCode)}
          </span>
          <Link
            href={`/${basePath}/${product.handle}`}
            className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-bbd-orange to-bbd-gold text-bbd-black font-bold text-sm lg:text-base rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            BUY NOW
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
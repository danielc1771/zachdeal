import { formatPrice, type Money } from '@/lib/shopify';

interface ProductPriceProps {
  price: Money;
  rating?: number;
  reviewCount?: number;
  showRating?: boolean;
}

export default function ProductPrice({ 
  price, 
  rating = 4.9, 
  reviewCount = 0,
  showRating = true 
}: ProductPriceProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <span className="text-3xl font-bold text-bbd-orange">
        {formatPrice(price.amount, price.currencyCode)}
      </span>
      {showRating && (
        <div className="flex items-center space-x-1">
          <div className="flex text-bbd-gold">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'fill-current opacity-30'}`} 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-bbd-ivory/60">
            ({rating}{reviewCount > 0 && `, ${reviewCount} reviews`})
          </span>
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useEffect, use } from 'react';
import { getProductByHandle, formatPrice, type Product, ProductVariant } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import ProductBreadcrumb from '@/components/products/ProductBreadcrumb';
import ProductImage from '@/components/products/ProductImage';
import ProductPrice from '@/components/products/ProductPrice';
import ProductQuantitySelector from '@/components/products/ProductQuantitySelector';
import AddToCartButton from '@/components/products/AddToCartButton';

interface ProgramPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = await getProductByHandle(resolvedParams.handle);
        if (!productData) {
          notFound();
        }
        setProduct(productData);
        setSelectedVariant(productData.variants.edges[0]?.node);
      } catch (error) {
        console.error('Error fetching product:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [resolvedParams.handle]);

  // Removed handleAddToCart - now using AddToCartButton component

  if (loading) {
    return (
      <div className="min-h-screen bg-bbd-black flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-bbd-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-bbd-ivory">Loading program details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const productImage = product.featuredImage || product.images.edges[0]?.node;
  const price = selectedVariant?.priceV2 || product.priceRange.minVariantPrice;

  // Extract program details
  const getDifficulty = (title: string, description: string) => {
    const text = (title + ' ' + description).toLowerCase();
    if (text.includes('beginner') || text.includes('starter')) return 'Beginner';
    if (text.includes('advanced') || text.includes('expert')) return 'Advanced';
    if (text.includes('intermediate')) return 'Intermediate';
    return 'All Levels';
  };

  const getDuration = (title: string, description: string) => {
    const text = (title + ' ' + description).toLowerCase();
    if (text.includes('4 week') || text.includes('4-week')) return '4 Weeks';
    if (text.includes('6 week') || text.includes('6-week')) return '6 Weeks';
    if (text.includes('8 week') || text.includes('8-week')) return '8 Weeks';
    if (text.includes('12 week') || text.includes('12-week')) return '12 Weeks';
    if (text.includes('16 week') || text.includes('16-week')) return '16 Weeks';
    return '12 Weeks';
  };

  const difficulty = getDifficulty(product.title, product.description);
  const duration = getDuration(product.title, product.description);

  return (
    <div className="min-h-screen bg-bbd-black pt-24">
      {/* Navigation Breadcrumb */}
      <ProductBreadcrumb productTitle={product.title} productType="program" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <ProductImage image={productImage} title={product.title} placeholder="program" />

            {/* Program Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-bbd-charcoal/30 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-bbd-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-bbd-ivory">{difficulty}</p>
                <p className="text-xs text-bbd-ivory/60">Difficulty</p>
              </div>
              <div className="bg-bbd-charcoal/30 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-bbd-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-bbd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-bbd-ivory">{duration}</p>
                <p className="text-xs text-bbd-ivory/60">Duration</p>
              </div>
            </div>
          </div>

          {/* Product Details - Optimized for Quick Purchase */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="font-bebas text-4xl lg:text-5xl text-bbd-ivory mb-4 leading-tight">
                {product.title}
              </h1>
              <ProductPrice price={price} rating={4.9} />
            </div>

            {/* Short Description with Read More */}
            <div>
              <div className="prose prose-invert max-w-none">
                <p className="text-bbd-ivory/80 leading-relaxed">
                  {showFullDescription 
                    ? (product.description || "Transform your body with this comprehensive fitness program designed by Built By Deal. Get ready to push your limits and achieve results you never thought possible.")
                    : `${(product.description || "Transform your body with this comprehensive fitness program designed by Built By Deal.").substring(0, 120)}...`
                  }
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-bbd-orange hover:text-bbd-gold text-sm font-medium mt-2 underline"
                >
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <ProductQuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

            {/* Primary BUY NOW Button - Prominent Placement */}
            <button
              onClick={() => {
                if (!selectedVariant) return;
                const checkoutUrl = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/cart/${selectedVariant.id.split('/').pop()}:${quantity}`;
                window.location.href = checkoutUrl;
              }}
              disabled={!selectedVariant}
              className="w-full bg-gradient-to-r from-bbd-orange to-bbd-gold text-bbd-black font-bold text-xl py-5 rounded-lg hover:shadow-2xl hover:shadow-bbd-orange/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              BUY NOW - {formatPrice(price.amount, price.currencyCode)}
            </button>

            {/* Secondary Add to Cart */}
            <AddToCartButton
              variantId={selectedVariant?.id || ''}
              quantity={quantity}
              disabled={!selectedVariant}
              buttonText="ADD TO CART"
              showPrice={false}
              className="w-full bg-bbd-black border-2 border-bbd-orange text-bbd-orange hover:bg-bbd-orange hover:text-bbd-black"
            />

            {/* Trust Indicators - Condensed */}
            <div className="flex items-center justify-center gap-6 text-xs text-bbd-ivory/60 pt-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant Access
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Guarantee
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Digital Download
              </span>
            </div>

            {/* Expandable Details Section */}
            {showFullDescription && (
              <div className="border-t border-bbd-ivory/10 pt-6 space-y-6">
                {/* What's Included */}
                <div>
                  <h3 className="text-xl font-bold text-bbd-ivory mb-4">What&apos;s Included</h3>
                  <div className="space-y-3">
                    {[
                      "Complete workout program with detailed instructions",
                      "Nutrition guidelines and meal planning",
                      "Progress tracking templates",
                      "Video demonstrations for all exercises",
                      "24/7 community support access",
                      "30-day money-back guarantee"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-bbd-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-bbd-ivory/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-bbd-ivory mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Scientifically designed workout progression",
                      "Maximize muscle growth and fat loss",
                      "Professional video demonstrations",
                      "Complete nutrition guidance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-bbd-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-bbd-ivory/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
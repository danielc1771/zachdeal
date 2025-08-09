'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TransformationsSection() {
  // Get all transformation images
  const transformationImages = [
    'IMG_7635.JPG', 'IMG_7636.JPG', 'IMG_7637.JPG', 'IMG_7638.JPG', 'IMG_7639.JPG',
    'IMG_7640.JPG', 'IMG_7641.JPG', 'IMG_7642.JPG', 'IMG_7643.JPG', 'IMG_7644.JPG',
    'IMG_7645.JPG', 'IMG_7646.JPG', 'IMG_7647.JPG', 'IMG_7648.JPG', 'IMG_7649.JPG',
    'IMG_7650.JPG', 'IMG_7651.JPG', 'IMG_7654.JPG', 'IMG_7655.JPG'
  ];

  // Split images into two rows
  const row1Images = transformationImages.slice(0, Math.ceil(transformationImages.length / 2));
  const row2Images = transformationImages.slice(Math.ceil(transformationImages.length / 2));

  return (
    <section className="py-20 bg-bbd-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-bbd-ivory mb-4">
            REAL <span className="text-bbd-orange">TRANSFORMATIONS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            See the incredible results from clients who committed to Zach Deal&apos;s training programs
          </p>
          <Link
            href="/transformations"
            className="inline-flex items-center px-6 py-3 bg-bbd-orange text-bbd-black font-bold text-base rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105"
          >
            VIEW ALL TRANSFORMATIONS
            <svg
              className="ml-2 w-4 h-4"
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

        {/* Dual Row Sliding Gallery */}
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-6">
              {/* Duplicate images for seamless loop */}
              {[...row1Images, ...row1Images].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 relative w-64 h-80 rounded-lg overflow-hidden border-2 border-bbd-charcoal/30 hover:border-bbd-orange/50 transition-all duration-300 group"
                >
                  <Image
                    src={`/transformations/${image}`}
                    alt={`Transformation ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bbd-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left (offset) */}
          <div className="relative ml-32">
            <div className="flex animate-scroll-right space-x-6">
              {/* Duplicate images for seamless loop */}
              {[...row2Images, ...row2Images].map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 relative w-64 h-80 rounded-lg overflow-hidden border-2 border-bbd-charcoal/30 hover:border-bbd-orange/50 transition-all duration-300 group"
                >
                  <Image
                    src={`/transformations/${image}`}
                    alt={`Transformation ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bbd-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-bbd-orange mb-2">500+</div>
            <div className="text-bbd-ivory/80 text-sm">Transformations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-bbd-orange mb-2">95%</div>
            <div className="text-bbd-ivory/80 text-sm">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-bbd-orange mb-2">12</div>
            <div className="text-bbd-ivory/80 text-sm">Week Average</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-bbd-orange mb-2">24/7</div>
            <div className="text-bbd-ivory/80 text-sm">Support</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Client Transformations | Zach Deal Fitness',
  description: 'See real transformation results from clients who committed to Zach Deal training programs. Before and after photos, success stories, and proven results.',
};

export default function TransformationsPage() {
  // Get all transformation images
  const transformationImages = [
    'IMG_7635.JPG', 'IMG_7636.JPG', 'IMG_7637.JPG', 'IMG_7638.JPG', 'IMG_7639.JPG',
    'IMG_7640.JPG', 'IMG_7641.JPG', 'IMG_7642.JPG', 'IMG_7643.JPG', 'IMG_7644.JPG',
    'IMG_7645.JPG', 'IMG_7646.JPG', 'IMG_7647.JPG', 'IMG_7648.JPG', 'IMG_7649.JPG',
    'IMG_7650.JPG', 'IMG_7651.JPG', 'IMG_7654.JPG', 'IMG_7655.JPG'
  ];

  return (
    <div className="min-h-screen bg-bbd-black pt-24 sm:pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-bbd-ivory mb-6">
              CLIENT <span className="text-bbd-orange">TRANSFORMATIONS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Real people. Real results. See the incredible transformations from clients who committed to the Zach Deal training system.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-bbd-orange mb-2">500+</div>
                <div className="text-bbd-ivory/80 text-sm sm:text-base">Transformations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-bbd-orange mb-2">95%</div>
                <div className="text-bbd-ivory/80 text-sm sm:text-base">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-bbd-orange mb-2">12</div>
                <div className="text-bbd-ivory/80 text-sm sm:text-base">Week Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-bbd-orange mb-2">100%</div>
                <div className="text-bbd-ivory/80 text-sm sm:text-base">Satisfaction</div>
              </div>
            </div>

            <Link
              href="/programs"
              className="inline-flex items-center px-8 py-4 bg-bbd-orange text-bbd-black font-bold text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105 mb-8"
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
      </section>

      {/* Transformations Gallery */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transformationImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-bbd-charcoal/30 hover:border-bbd-orange/70 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-bbd-orange/20"
              >
                <Image
                  src={`/transformations/${image}`}
                  alt={`Transformation ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bbd-black/80 via-bbd-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-bbd-ivory font-bold text-lg mb-1">
                    Transformation #{index + 1}
                  </h3>
                  <p className="text-bbd-ivory/80 text-sm">
                    Real client results with Zach Deal programs
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-bbd-orange text-bbd-black px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-20 bg-bbd-charcoal/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-6">
              SUCCESS <span className="text-bbd-orange">STORIES</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These transformations represent months of dedication, following proven programs, and never giving up on the goal.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bbd-charcoal/50 rounded-xl p-6 border border-bbd-charcoal/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-bbd-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-bbd-ivory/90 mb-4">
                &quot;I lost 45 pounds in 16 weeks following Zach&apos;s program. The structure and support made all the difference.&quot;
              </blockquote>
              <cite className="text-bbd-orange font-semibold">- Sarah M.</cite>
            </div>

            <div className="bg-bbd-charcoal/50 rounded-xl p-6 border border-bbd-charcoal/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-bbd-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-bbd-ivory/90 mb-4">
                &quot;Gained 20 pounds of lean muscle and increased my bench press by 50 pounds. Best investment I&apos;ve made.&quot;
              </blockquote>
              <cite className="text-bbd-orange font-semibold">- Mike D.</cite>
            </div>

            <div className="bg-bbd-charcoal/50 rounded-xl p-6 border border-bbd-charcoal/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-bbd-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-bbd-ivory/90 mb-4">
                &quot;Transformed my relationship with fitness. Down 30 pounds and feeling stronger than ever at 45.&quot;
              </blockquote>
              <cite className="text-bbd-orange font-semibold">- Jessica R.</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bbd-ivory mb-6">
              YOUR <span className="text-bbd-orange">TRANSFORMATION</span> STARTS NOW
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Join hundreds of successful clients who have transformed their bodies and lives with proven training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-bbd-orange text-bbd-black font-bold text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105"
              >
                VIEW PROGRAMS
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
              
              <Link
                href="/supplements"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-bbd-orange text-bbd-orange font-bold text-lg rounded-md hover:bg-bbd-orange hover:text-bbd-black transition-all duration-200 transform hover:scale-105"
              >
                SHOP SUPPLEMENTS
              </Link>
            </div>

            <p className="text-sm text-bbd-ivory/60 mt-6">
              *Individual results may vary. Transformations shown are from clients who followed programs consistently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
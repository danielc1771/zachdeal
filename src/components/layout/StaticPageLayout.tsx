import React from 'react';

interface StaticPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function StaticPageLayout({ title, children }: StaticPageLayoutProps) {
  return (
    <div className="min-h-screen bg-bbd-black pt-24 sm:pt-28 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl text-bbd-ivory mb-8 text-center">
            {title}
          </h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-bbd-ivory/90 leading-relaxed space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
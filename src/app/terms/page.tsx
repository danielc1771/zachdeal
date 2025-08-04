import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Terms of Service | Zach Deal',
  description: 'Terms of Service for Zach Deal training programs and supplements.',
};

export default function TermsPage() {
  return (
    <StaticPageLayout title="TERMS OF SERVICE">
      <div className="space-y-8">
        <div>
          <p className="text-sm text-bbd-ivory/60 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">ACCEPTANCE OF TERMS</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please 
            do not use this service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">PRODUCTS AND SERVICES</h2>
          <p className="mb-4">
            We offer digital training programs and physical supplement products. All program 
            content is for educational purposes only and should not replace professional medical advice.
          </p>
          <p>
            Results may vary between individuals. We do not guarantee specific outcomes from 
            following our training programs or using our supplements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">PAYMENT AND BILLING</h2>
          <p className="mb-4">
            Payment is required at the time of purchase. We accept major credit cards and PayPal.
          </p>
          <p>
            All sales are final for digital products. Physical products may be returned according 
            to our return policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">INTELLECTUAL PROPERTY</h2>
          <p className="mb-4">
            All content on this website, including training programs, text, graphics, and logos, 
            is the property of Zach Deal and is protected by copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, or create derivative works from our content 
            without express written permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">HEALTH AND SAFETY</h2>
          <p className="mb-4">
            Before beginning any fitness program, consult with your physician. Stop exercising 
            if you experience pain, dizziness, or discomfort.
          </p>
          <p>
            Our supplements have not been evaluated by the FDA and are not intended to diagnose, 
            treat, cure, or prevent any disease.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">LIMITATION OF LIABILITY</h2>
          <p>
            In no event shall Zach Deal be liable for any direct, indirect, punitive, incidental, 
            special, or consequential damages arising from your use of our products or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">CONTACT INFORMATION</h2>
          <p>
            Questions about the Terms of Service should be sent to us at{' '}
            <a href="/contact" className="text-bbd-orange hover:text-bbd-gold transition-colors">
              our contact page
            </a>
            .
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
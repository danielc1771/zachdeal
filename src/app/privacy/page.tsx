import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Privacy Policy | Zach Deal',
  description: 'Privacy Policy for Zach Deal training programs and supplements.',
};

export default function PrivacyPage() {
  return (
    <StaticPageLayout title="PRIVACY POLICY">
      <div className="space-y-8">
        <div>
          <p className="text-sm text-bbd-ivory/60 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">INFORMATION WE COLLECT</h2>
          <p className="mb-4">
            We collect information you provide directly to us, including when you create an account, 
            make a purchase, subscribe to our newsletter, or contact us for support.
          </p>
          <p>
            This may include your name, email address, billing information, and communication preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">HOW WE USE YOUR INFORMATION</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-bbd-ivory/80">
            <li>Process and fulfill your orders</li>
            <li>Send you important updates about your purchases</li>
            <li>Provide customer support</li>
            <li>Improve our products and services</li>
            <li>Send promotional communications (with your consent)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">INFORMATION SHARING</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            except as described in this policy.
          </p>
          <p>
            We may share your information with trusted service providers who assist us in operating 
            our website and conducting our business, provided they agree to keep this information confidential.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">DATA SECURITY</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">YOUR RIGHTS</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-bbd-ivory/80">
            <li>Access the personal information we hold about you</li>
            <li>Correct any inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">CONTACT US</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
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
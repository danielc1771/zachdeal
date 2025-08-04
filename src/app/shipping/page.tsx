import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Shipping Information | Zach Deal',
  description: 'Shipping information for Zach Deal supplements and merchandise.',
};

export default function ShippingPage() {
  return (
    <StaticPageLayout title="SHIPPING INFORMATION">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">PROCESSING TIME</h2>
          <p className="mb-4">
            Most orders are processed within 1-2 business days. During peak seasons or promotional periods, 
            processing may take up to 3-5 business days.
          </p>
          <p>
            You will receive a confirmation email with tracking information once your order ships.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">SHIPPING METHODS & RATES</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-display text-bbd-gold mb-3">DOMESTIC SHIPPING (US)</h3>
            <div className="space-y-3 text-bbd-ivory/80">
              <div className="flex justify-between items-center border-b border-bbd-charcoal/30 pb-2">
                <span>Standard Shipping (5-7 business days)</span>
                <span className="text-bbd-orange">$6.99</span>
              </div>
              <div className="flex justify-between items-center border-b border-bbd-charcoal/30 pb-2">
                <span>Expedited Shipping (3-5 business days)</span>
                <span className="text-bbd-orange">$12.99</span>
              </div>
              <div className="flex justify-between items-center border-b border-bbd-charcoal/30 pb-2">
                <span>Express Shipping (1-2 business days)</span>
                <span className="text-bbd-orange">$24.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-bbd-gold">FREE Standard Shipping on orders over $75</span>
                <span className="text-bbd-gold">FREE</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-display text-bbd-gold mb-3">INTERNATIONAL SHIPPING</h3>
            <p className="mb-3">
              We currently ship to select international destinations. Shipping rates vary by location and will be calculated at checkout.
            </p>
            <div className="space-y-2 text-bbd-ivory/80">
              <div>• Canada: 7-14 business days</div>
              <div>• Europe: 10-21 business days</div>
              <div>• Australia: 14-28 business days</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">DIGITAL PRODUCTS</h2>
          <p className="mb-4">
            Training programs and digital content are delivered instantly via email after purchase completion. 
            Check your spam folder if you don&apos;t receive your download link within 5 minutes.
          </p>
          <p>
            No shipping charges apply to digital products.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">SHIPPING RESTRICTIONS</h2>
          <p className="mb-4">
            Some supplements may have shipping restrictions to certain states or countries due to local regulations.
          </p>
          <p>
            We cannot ship to P.O. boxes for certain products. Please provide a physical address for delivery.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">TRACKING YOUR ORDER</h2>
          <p className="mb-4">
            Once your order ships, you&apos;ll receive a tracking number via email. You can track your package using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-bbd-ivory/80">
            <li>The carrier&apos;s website (USPS, UPS, FedEx)</li>
            <li>Your order confirmation email</li>
            <li>Our customer portal (if applicable)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">SHIPPING ISSUES</h2>
          <p className="mb-4">
            If your package is lost, damaged, or delayed, please contact us within 30 days of the expected delivery date.
          </p>
          <p>
            We&apos;ll work with you and the carrier to resolve any shipping issues promptly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">CONTACT US</h2>
          <p>
            Have questions about shipping? {' '}
            <a href="/contact" className="text-bbd-orange hover:text-bbd-gold transition-colors">
              Contact our support team
            </a>
            {' '} and we&apos;ll help you out.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
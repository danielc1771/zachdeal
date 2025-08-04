import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Returns & Refunds | Zach Deal',
  description: 'Return and refund policy for Zach Deal products.',
};

export default function ReturnsPage() {
  return (
    <StaticPageLayout title="RETURNS & REFUNDS">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">30-DAY MONEY-BACK GUARANTEE</h2>
          <p className="mb-4">
            We stand behind our products with a 30-day money-back guarantee. If you&apos;re not completely 
            satisfied with your purchase, we&apos;ll make it right.
          </p>
          <p>
            Your satisfaction is our priority, and we want you to feel confident in every purchase.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">DIGITAL PRODUCTS</h2>
          <div className="mb-6">
            <h3 className="text-xl font-display text-bbd-gold mb-3">TRAINING PROGRAMS</h3>
            <p className="mb-4">
              Digital training programs come with a 30-day satisfaction guarantee. If you&apos;re not satisfied, 
              contact us within 30 days for a full refund.
            </p>
            <div className="bg-bbd-charcoal/30 p-4 rounded-lg border border-bbd-charcoal/50">
              <p className="text-bbd-ivory/80 text-sm">
                <strong>Note:</strong> To qualify for a refund, you must demonstrate that you&apos;ve attempted 
                to follow the program as outlined. We may ask for progress photos or completion proof.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">PHYSICAL PRODUCTS</h2>
          <div className="mb-6">
            <h3 className="text-xl font-display text-bbd-gold mb-3">SUPPLEMENTS</h3>
            <p className="mb-4">
              Unopened supplements may be returned within 30 days of delivery for a full refund. 
              Products must be in original packaging and unused.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-bbd-ivory mb-2">Return Conditions:</h4>
                <ul className="list-disc list-inside space-y-1 text-bbd-ivory/80">
                  <li>Items must be unopened and sealed</li>
                  <li>Original packaging required</li>
                  <li>Return initiated within 30 days of delivery</li>
                  <li>Items must not be expired</li>
                </ul>
              </div>
              
              <div className="bg-bbd-charcoal/30 p-4 rounded-lg border border-bbd-charcoal/50">
                <p className="text-bbd-ivory/80 text-sm">
                  <strong>Opened Products:</strong> Due to FDA regulations, we cannot accept returns 
                  of opened supplement containers. However, if you experience quality issues, 
                  please contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">HOW TO INITIATE A RETURN</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-bbd-gold mb-2">Step 1: Contact Us</h3>
              <p className="text-bbd-ivory/80">
                Email us at{' '}
                <a href="/contact" className="text-bbd-orange hover:text-bbd-gold transition-colors">
                  our contact page
                </a>
                {' '}with your order number and reason for return.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bbd-gold mb-2">Step 2: Get Authorization</h3>
              <p className="text-bbd-ivory/80">
                We&apos;ll provide you with a Return Authorization (RA) number and return instructions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bbd-gold mb-2">Step 3: Ship Items</h3>
              <p className="text-bbd-ivory/80">
                Package items securely and ship to our returns address using the provided label.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bbd-gold mb-2">Step 4: Receive Refund</h3>
              <p className="text-bbd-ivory/80">
                Once we receive and inspect your return, we&apos;ll process your refund within 5-7 business days.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">REFUND PROCESSING</h2>
          <p className="mb-4">
            Refunds are processed to the original payment method used for purchase. Please allow:
          </p>
          <ul className="list-disc list-inside space-y-2 text-bbd-ivory/80">
            <li>Credit Cards: 3-5 business days</li>
            <li>PayPal: 1-2 business days</li>
            <li>Bank Transfers: 5-10 business days</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">RETURN SHIPPING</h2>
          <p className="mb-4">
            Return shipping costs are the customer&apos;s responsibility unless the return is due to our error 
            (wrong item shipped, defective product, etc.).
          </p>
          <p>
            We recommend using a trackable shipping method for returns over $50 in value.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">EXCHANGES</h2>
          <p className="mb-4">
            We don&apos;t offer direct exchanges. To exchange an item, please return the original item 
            for a refund and place a new order for the desired product.
          </p>
          <p>
            This ensures you get the exact product you want without delays.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">QUESTIONS?</h2>
          <p>
            Have questions about returns or refunds? {' '}
            <a href="/contact" className="text-bbd-orange hover:text-bbd-gold transition-colors">
              Contact our support team
            </a>
            {' '} and we&apos;ll help resolve any issues.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
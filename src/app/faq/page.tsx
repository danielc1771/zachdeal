import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Frequently Asked Questions | Zach Deal',
  description: 'Common questions about Zach Deal training programs and supplements.',
};

export default function FAQPage() {
  const faqs = [
    {
      category: "TRAINING PROGRAMS",
      questions: [
        {
          q: "Are the training programs suitable for beginners?",
          a: "Yes! Our programs include modifications for all fitness levels. Each program provides beginner-friendly alternatives while still challenging advanced users."
        },
        {
          q: "How long are the training programs?",
          a: "Programs typically range from 4-16 weeks depending on your goals. Each program clearly states its duration and what to expect."
        },
        {
          q: "Do I need a gym membership?",
          a: "Some programs are designed for home workouts with minimal equipment, while others require gym access. Check the program description for equipment requirements."
        },
        {
          q: "Can I get a custom training program?",
          a: "We offer both pre-made programs and personalized coaching options. Contact us to discuss custom program development."
        }
      ]
    },
    {
      category: "SUPPLEMENTS",
      questions: [
        {
          q: "Are your supplements third-party tested?",
          a: "Yes, all our supplements undergo rigorous third-party testing for purity, potency, and safety. We provide certificates of analysis upon request."
        },
        {
          q: "Are the supplements safe for women?",
          a: "Most of our supplements are formulated for both men and women. Product descriptions specify any gender-specific recommendations."
        },
        {
          q: "Can I take multiple supplements together?",
          a: "Many of our supplements can be safely combined. However, we recommend consulting with a healthcare provider before starting any supplement regimen."
        },
        {
          q: "How long until I see results?",
          a: "Results vary by individual and product. Most users report noticeable effects within 2-4 weeks of consistent use combined with proper training and nutrition."
        }
      ]
    },
    {
      category: "ORDERS & SHIPPING",
      questions: [
        {
          q: "How quickly will I receive my digital programs?",
          a: "Digital programs are delivered instantly via email after purchase. Check your spam folder if you don't see the download link."
        },
        {
          q: "Do you offer international shipping?",
          a: "Yes, we ship supplements internationally to select countries. Shipping rates and delivery times vary by location."
        },
        {
          q: "Can I track my order?",
          a: "Yes, you'll receive a tracking number via email once your order ships. You can track your package on the carrier's website."
        },
        {
          q: "What if my package is damaged or lost?",
          a: "Contact us immediately if your package arrives damaged or doesn't arrive at all. We'll work with the carrier to resolve the issue quickly."
        }
      ]
    },
    {
      category: "PAYMENTS & REFUNDS",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for secure payment processing."
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, we offer a 30-day money-back guarantee on all products. See our returns policy for full details and conditions."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use industry-standard SSL encryption and work with trusted payment processors to ensure your information is protected."
        },
        {
          q: "Can I get a refund on digital programs?",
          a: "Digital programs come with a 30-day satisfaction guarantee. Contact us if you're not satisfied and we'll work to make it right."
        }
      ]
    }
  ];

  return (
    <StaticPageLayout title="FREQUENTLY ASKED QUESTIONS">
      <div className="space-y-12">
        <div className="text-center">
          <p className="text-lg text-bbd-ivory/80">
            Find answers to the most common questions about our training programs and supplements.
          </p>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h2 className="text-2xl font-display text-bbd-orange mb-6 text-center">
              {category.category}
            </h2>
            
            <div className="space-y-6">
              {category.questions.map((faq, faqIndex) => (
                <div key={faqIndex} className="bg-bbd-charcoal/30 rounded-lg border border-bbd-charcoal/50 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-bbd-gold mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-bbd-ivory/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-bbd-orange/10 to-bbd-gold/10 rounded-lg p-8 border border-bbd-orange/30 text-center">
          <h2 className="text-2xl font-display text-bbd-orange mb-4">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-bbd-ivory/80 mb-6">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help with any questions 
            about our programs, supplements, or orders.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-bbd-orange text-bbd-black font-bold text-lg rounded-md hover:bg-bbd-gold transition-all duration-200 transform hover:scale-105"
          >
            CONTACT SUPPORT
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </StaticPageLayout>
  );
}
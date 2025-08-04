import StaticPageLayout from '@/components/layout/StaticPageLayout';

export const metadata = {
  title: 'Disclaimer | Zach Deal',
  description: 'Legal disclaimer for Zach Deal training programs and supplements.',
};

export default function DisclaimerPage() {
  return (
    <StaticPageLayout title="DISCLAIMER">
      <div className="space-y-8">
        <div>
          <p className="text-sm text-bbd-ivory/60 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">HEALTH AND FITNESS DISCLAIMER</h2>
          <p className="mb-4">
            The information provided by Zach Deal is for educational and informational purposes only. 
            Before beginning any fitness program, you should consult with your physician or other 
            healthcare provider.
          </p>
          <p>
            This is particularly important if you have any pre-existing health conditions, injuries, 
            or if you are pregnant or nursing.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">RESULTS DISCLAIMER</h2>
          <p className="mb-4">
            Individual results may vary. The testimonials and examples used are exceptional results 
            and are not intended to guarantee that anyone will achieve the same or similar results.
          </p>
          <p>
            Your results will depend on many factors including your starting point, goals, commitment, 
            and adherence to the program.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">SUPPLEMENT DISCLAIMER</h2>
          <p className="mb-4">
            These statements have not been evaluated by the Food and Drug Administration. 
            Our supplements are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            Always consult with a healthcare professional before starting any supplement regimen, 
            especially if you have medical conditions or take medications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">LIABILITY DISCLAIMER</h2>
          <p className="mb-4">
            You assume full responsibility for your safety and understand that physical exercise 
            involves risk of injury. You should not begin any exercise program without consulting 
            your physician.
          </p>
          <p>
            By participating in our programs, you agree to assume all risks associated with such 
            activities and release Zach Deal from any and all liability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">PROFESSIONAL ADVICE DISCLAIMER</h2>
          <p>
            The content provided is not intended to be a substitute for professional medical advice, 
            diagnosis, or treatment. Always seek the advice of qualified professionals regarding 
            any health or fitness questions you may have.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">AGE RESTRICTION</h2>
          <p>
            Our programs and supplements are intended for adults 18 years and older. If you are 
            under 18, please consult with a parent or guardian and healthcare provider before 
            beginning any program.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display text-bbd-orange mb-4">QUESTIONS</h2>
          <p>
            If you have any questions about this disclaimer, please{' '}
            <a href="/contact" className="text-bbd-orange hover:text-bbd-gold transition-colors">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
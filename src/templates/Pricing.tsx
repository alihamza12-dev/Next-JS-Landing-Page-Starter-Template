import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';

const Pricing = () => (
  <Section
    title="Simple, transparent pricing"
    description="Choose the plan that fits your needs. No hidden fees, no surprises."
  >
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-stretch sm:justify-center">
      <div className="w-full max-w-xs">
        <PricingCard
          title="Free"
          price="$0"
          frequency="/month"
          description="Perfect for getting started"
          features={['1 user', '5 projects', 'Basic support', '1 GB storage']}
          buttonText="Get Started"
        />
      </div>
      <div className="w-full max-w-xs">
        <PricingCard
          title="Pro"
          price="$19"
          frequency="/month"
          description="Best for growing teams"
          features={[
            '10 users',
            'Unlimited projects',
            'Priority support',
            '50 GB storage',
            'Advanced analytics',
          ]}
          buttonText="Start Free Trial"
          highlighted
        />
      </div>
      <div className="w-full max-w-xs">
        <PricingCard
          title="Enterprise"
          price="Custom"
          frequency=""
          description="For large-scale organizations"
          features={[
            'Unlimited users',
            'Unlimited projects',
            'Dedicated support',
            'Unlimited storage',
            'Custom integrations',
            'SLA guarantee',
          ]}
          buttonText="Contact Sales"
        />
      </div>
    </div>
  </Section>
);

export { Pricing };

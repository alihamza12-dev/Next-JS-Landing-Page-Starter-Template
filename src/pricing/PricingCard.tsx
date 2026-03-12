type IPricingCardProps = {
  title: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
};

const PricingCard = (props: IPricingCardProps) => (
  <div
    className={`pricing-card ${props.highlighted ? 'pricing-card-highlighted' : ''}`}
  >
    <div className="p-8">
      <h3 className="text-xl font-semibold text-gray-900">{props.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{props.description}</p>
      <div className="mt-6">
        <span className="text-4xl font-bold text-gray-900">{props.price}</span>
        {props.frequency && (
          <span className="ml-1 text-lg text-gray-500">{props.frequency}</span>
        )}
      </div>
      <ul className="mt-6 space-y-3">
        {props.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-600">
            <svg
              className="mr-2 size-5 shrink-0 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button
          type="button"
          className={`pricing-btn ${props.highlighted ? 'pricing-btn-primary' : 'pricing-btn-outline'}`}
        >
          {props.buttonText}
        </button>
      </div>
    </div>

    <style jsx>
      {`
        .pricing-card {
          @apply rounded-lg border border-gray-200 bg-white;
        }

        .pricing-card-highlighted {
          @apply border-primary-500 ring-2 ring-primary-500;
        }

        .pricing-btn {
          @apply w-full rounded-md py-3 px-4 text-center text-base font-semibold;
        }

        .pricing-btn-primary {
          @apply text-white bg-primary-500;
        }

        .pricing-btn-primary:hover {
          @apply bg-primary-600;
        }

        .pricing-btn-outline {
          @apply text-primary-500 border border-primary-500 bg-white;
        }

        .pricing-btn-outline:hover {
          @apply bg-primary-100;
        }
      `}
    </style>
  </div>
);

export { PricingCard };

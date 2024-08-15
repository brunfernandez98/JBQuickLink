import CardPricing from "./CardPricing";

const pricingPlans = [
  {
    title: 'Starter Plan',
    price: 'Free',
    description: 'For personal use',
    features: [
      'Unlimited links',
      'Unlimited clicks',
      'Custom branding',
      'Detailed analytics',
    ],
    primaryAction: {
      label: 'Get Started',
      onClick: () => {
        console.log('Starter Plan selected');
      },
    },
    color: 'green',
  },
  {
    title: 'Pro Plan',
    price: '$19/month',
    description: 'For professionals',
    features: [
      'Everything in Starter',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
    primaryAction: {
      label: 'Upgrade Now',
      onClick: () => {
        console.log('Pro Plan selected');
      },
    },
    color: 'blue',
  },
  {
    title: 'Business Plan',
    price: '$49/month',
    description: 'For small businesses',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'Custom integrations',
      'Premium support',
    ],
    primaryAction: {
      label: 'Get Started',
      onClick: () => {
        console.log('Business Plan selected');
      },
    },
    color: 'red',
  },
  {
    title: 'Enterprise Plan',
    price: 'Contact us',
    description: 'For large enterprises',
    features: [
      'All Business features',
      'Custom solutions',
      'Dedicated server',
      '24/7 support',
    ],
    primaryAction: {
      label: 'Contact Sales',
      onClick: () => {
        console.log('Enterprise Plan selected');
      },
    },
    color: 'purple',
  },
];

const CardPricingSection = () => {
  return (
    <>
      {pricingPlans.map((plan, index) => (
        <CardPricing
          key={index}
          title={plan.title}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          primaryAction={plan.primaryAction}
        />
      ))}
    </>
  );
};

export default CardPricingSection;
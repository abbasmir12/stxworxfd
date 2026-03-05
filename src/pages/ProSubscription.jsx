const SUBSCRIPTION_PLANS = [
  {
    id: 1,
    name: 'Basic',
    price: 0,
    period: 'month',
    features: [
      'Browse all jobs',
      'Submit up to 5 proposals/month',
      'Basic profile',
      'Standard support',
      '5% platform fee'
    ],
    badge: null,
    image: '/images/shop-img-2.jpg'
  },
  {
    id: 2,
    name: 'Pro',
    price: 29,
    period: 'month',
    features: [
      'Unlimited proposals',
      'Featured profile',
      'Priority support',
      '3% platform fee',
      'NFT badge',
      'Advanced analytics'
    ],
    badge: 'Popular',
    image: '/images/shop-img-1.jpg'
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 99,
    period: 'month',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      '1% platform fee',
      'Custom NFT badges',
      'API access',
      'White-label option'
    ],
    badge: 'Best Value',
    image: '/images/shop-img-2.jpg'
  }
];

function ProSubscription() {
  return (
    <section className="main__shop shop">
      <div className="container">
        <h1 className="shop__title title">
          Pro <span style={{ color: '#c77bc9' }}>Subscription</span>
        </h1>
        <div className="shop__filters-panel filters-panel">
          <p className="filters-panel__text">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="shop__inner">
          {SUBSCRIPTION_PLANS.map(plan => (
            <div key={plan.id} className="shop__card card card--shop">
              <div className="card__inner">
                <div className="card-box__poster">
                  <img className="card-box__poster-img" src={plan.image} alt={plan.name}/>
                  {plan.badge && (
                    <p className="card-box__poster-suptext">
                      {plan.badge}
                    </p>
                  )}
                </div>
                <p className="card__subtext">
                  {plan.name} Plan
                </p>
                <a className="card__title" href="#" onClick={(e) => e.preventDefault()}>
                  {plan.name}
                </a>
                <div className="card__price card-price">
                  <ins className="card-price__current">
                    ${plan.price} / {plan.period}
                  </ins>
                </div>
                <ul className="card__list card-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="card-list__item">
                      <p className="card-list__text">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <a 
                  className="card__link" 
                  href="#" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    alert('Subscription coming soon! Connect wallet to continue.'); 
                  }}
                >
                  {plan.price === 0 ? 'Current Plan' : 'Upgrade Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProSubscription;


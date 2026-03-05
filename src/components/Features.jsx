export default function Features() {
  const features = [
    {
      title: 'Milestone-Based Escrow',
      description: 'Smart contracts automatically hold and release funds based on milestone completion, ensuring secure payments for both parties.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="25" width="40" height="25" rx="4" stroke="#00BCFF" strokeWidth="3" fill="none"/>
          <path d="M20 25V18C20 15 22 12 25 12H35C38 12 40 15 40 18V25" stroke="#00BCFF" strokeWidth="3" fill="none"/>
          <circle cx="30" cy="37" r="3" fill="#00BCFF"/>
        </svg>
      )
    },
    {
      title: 'Smart Contract Security',
      description: 'Built on Stacks blockchain with Clarity smart contracts for transparent, auditable, and secure transactions.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L15 18V30C15 40 22 48 30 50C38 48 45 40 45 30V18L30 10Z" stroke="#00CF7F" strokeWidth="3" fill="none"/>
          <path d="M25 30L28 33L35 26" stroke="#00CF7F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Hiro Wallet Integration',
      description: 'Seamless connection with Hiro Wallet for secure authentication and STX transactions.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="18" width="36" height="28" rx="4" stroke="#FF7361" strokeWidth="3" fill="none"/>
          <path d="M12 28H48" stroke="#FF7361" strokeWidth="3"/>
          <circle cx="20" cy="36" r="2" fill="#FF7361"/>
        </svg>
      )
    },
    {
      title: 'Dispute Resolution',
      description: 'Fair and transparent dispute handling system with community arbitration and evidence submission.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 15L35 25L45 27L37 35L39 45L30 40L21 45L23 35L15 27L25 25L30 15Z" stroke="#B659FF" strokeWidth="2.5" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Reputation System',
      description: 'Build your on-chain reputation with verified reviews, completion rates, and quality scores.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="22" r="8" stroke="#FFB800" strokeWidth="3" fill="none"/>
          <path d="M18 45C18 38 23 33 30 33C37 33 42 38 42 45" stroke="#FFB800" strokeWidth="3" strokeLinecap="round"/>
          <path d="M38 22L42 26L48 20" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'NFT Rewards',
      description: 'Earn unique NFT badges for achievements, milestones, and exceptional work quality.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="30" height="30" rx="3" stroke="#FF4D12" strokeWidth="3" fill="none"/>
          <path d="M25 25L30 30L35 25M30 30V40" stroke="#FF4D12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'X Verification',
      description: 'Link your X (Twitter) account for enhanced trust and social proof in the platform.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" stroke="#1DA1F2" strokeWidth="3" fill="none"/>
          <path d="M24 30L28 34L36 26" stroke="#1DA1F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor project progress, milestone status, and payment releases in real-time dashboards.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" stroke="#00BCFF" strokeWidth="3" fill="none"/>
          <path d="M30 18V30L38 34" stroke="#00BCFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Pro Subscription',
      description: 'Unlock premium features including priority support, advanced analytics, and reduced platform fees.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 12L34 24H46L36 32L40 44L30 36L20 44L24 32L14 24H26L30 12Z" stroke="#FFD700" strokeWidth="2.5" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <section className="main__groups-section groups-section" id="features">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">Platform Features</h2>
          <p style={{textAlign: 'center', marginTop: '15px', fontSize: '16px', color: '#999'}}>
            Powerful tools for secure and transparent freelancing
          </p>
        </div>
        <div className="freelancers__inner freelancers__inner_index" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          {features.map((feature, index) => (
            <div key={index} className="freelancers__card card freelancers--card">
              <div className="card__inner">
                <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>{feature.icon}</div>
                <h3 className="card__title">{feature.title}</h3>
                <p className="card__subtext">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

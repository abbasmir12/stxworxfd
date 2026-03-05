import { Link } from 'react-router-dom';

export default function InnerPages() {
  const features = [
    { id: 1, name: 'Browse Jobs', img: '1.jpg', link: '/jobs' },
    { id: 2, name: 'Post Job', img: '2.jpg', link: '/home' },
    { id: 3, name: 'Submit Proposal', img: '3.jpg', link: '/home' },
    { id: 4, name: 'Active Projects', img: '4.jpg', link: '/projects' },
    { id: 5, name: 'Milestone Tracking', img: '5.jpg', link: '/projects' },
    { id: 6, name: 'Escrow Management', img: 'group-profile.jpg', link: '/projects' },
    { id: 7, name: 'Dispute Resolution', img: 'designLab_courses.jpg', link: '/disputes' },
    { id: 8, name: 'Leaderboard', img: 'Courses-page.jpg', link: '/leaderboard' },
    { id: 9, name: 'NFT Rewards', img: 'DesignLab_Shop.jpg', link: '/home' },
    { id: 10, name: 'X Verification', img: '10.jpg', link: '/home' },
    { id: 11, name: 'Pro Subscription', img: '11.jpg', link: '/subscription' },
    { id: 12, name: 'Wallet Integration', img: '12.jpg', link: '/home' }
  ];

  return (
    <section className="main__groups-section groups-section" id="innerpages">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">Core Features</h2>
          <p style={{textAlign: 'center', marginTop: '15px', fontSize: '16px', color: '#999'}}>
            Everything you need for decentralized freelancing
          </p>
        </div>
        <div className="allpages-demos">
          <div className="allpages-wrapper">
            {features.map(feature => (
              <div key={feature.id} className="allpages-iteam">
                <span>
                  <Link to={feature.link}>
                    <img src={`/images/index/${feature.img}`} alt={feature.name} />
                  </Link>
                </span>
                <h4 className="demo-name">{feature.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

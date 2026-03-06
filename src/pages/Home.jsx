import { Link, useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const MOCK_PROJECTS = [
  {
    id: 1,
    category: 'UX/UI',
    title: 'Designing a Low Prototype in Figma',
    budget: '$2,500',
    milestones: 3,
    proposals: 12,
    client: 'Anthony Clark',
    clientAvatar: '/images/member-icon-6.png',
    image: '/images/course-img-2.jpg'
  },
  {
    id: 2,
    category: 'Smart Contract',
    title: 'Building DeFi Protocol on Stacks Chain',
    budget: '$5,000',
    milestones: 4,
    proposals: 8,
    client: 'Philippa Bush',
    clientAvatar: '/images/member-icon-3.png',
    image: '/images/course-img-3.jpg'
  }
];

const FEATURED_GROUPS = [
  { id: 1, name: 'Web3 Developers', type: 'Private', members: '2.5K', active: '2 days ago', image: '/images/new/1-1.jpg' },
  { id: 2, name: 'Smart Contract Auditors', type: 'Public', members: '1.2K', active: '5 days ago', image: '/images/new/1-2.jpg' },
  { id: 3, name: 'DeFi Designers', type: 'Private', members: '890', active: '1 week ago', image: '/images/new/1-3.jpg' }
];

const LATEST_NEWS = [
  {
    id: 1,
    category: 'Technology',
    title: 'Understanding Smart Contract Security on Stacks',
    excerpt: 'Learn the best practices for securing your smart contracts and protecting user funds in decentralized applications.',
    date: 'March 1, 2026',
    comments: 24,
    author: 'Timothy Stuart',
    authorAvatar: '/images/member-icon-15.png',
    image: '/images/group-img-5.jpg'
  },
  {
    id: 2,
    category: 'Platform',
    title: 'New Milestone Features Released on STXWORX',
    excerpt: 'Discover the latest updates to our milestone tracking system and how they improve project management for freelancers.',
    date: 'February 28, 2026',
    comments: 15,
    author: 'Sarah Chen',
    authorAvatar: '/images/member-icon-2.png',
    image: '/images/group-img-18.jpg'
  }
];

function Home() {
  const navigate = useNavigate();
  const { connectWallet, userRole, isConnected, getAddress, truncateAddress } = useWallet();

  // Role-based stats
  const stats = userRole === 'client' 
    ? [
        { label: 'jobs posted', value: '12', link: '/jobs', icon: 'briefcase' },
        { label: 'active contracts', value: '5', link: '/projects', icon: 'users' },
        { label: 'in escrow', value: '$8.5K', link: '/projects', icon: 'lock' },
        { label: 'avg rating', value: '4.8', link: '/home', icon: 'star' }
      ]
    : [
        { label: 'jobs available', value: '500+', link: '/jobs', icon: 'search' },
        { label: 'active bids', value: '8', link: '/projects', icon: 'send' },
        { label: 'total earned', value: '$12.3K', link: '/home', icon: 'dollar' },
        { label: 'your rating', value: '4.9', link: '/home', icon: 'star' }
      ];

  return (
    <>
      <style>{`
        .floating-action-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6d9985, #5a8070);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(109, 153, 133, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .floating-action-btn:hover {
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 6px 30px rgba(109, 153, 133, 0.6);
        }

        .floating-action-btn svg {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 768px) {
          .floating-action-btn {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      {userRole === 'client' && (
        <button 
          className="floating-action-btn" 
          onClick={() => navigate('/post-job')}
          title="Post a New Job"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
      <section className="main__heading heading">
        <div className="container">
          <h1 className="heading__title">
            {userRole === 'client' ? (
              <>
                <span>Manage</span> Your Projects <span>&</span> Hire Top Talent
              </>
            ) : (
              <>
                <span>Find</span> Amazing Projects <span>&</span> Grow Your Career
              </>
            )}
          </h1>
        </div>
      </section>
      
      <section className="main__count count">
        <div className="container">
          <div className="count__inner">
            {stats.map((stat, index) => (
              <Link key={index} className="count__item count-item" to={stat.link}>
                <div className="count-item__icon">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="count-item__text">
                  <span>{stat.value}</span>
                </p>
                <p className="count-item__subtext">{stat.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Journey */}
      <section className="main__elevate elevate">
        <div className="container">
          <div className="elevate__inner">
            <div className="elevate__content elevate-content">
              <h2 className="elevate-content__title">
                Start Your Journey <br/>
                on
                <span>
                  STXWORX <br/>
                  Secure Escrow <br/>
                  Smart Contracts <br/>
                </span>
                on Stacks Blockchain
              </h2>
              {isConnected ? (
                <div 
                  className="elevate-content__link" 
                  style={{ 
                    border: 'none', 
                    background: 'rgba(109, 153, 133, 0.2)',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#6d9985" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Wallet Connected</span>
                  <span style={{ color: '#6d9985', fontSize: '14px' }}>
                    ({truncateAddress(getAddress())})
                  </span>
                </div>
              ) : (
                <button 
                  className="elevate-content__link" 
                  onClick={connectWallet}
                  style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
                >
                  Connect Wallet
                </button>
              )}
            </div>
            <div className="elevate__view elevate-view">
              <div className="elevate-view__box">
                <p className="elevate-view__box-text">17K+</p>
                <p className="elevate-view__box-subtext">professionals</p>
              </div>
              <img className="elevate-view__img" src="/images/member-icon-2.png" alt="professional"/>
              <img className="elevate-view__img" src="/images/member-icon-16.png" alt="professional"/>
              <img className="elevate-view__img" src="/images/member-icon-8.png" alt="professional"/>
              <img className="elevate-view__img" src="/images/member-icon-3.png" alt="professional"/>
              <img className="elevate-view__img" src="/images/member-icon-25.png" alt="professional"/>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Groups */}
      <section className="main__groups-section groups-section">
        <div className="container">
          <div className="groups-section__top groups-section-top">
            <h2 className="groups-section-top__title">Featured Communities</h2>
          </div>
          <div className="groups__inner">
            {FEATURED_GROUPS.map(group => (
              <div key={group.id} className="groups__card card">
                <div className="card__inner">
                  <p className="card__suptext card__suptext--green">{group.type} Group</p>
                  <Link className="card__title" to="/home">
                    {group.name}
                  </Link>
                  <ul className="card__list card-list">
                    <li className="card-list__item">
                      <p className="card-list__text">Active {group.active}</p>
                    </li>
                    <li className="card-list__item">
                      <p className="card-list__text">{group.members} Members</p>
                    </li>
                  </ul>
                  <Link className="card-box__poster" to="/home">
                    <img className="card-box__poster-img" src={group.image} alt={group.name}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Projects */}
      <section className="main__new-courses new-courses">
        <div className="container">
          <div className="new-courses__top new-courses-top">
            <h2 className="new-courses-top__title">
              {userRole === 'client' ? 'Active Contracts' : 'New Projects'}
            </h2>
          </div>
          <div className="courses__inner">
            {MOCK_PROJECTS.map(project => (
              <div key={project.id} className="courses__card card">
                <div className="card__inner">
                  <p className="card__suptext card__suptext--pink">{project.category}</p>
                  <Link className="card__title" to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                  <ul className="card__list card-list">
                    <li className="card-list__item">
                      <p className="card-list__rait">
                        <span>{project.milestones}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                        </svg>
                      </p>
                    </li>
                    <li className="card-list__item">
                      <p className="card-list__text">{project.milestones} Milestones</p>
                    </li>
                    <li className="card-list__item">
                      <p className="card-list__text">{project.proposals} Proposals</p>
                    </li>
                    <li className="card-list__item">
                      <Link className="card-list__link" to={`/freelancers/${project.id}`}>
                        by {project.client}
                        <img className="card-list__link-img" src={project.clientAvatar} alt={project.client}/>
                      </Link>
                    </li>
                  </ul>
                  <Link className="card-box__poster" to={`/projects/${project.id}`}>
                    <img className="card-box__poster-img" src={project.image} alt={project.title}/>
                    <p className="card-box__poster-text">{project.budget}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="main__news-section news-section">
        <div className="container">
          <div className="news-section__top news-section-top">
            <h2 className="news-section-top__title">Latest News</h2>
          </div>
          <div className="blog__inner">
            {LATEST_NEWS.map(news => (
              <div key={news.id} className="blog__card card card--blog">
                <div className="card__inner">
                  <Link className="card-box__poster" to="/home">
                    <img className="card-box__poster-img" src={news.image} alt={news.title}/>
                  </Link>
                  <p className="card__suptext card__suptext--purple">{news.category}</p>
                  <Link className="card__title" to="/home">
                    {news.title}
                  </Link>
                  <p className="card__description">
                    {news.excerpt}
                  </p>
                  <ul className="card__list card-list">
                    <li className="card-list__item">
                      <p className="card-list__text">{news.date}</p>
                    </li>
                    <li className="card-list__item">
                      <p className="card-list__text">{news.comments} Comments</p>
                    </li>
                    <li className="card-list__item">
                      <Link className="card-list__link" to="/home">
                        by {news.author}
                        <img className="card-list__link-img" src={news.authorAvatar} alt={news.author}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

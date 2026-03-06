import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import ApplyModal from '../components/ApplyModal';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Full-Stack Web3 Developer Needed',
    description: 'Build a decentralized marketplace on Stacks blockchain with React frontend and Clarity smart contracts. Must have 3+ years experience.',
    budget: 5000,
    category: 'Development',
    postedDate: 'March 3, 2026',
    proposals: 12,
    postedBy: 'TechCorp',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-5.jpg'
  },
  {
    id: 2,
    title: 'UI/UX Designer for DeFi Platform',
    description: 'Design modern, intuitive interface for DeFi lending platform. Figma mockups and prototypes required. Experience with Web3 preferred.',
    budget: 2500,
    category: 'Design',
    postedDate: 'March 4, 2026',
    proposals: 8,
    postedBy: 'DeFi Labs',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-6.jpg'
  },
  {
    id: 3,
    title: 'Smart Contract Security Audit',
    description: 'Security audit for NFT marketplace smart contracts written in Clarity. Must have auditing experience and provide detailed report.',
    budget: 4000,
    category: 'Security',
    postedDate: 'March 2, 2026',
    proposals: 5,
    postedBy: 'NFT Studio',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-5.jpg'
  },
  {
    id: 4,
    title: 'Technical Content Writer',
    description: 'Write technical blog posts and documentation for blockchain platform. 10 articles needed covering DeFi, NFTs, and smart contracts.',
    budget: 1500,
    category: 'Writing',
    postedDate: 'March 1, 2026',
    proposals: 15,
    postedBy: 'Crypto Media',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-6.jpg'
  },
  {
    id: 5,
    title: 'React Native Mobile Developer',
    description: 'Build crypto wallet mobile app with Stacks integration. iOS and Android support required. Experience with Web3 libraries essential.',
    budget: 6000,
    category: 'Development',
    postedDate: 'February 28, 2026',
    proposals: 10,
    postedBy: 'Wallet Inc',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-5.jpg'
  },
  {
    id: 6,
    title: 'Marketing Campaign Manager',
    description: 'Launch marketing campaign for new DeFi protocol. Social media strategy, content creation, and community management included.',
    budget: 3000,
    category: 'Marketing',
    postedDate: 'February 27, 2026',
    proposals: 20,
    postedBy: 'Protocol DAO',
    avatar: '/images/member-icon-24.png',
    image: '/images/group-img-6.jpg'
  }
];

function BrowseJobs() {
  const { userRole } = useWallet();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('date');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const handleSubmitProposal = (proposal) => {
    // TODO: Save to backend
    alert(`Proposal submitted for "${selectedJob.title}"!\n\nBid: ${proposal.bidAmount} STX\nTimeline: ${proposal.timeline}`);
    setShowApplyModal(false);
    setSelectedJob(null);
  };

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All Categories' || job.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {showApplyModal && selectedJob && (
        <ApplyModal 
          job={selectedJob} 
          onClose={() => setShowApplyModal(false)}
          onSubmit={handleSubmitProposal}
        />
      )}
      
      <section className="main__blog blog">
      <div className="container">
        <h1 className="blog__title title">
          {userRole === 'client' ? (
            <>My Posted <span style={{ color: '#d4a843' }}>Jobs</span></>
          ) : (
            <>Browse <span style={{ color: '#d4a843' }}>Jobs</span></>
          )}
        </h1>
        <div className="blog__filters-panel filters-panel">
          <p className="filters-panel__text">
            Showing {filteredJobs.length} of {MOCK_JOBS.length} jobs
          </p>
          <form className="filters-panel__form filters-panel-form" onSubmit={(e) => e.preventDefault()}>
            <div className="filters-panel-form__search search">
              <button className="search__btn" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4182 19 19 15.4183 19 11C19 6.58172 15.4182 3 11 3C6.58169 3 2.99997 6.58172 2.99997 11C2.99997 15.4183 6.58169 19 11 19Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <input 
                className="search__input" 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filters-panel-form__select custom-select">
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All Categories">All Categories</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Security">Security</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div className="filters-panel-form__select custom-select">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="date">Order by Date</option>
                <option value="budget">Order by Budget</option>
                <option value="proposals">Order by Proposals</option>
              </select>
            </div>
          </form>
        </div>
        <div className="blog__inner">
          {filteredJobs.map(job => (
            <div key={job.id} className="blog__card card card--blog">
              <div className="card__inner">
                <Link className="card-box__poster" to={`/jobs/${job.id}`}>
                  <img className="card-box__poster-img" src={job.image} alt={job.title}/>
                </Link>
                <p className="card__suptext card__suptext--purple">
                  {job.category}
                </p>
                <Link className="card__title" to={`/jobs/${job.id}`}>
                  {job.title}
                </Link>
                <p className="card__description">
                  {job.description}
                </p>
                <ul className="card__list card-list">
                  <li className="card-list__item">
                    <p className="card-list__text">
                      {job.postedDate}
                    </p>
                  </li>
                  <li className="card-list__item">
                    <p className="card-list__text">
                      {job.proposals} Proposals
                    </p>
                  </li>
                  <li className="card-list__item">
                    <a className="card-list__link" href="#" onClick={(e) => e.preventDefault()}>
                      by {job.postedBy}
                      <img className="card-list__link-img" src={job.avatar} alt={job.postedBy}/>
                    </a>
                  </li>
                </ul>
                <div className="card__price card-price">
                  <ins className="card-price__current">
                    ${job.budget.toLocaleString()} STX
                  </ins>
                </div>
                {userRole === 'freelancer' && (
                  <button 
                    onClick={() => handleApply(job)}
                    style={{
                      width: '100%',
                      marginTop: '15px',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #c77bc9, #b56ab8)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(199, 123, 201, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Apply Now
                  </button>
                )}
                {userRole === 'client' && (
                  <div style={{
                    marginTop: '15px',
                    padding: '12px',
                    background: 'rgba(109, 153, 133, 0.1)',
                    border: '1px solid rgba(109, 153, 133, 0.3)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#6d9985',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {job.proposals} Proposals Received
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default BrowseJobs;



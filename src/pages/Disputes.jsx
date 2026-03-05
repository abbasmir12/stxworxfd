import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_DISPUTES = [
  {
    id: 1,
    title: 'Payment Release Dispute - NFT Marketplace',
    status: 'Open',
    dateOpened: 'March 3, 2026',
    project: 'NFT Marketplace Development',
    amount: 5000,
    party: 'Client',
    image: '/images/new/event1.jpg'
  },
  {
    id: 2,
    title: 'Milestone Completion Dispute',
    status: 'Under Review',
    dateOpened: 'March 1, 2026',
    project: 'DeFi Dashboard Design',
    amount: 2500,
    party: 'Freelancer',
    image: '/images/new/event1.jpg'
  },
  {
    id: 3,
    title: 'Quality Standards Dispute',
    status: 'Resolved',
    dateOpened: 'February 28, 2026',
    project: 'Smart Contract Audit',
    amount: 4000,
    party: 'Client',
    image: '/images/new/event1.jpg'
  },
  {
    id: 4,
    title: 'Deadline Extension Request',
    status: 'Open',
    dateOpened: 'February 27, 2026',
    project: 'Web3 Mobile App',
    amount: 6000,
    party: 'Freelancer',
    image: '/images/new/event1.jpg'
  }
];

function Disputes() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDisputes = MOCK_DISPUTES.filter(dispute => {
    const matchesSearch = dispute.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'open' && dispute.status === 'Open') ||
                         (filter === 'resolved' && dispute.status === 'Resolved');
    return matchesSearch && matchesFilter;
  });

  const openCount = MOCK_DISPUTES.filter(d => d.status === 'Open').length;
  const resolvedCount = MOCK_DISPUTES.filter(d => d.status === 'Resolved').length;

  const getStatusColor = (status) => {
    if (status === 'Open') return '#FF7361';
    if (status === 'Under Review') return '#FFB800';
    return '#00CF7F';
  };

  return (
    <section className="main__events events">
      <div className="container">
        <h1 className="events__title title">
          Dispute <span style={{ color: '#c96b6b' }}>Resolution</span>
        </h1>
        <div className="events__filters-panel filters-panel">
          <div className="filters-panel__tags tags">
            <a 
              className={`tags__tag ${filter === 'all' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('all'); }}
            >
              All Disputes
              <span>{MOCK_DISPUTES.length}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'open' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('open'); }}
            >
              Open Cases
              <span>{openCount}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'resolved' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('resolved'); }}
            >
              Resolved
              <span>{resolvedCount}</span>
            </a>
          </div>
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
              <select>
                <option value="0">All Types</option>
                <option value="1">Payment Issues</option>
                <option value="2">Quality Issues</option>
              </select>
            </div>
            <div className="filters-panel-form__select custom-select">
              <select>
                <option value="0">Most Recent</option>
                <option value="1">Oldest First</option>
                <option value="2">By Amount</option>
              </select>
            </div>
          </form>
        </div>
        <div className="events__inner">
          {filteredDisputes.map(dispute => (
            <div key={dispute.id} className="events__card card card--events">
              <div className="card__inner">
                <p className="card__text">
                  Opened: {dispute.dateOpened}
                </p>
                <Link className="card__title card--events-title" to={`/disputes/${dispute.id}`}>
                  {dispute.title}
                </Link>
                <ul className="card__list card-list">
                  <li className="card-list__item">
                    <p className="card-list__text">
                      Project: {dispute.project}
                    </p>
                  </li>
                  <li className="card-list__item">
                    <a className="card-list__link" href="#" onClick={(e) => e.preventDefault()}>
                      Raised by {dispute.party}
                    </a>
                  </li>
                </ul>
                <Link className="card-box__poster" to={`/disputes/${dispute.id}`}>
                  <img className="card-box__poster-img" src={dispute.image} alt={dispute.title}/>
                  <p className="card-box__poster-text" style={{ background: getStatusColor(dispute.status) }}>
                    {dispute.status}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Disputes;


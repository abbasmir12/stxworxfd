import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_FREELANCERS = [
  {
    id: 1,
    name: 'Anthony Clark',
    username: '@anthony-clark',
    role: '3d artist',
    location: 'San Francisco, CA, USA',
    avatar: '/images/member-icon-2.png',
    online: true,
    hourlyRate: 45,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 2,
    name: 'Valerie Ferguson',
    username: '@valerie_ui',
    role: 'ux/ui designer',
    location: 'Vancouver, BC, Canada',
    avatar: '/images/member-icon-24.png',
    online: false,
    hourlyRate: 30,
    rating: 4.7,
    reviews: 26
  },
  {
    id: 3,
    name: 'Lilly-Rose Holland',
    username: '@lilly_illustrator',
    role: 'illustrator',
    location: 'London, UK',
    avatar: '/images/member-icon-3.png',
    online: true,
    hourlyRate: 35,
    rating: 4.8,
    reviews: 18
  },
  {
    id: 4,
    name: 'Marcus Chen',
    username: '@marcus_dev',
    role: 'web3 developer',
    location: 'Singapore',
    avatar: '/images/member-icon-16.png',
    online: true,
    hourlyRate: 60,
    rating: 5.0,
    reviews: 41
  },
  {
    id: 5,
    name: 'Sarah Williams',
    username: '@sarah_design',
    role: 'graphic designer',
    location: 'Austin, TX, USA',
    avatar: '/images/member-icon-8.png',
    online: false,
    hourlyRate: 40,
    rating: 4.6,
    reviews: 22
  },
  {
    id: 6,
    name: 'David Kim',
    username: '@david_smart',
    role: 'smart contract dev',
    location: 'Seoul, South Korea',
    avatar: '/images/member-icon-25.png',
    online: true,
    hourlyRate: 55,
    rating: 4.9,
    reviews: 37
  }
];

function Freelancers() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFreelancers = MOCK_FREELANCERS.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <style>{`
        .members__card:hover .card-person-img__image {
          transform: scale(1.1);
        }
        .card-person-img__image {
          transition: transform 0.3s ease;
        }
      `}</style>
      <section className="main__members members">
      <div className="container">
        <h1 className="members__title title">
          Freelancers
        </h1>
        <div className="members__filters-panel filters-panel">
          <div className="filters-panel__tags tags">
            <a 
              className={`tags__tag ${filter === 'all' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('all'); }}
            >
              All Freelancers
              <span>{MOCK_FREELANCERS.length}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'following' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('following'); }}
            >
              Following
              <span>0</span>
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
                <option value="0">Newest Registered</option>
                <option value="1">Most Active</option>
                <option value="2">Top Rated</option>
              </select>
            </div>
          </form>
        </div>
        <div className="members__inner">
          {filteredFreelancers.map(freelancer => (
            <div key={freelancer.id} className="members__card card">
              <div className="card__inner">
                <p className="card__suptext">{freelancer.role}</p>
                <div className="card__options card-options">
                  <div className="card-options__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-options__inner">
                    <a className="card-options__link" href="#" onClick={(e) => { e.preventDefault(); alert('Add friend coming soon!'); }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Add Friend</span>
                    </a>
                    <a className="card-options__link" href="#" onClick={(e) => { e.preventDefault(); alert('Follow coming soon!'); }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Follow</span>
                    </a>
                  </div>
                </div>
                <h3 className="card__title">
                  {freelancer.name.split(' ')[0]}
                  <span>{freelancer.name.split(' ').slice(1).join(' ')}</span>
                </h3>
                <Link className="card__text" to={`/freelancers/${freelancer.id}`}>
                  {freelancer.username}
                </Link>
                <p className="card__subtext">{freelancer.location}</p>
                <div className="card__box card-box">
                  <div className="card-box__person-img card-person-img" style={{ overflow: 'hidden', borderRadius: '50%' }}>
                    <img className="card-person-img__image" src={freelancer.avatar} alt={freelancer.name}/>
                    <span className={`card-person-img__status ${!freelancer.online ? 'card-person-img__status--disabled' : ''}`}></span>
                  </div>
                  <div className="card-box__inner">
                    <div className="card-box__column card-box-column">
                      <p className="card-box-column__text">${freelancer.hourlyRate}</p>
                      <p className="card-box-column__subtext">per hour</p>
                    </div>
                    <div className="card-box__column card-box-column">
                      <p className="card-box-column__text">
                        <span>{freelancer.rating}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                        </svg>
                      </p>
                      <p className="card-box-column__subtext">{freelancer.reviews} reviews</p>
                    </div>
                  </div>
                </div>
                <Link className="card__link" to={`/freelancers/${freelancer.id}`}>
                  Invite
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Freelancers;



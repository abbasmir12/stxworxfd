import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'NFT Marketplace Development',
    status: 'In Progress',
    type: 'public',
    lastActive: '2 hours ago',
    milestones: 4,
    completedMilestones: 2,
    image: '/images/new/g1.jpg'
  },
  {
    id: 2,
    title: 'DeFi Dashboard Design',
    status: 'Active',
    type: 'private',
    lastActive: '1 day ago',
    milestones: 3,
    completedMilestones: 1,
    image: '/images/new/g2.jpg'
  },
  {
    id: 3,
    title: 'Smart Contract Audit',
    status: 'In Progress',
    type: 'public',
    lastActive: '3 hours ago',
    milestones: 5,
    completedMilestones: 3,
    image: '/images/new/g1.jpg'
  },
  {
    id: 4,
    title: 'Web3 Mobile App',
    status: 'Active',
    type: 'private',
    lastActive: '5 hours ago',
    milestones: 6,
    completedMilestones: 2,
    image: '/images/new/g2.jpg'
  },
  {
    id: 5,
    title: 'Blockchain Integration',
    status: 'In Progress',
    type: 'public',
    lastActive: '1 day ago',
    milestones: 4,
    completedMilestones: 1,
    image: '/images/new/g1.jpg'
  },
  {
    id: 6,
    title: 'Token Launch Campaign',
    status: 'Active',
    type: 'public',
    lastActive: '6 hours ago',
    milestones: 3,
    completedMilestones: 2,
    image: '/images/new/g2.jpg'
  }
];

function ActiveProjects() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'my' && true) ||
                         (filter === 'public' && project.type === 'public') ||
                         (filter === 'private' && project.type === 'private');
    return matchesSearch && matchesFilter;
  });

  const allCount = MOCK_PROJECTS.length;
  const myCount = MOCK_PROJECTS.length;
  const publicCount = MOCK_PROJECTS.filter(p => p.type === 'public').length;
  const privateCount = MOCK_PROJECTS.filter(p => p.type === 'private').length;

  return (
    <section className="main__groups groups">
      <div className="container">
        <h1 className="groups__title title">
          Active <span style={{ color: '#6d9985' }}>Projects</span>
        </h1>
        <div className="groups__filters-panel filters-panel">
          <div className="filters-panel__tags tags">
            <a 
              className={`tags__tag ${filter === 'all' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('all'); }}
            >
              All Projects
              <span>{allCount}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'my' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('my'); }}
            >
              My Projects
              <span>{myCount}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'public' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('public'); }}
            >
              Public Projects
              <span>{publicCount}</span>
            </a>
            <a 
              className={`tags__tag ${filter === 'private' ? 'tags__tag--active' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setFilter('private'); }}
            >
              Private Projects
              <span>{privateCount}</span>
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
                <option value="0">Most Recent</option>
                <option value="1">Most Active</option>
                <option value="2">Ending Soon</option>
              </select>
            </div>
          </form>
        </div>
        <div className="groups__inner">
          {filteredProjects.map(project => (
            <div key={project.id} className="groups__card card">
              <div className="card__inner">
                <p className={`card__suptext ${project.type === 'public' ? 'card__suptext--pink' : 'card__suptext--green'}`}>
                  {project.type === 'public' ? 'Public Project' : 'Private Project'}
                </p>
                <div className="card__options card-options">
                  <div className="card-options__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-options__inner">
                    <a className="card-options__link" href="#" onClick={(e) => { e.preventDefault(); alert('View details coming soon!'); }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66659 13.3333H13.3333C13.6869 13.3333 14.026 13.1929 14.2761 12.9428C14.5261 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5261 4.64057 14.2761 4.39052C14.026 4.14048 13.6869 4 13.3333 4H8.04659C7.82698 3.99886 7.61105 3.9435 7.41798 3.83883C7.22492 3.73415 7.0607 3.58341 6.93992 3.4L6.39325 2.6C6.27247 2.41659 6.10825 2.26585 5.91519 2.16117C5.72212 2.0565 5.50619 2.00114 5.28659 2H2.66659C2.31296 2 1.97382 2.14048 1.72378 2.39052C1.47373 2.64057 1.33325 2.97971 1.33325 3.33333V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 8.66669H10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>View Details</span>
                    </a>
                    <a className="card-options__link" href="#" onClick={(e) => { e.preventDefault(); alert('Milestone tracking coming soon!'); }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Milestones</span>
                    </a>
                  </div>
                </div>
                <Link className="card__title" to={`/projects/${project.id}`}>
                  {project.title}
                </Link>
                <ul className="card__list card-list">
                  <li className="card-list__item">
                    <p className="card-list__text">
                      Active {project.lastActive}
                    </p>
                  </li>
                  <li className="card-list__item">
                    <p className="card-list__text">
                      {project.completedMilestones}/{project.milestones} Milestones
                    </p>
                  </li>
                </ul>
                <Link className="card-box__poster" to={`/projects/${project.id}`}>
                  <img className="card-box__poster-img" src={project.image} alt={project.title}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActiveProjects;


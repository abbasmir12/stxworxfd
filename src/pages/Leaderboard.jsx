import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_LEADERBOARD = [
  { id: 1, rank: 1, name: 'Sarah Chen', username: 'sarah_dev', completedJobs: 47, rating: 5.0, avatar: '/images/member-icon-2.png', reviews: 45 },
  { id: 2, rank: 2, name: 'Marcus Johnson', username: 'marcus_ui', completedJobs: 38, rating: 5.0, avatar: '/images/member-icon-3.png', reviews: 36 },
  { id: 3, rank: 3, name: 'Alex Rivera', username: 'alex_security', completedJobs: 28, rating: 4.9, avatar: '/images/member-icon-2.png', reviews: 25 },
  { id: 4, rank: 4, name: 'David Kim', username: 'david_mobile', completedJobs: 22, rating: 4.8, avatar: '/images/member-icon-3.png', reviews: 20 },
  { id: 5, rank: 5, name: 'Emily Watson', username: 'emily_writer', completedJobs: 18, rating: 4.7, avatar: '/images/member-icon-2.png', reviews: 15 },
  { id: 6, rank: 6, name: 'Lisa Martinez', username: 'lisa_marketing', completedJobs: 12, rating: 4.6, avatar: '/images/member-icon-3.png', reviews: 10 },
  { id: 7, rank: 7, name: 'Tom Wilson', username: 'tom_backend', completedJobs: 8, rating: 0, avatar: '/images/member-icon-2.png', reviews: 0 },
  { id: 8, rank: 8, name: 'Nina Patel', username: 'nina_design', completedJobs: 5, rating: 0, avatar: '/images/member-icon-3.png', reviews: 0 }
];

function Leaderboard() {
  const [filter, setFilter] = useState('all');

  const top3 = MOCK_LEADERBOARD.slice(0, 3);
  const rest = MOCK_LEADERBOARD.slice(3);

  const getMedalIcon = (rank) => {
    const colors = {
      1: { bg: '#FFD700', text: '#000' },
      2: { bg: '#C0C0C0', text: '#000' },
      3: { bg: '#CD7F32', text: '#fff' }
    };
    const color = colors[rank];
    return (
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: color.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        color: color.text,
        position: 'absolute',
        top: '16px',
        left: '16px'
      }}>
        {rank}
      </div>
    );
  };

  return (
    <>
      <style>{`
        .groups__card:hover .leaderboard-avatar {
          transform: scale(1.1);
        }
        .leaderboard-avatar {
          transition: transform 0.3s ease;
        }
        .leaderboard-row:hover .leaderboard-avatar {
          transform: scale(1.1);
        }
        .leaderboard-row:hover .freelancer-name {
          color: #FFD700 !important;
        }
      `}</style>
      <section className="main__courses courses">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div>
              <h1 className="courses__title title" style={{ marginBottom: '8px' }}>
                Leaderboard
              </h1>
              <p style={{ color: '#8E95A9', fontSize: '14px' }}>
                Top freelancers ranked by completed contracts and client ratings
              </p>
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="groups__inner" style={{ marginBottom: '60px' }}>
            {top3.map((leader) => (
              <div key={leader.id} className="groups__card card">
                <div className="card__inner" style={{ textAlign: 'center', position: 'relative', paddingTop: '60px' }}>
                  {getMedalIcon(leader.rank)}
                  <Link to={`/freelancers/${leader.id}`} style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '50%' }}>
                    <img 
                      src={leader.avatar} 
                      alt={leader.name}
                      className="leaderboard-avatar"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        marginBottom: '16px',
                        display: 'block'
                      }}
                    />
                  </Link>
                  <Link className="card__title" to={`/freelancers/${leader.id}`} style={{ display: 'block', marginBottom: '20px', fontSize: '18px' }}>
                    {leader.name}
                  </Link>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                    <div>
                      <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px', color: '#fff' }}>{leader.completedJobs}</p>
                      <p style={{ color: '#8E95A9', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Completed</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                        </svg>
                        <span style={{ color: '#fff' }}>{leader.rating}</span>
                      </p>
                      <p style={{ color: '#8E95A9', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="card">
            <div className="card__inner">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', color: '#8E95A9', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rank</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', color: '#8E95A9', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Freelancer</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', color: '#8E95A9', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Completed</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', color: '#8E95A9', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Rating</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', color: '#8E95A9', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Reviews</th>
                  </tr>
                </thead>
                <tbody>
                  {rest.map((leader) => (
                    <tr key={leader.id} className="leaderboard-row" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
                      <td style={{ padding: '20px' }}>
                        <span style={{ color: '#8E95A9', fontSize: '14px', fontWeight: '500' }}>#{leader.rank}</span>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <Link to={`/freelancers/${leader.id}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ overflow: 'hidden', borderRadius: '50%' }}>
                            <img 
                              src={leader.avatar} 
                              alt={leader.name}
                              className="leaderboard-avatar"
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'block'
                              }}
                            />
                          </div>
                          <div>
                            <p className="freelancer-name" style={{ fontWeight: '500', marginBottom: '2px', color: '#fff', transition: 'color 0.3s ease' }}>{leader.name}</p>
                            <p style={{ color: '#8E95A9', fontSize: '12px' }}>@{leader.username}</p>
                          </div>
                        </Link>
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center', fontSize: '15px', fontWeight: '500', color: '#fff' }}>
                        {leader.completedJobs}
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center' }}>
                        {leader.rating > 0 ? (
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '15px', fontWeight: '500', color: '#fff' }}>
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#00CF7F"/>
                            </svg>
                            {leader.rating}
                          </span>
                        ) : (
                          <span style={{ color: '#8E95A9' }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center' }}>
                        {leader.reviews > 0 ? (
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                              </svg>
                            ))}
                          </span>
                        ) : (
                          <span style={{ color: '#8E95A9', fontSize: '12px' }}>No reviews</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leaderboard;

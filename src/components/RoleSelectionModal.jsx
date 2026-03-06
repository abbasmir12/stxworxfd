import { useState } from 'react';

export default function RoleSelectionModal({ onSelectRole }) {
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: 'client',
      title: 'I\'m a Client',
      subtitle: 'Hire talent & manage projects',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#6d9985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#6d9985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['Post jobs', 'Review proposals', 'Manage escrow', 'Track milestones'],
      color: '#6d9985'
    },
    {
      id: 'freelancer',
      title: 'I\'m a Freelancer',
      subtitle: 'Find work & earn crypto',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c77bc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#c77bc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#c77bc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['Browse jobs', 'Submit proposals', 'Deliver work', 'Build reputation'],
      color: '#c77bc9'
    }
  ];

  return (
    <>
      <style>{`
        .role-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .role-modal-content {
          max-width: 900px;
          width: 90%;
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .role-modal-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .role-modal-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .role-modal-subtitle {
          font-size: 16px;
          color: #8E95A9;
        }

        .role-cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        @media (max-width: 768px) {
          .role-cards-container {
            grid-template-columns: 1fr;
          }
        }

        .role-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 40px 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .role-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(109, 153, 133, 0.1), rgba(199, 123, 201, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .role-card:hover::before {
          opacity: 1;
        }

        .role-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .role-card-icon {
          margin-bottom: 20px;
          display: block;
          transition: transform 0.3s ease;
        }

        .role-card:hover .role-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .role-card:hover .role-card-icon svg {
          filter: drop-shadow(0 0 20px currentColor);
        }

        .role-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .role-card-subtitle {
          font-size: 14px;
          color: #8E95A9;
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
        }

        .role-card-features {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .role-card-feature {
          font-size: 14px;
          color: #B8BCC8;
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
        }

        .role-card-feature::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #6d9985;
          font-weight: 700;
        }

        .role-card.client:hover .role-card-feature::before {
          color: #6d9985;
        }

        .role-card.freelancer:hover .role-card-feature::before {
          color: #c77bc9;
        }

        .role-card-button {
          margin-top: 30px;
          width: 100%;
          padding: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .role-card.client .role-card-button:hover {
          background: #6d9985;
          border-color: #6d9985;
        }

        .role-card.freelancer .role-card-button:hover {
          background: #c77bc9;
          border-color: #c77bc9;
        }
      `}</style>

      <div className="role-modal-overlay">
        <div className="role-modal-content">
          <div className="role-modal-header">
            <h2 className="role-modal-title">Welcome to STXWORX</h2>
            <p className="role-modal-subtitle">Choose how you want to get started</p>
          </div>

          <div className="role-cards-container">
            {roles.map(role => (
              <div
                key={role.id}
                className={`role-card ${role.id}`}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
              >
                <span className="role-card-icon">{role.icon}</span>
                <h3 className="role-card-title">{role.title}</h3>
                <p className="role-card-subtitle">{role.subtitle}</p>
                <ul className="role-card-features">
                  {role.features.map((feature, idx) => (
                    <li key={idx} className="role-card-feature">{feature}</li>
                  ))}
                </ul>
                <button 
                  className="role-card-button"
                  onClick={() => onSelectRole(role.id)}
                >
                  Continue as {role.id === 'client' ? 'Client' : 'Freelancer'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

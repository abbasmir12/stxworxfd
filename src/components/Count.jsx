export default function Count() {
  return (
    <>
      <style>{`
        .count-item:hover .icon-overlay {
          opacity: 0;
        }
      `}</style>
      <section className="count">
      <div className="container">
        <div className="count__inner">
          <div className="count-item">
            <div className="count-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="white" strokeWidth="2"/>
                <path d="M16 21V5C16 4.5 15.8 4 15.4 3.6C15 3.2 14.5 3 14 3H10C9.5 3 9 3.2 8.6 3.6C8.2 4 8 4.5 8 5V21" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="count-item__text">500+</div>
            <div className="count-item__subtext">Active Jobs</div>
          </div>
          <div className="count-item">
            <div className="count-item__icon" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: '#000', 
                borderRadius: '8px',
                transition: 'opacity 0.3s ease'
              }} className="icon-overlay"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M17 21V19C17 17.9 16.6 16.9 15.9 16.1C15.2 15.4 14.1 15 13 15H5C3.9 15 2.8 15.4 2.1 16.1C1.4 16.9 1 17.9 1 19V21" stroke="white" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <path d="M23 21V19C23 18.0 22.7 17.1 22.2 16.4C21.7 15.7 20.9 15.1 20 15" stroke="white" strokeWidth="2"/>
                <path d="M16 3.1C16.9 3.5 17.7 4.1 18.2 4.9C18.7 5.6 19 6.5 19 7.5C19 8.5 18.7 9.4 18.2 10.1C17.7 10.9 16.9 11.5 16 11.9" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="count-item__text">1,000+</div>
            <div className="count-item__subtext">Freelancers</div>
          </div>
          <div className="count-item">
            <div className="count-item__icon" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: '#000', 
                borderRadius: '8px',
                transition: 'opacity 0.3s ease'
              }} className="icon-overlay"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M7 11V7C7 5.7 7.5 4.4 8.5 3.5C9.4 2.5 10.7 2 12 2C13.3 2 14.6 2.5 15.5 3.5C16.5 4.4 17 5.7 17 7V11" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="count-item__text">100%</div>
            <div className="count-item__subtext">Secure Escrow</div>
          </div>
          <div className="count-item">
            <div className="count-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="count-item__text">$50K+</div>
            <div className="count-item__subtext">In Escrow</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

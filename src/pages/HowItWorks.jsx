function HowItWorks() {
  return (
    <>
      <style>{`
        .card-box__poster:hover .hover-zoom {
          transform: scale(1.15);
        }
      `}</style>
      <section className="main__blog blog">
      <div className="container">
        <h1 className="blog__title title">
          How It <span style={{ color: '#8b7ba8' }}>Works</span>
        </h1>
        
        <div style={{ marginBottom: '60px' }}>
          <h2 className="title" style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>
            For <span style={{ color: '#00BCFF' }}>Clients</span>
          </h2>
          <div className="blog__inner">
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00BCFF 0%, #0066FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px',
                  overflow: 'hidden'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--purple">Step 1</p>
                <a className="card__title">Connect Wallet & Post Job</a>
                <p className="card__description">
                  Connect your Hiro Wallet and create a job posting with title, description, skills, budget, and deadline. The system automatically splits your budget into 2-4 milestones.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00BCFF 0%, #0066FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--purple">Step 2</p>
                <a className="card__title">Review Proposals</a>
                <p className="card__description">
                  Freelancers submit proposals with their cover letter, bid, and timeline. Review all proposals and select the best candidate for your project.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00BCFF 0%, #0066FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M12 1V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--purple">Step 3</p>
                <a className="card__title">Deploy Escrow</a>
                <p className="card__description">
                  When you accept a proposal, a smart contract is deployed and your funds are locked in escrow. This ensures secure payment for both parties.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00BCFF 0%, #0066FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--purple">Step 4</p>
                <a className="card__title">Approve Milestones</a>
                <p className="card__description">
                  Monitor progress with countdown timers. When freelancer submits deliverables, review and approve to release funds from escrow for each milestone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h2 className="title" style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>
            For <span style={{ color: '#00CF7F' }}>Freelancers</span>
          </h2>
          <div className="blog__inner">
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00CF7F 0%, #00A86B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--green">Step 1</p>
                <a className="card__title">Browse & Apply</a>
                <p className="card__description">
                  Connect your wallet, browse available jobs filtered by skills and budget, then submit proposals with your cover letter and bid amount.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00CF7F 0%, #00A86B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--green">Step 2</p>
                <a className="card__title">Work on Milestones</a>
                <p className="card__description">
                  Once accepted, work through milestones with clear deadlines. Track your progress and communicate with the client throughout the project.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00CF7F 0%, #00A86B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--green">Step 3</p>
                <a className="card__title">Submit Deliverables</a>
                <p className="card__description">
                  Upload your work or provide links (GitHub, Figma, Drive) for each milestone. Client reviews and approves your submission.
                </p>
              </div>
            </div>
            
            <div className="blog__card card card--blog">
              <div className="card__inner">
                <div className="card-box__poster" style={{ 
                  background: 'linear-gradient(135deg, #00CF7F 0%, #00A86B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="hover-zoom">
                    <path d="M20 12V22H4V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="card__suptext card__suptext--green">Step 4</p>
                <a className="card__title">Get Paid & Earn Rewards</a>
                <p className="card__description">
                  Receive payment per milestone approval directly to your wallet. Build reputation on-chain and earn NFT badges for achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default HowItWorks;


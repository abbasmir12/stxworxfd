export default function EliteSection() {
  return (
    <section className="main__elite-section main__elite-section_white" id="elite">
      <div className="container">
        <div className="banner-elite">
          <div className="banner-elite-left">
            <h5>Ready to Get Started?</h5>
            <h4>Join STXWORX Today</h4>
            <p style={{fontSize: '16px', color: '#666', marginTop: '15px', marginBottom: '25px'}}>
              Connect your Hiro Wallet and start working on secure, milestone-based projects powered by Stacks blockchain.
            </p>
            <div className="elite-btn">
              <button 
                className="elevate-content__link elevate-content__link_green" 
                onClick={() => alert('Wallet integration coming soon!')}
                style={{border: 'none', cursor: 'pointer'}}
              >
                Connect Wallet
              </button>
              <a className="elevate-content__link" href="#features">Learn More</a>
            </div>
          </div>
          <div className="banner-elite-right">
            <img src="/images/index/envato-elite.gif" alt="STXWORX Platform" />
          </div>
        </div>
      </div>
    </section>
  );
}

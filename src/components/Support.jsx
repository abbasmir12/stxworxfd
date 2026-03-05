import { Link } from 'react-router-dom';

export default function Support() {
  return (
    <section className="main__groups-section groups-section" id="faq">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">How It Works</h2>
          <p style={{textAlign: 'center', marginTop: '15px', fontSize: '16px', color: '#999'}}>
            Simple, secure, and transparent workflow for everyone
          </p>
        </div>
        <div className="freelancers__inner freelancers__inner_index">
          <div className="freelancers__card card freelancers--card">
            <div className="card__inner">
              <div className="card__inner_img">
                <img src="/images/index/fi_2794992.png" alt="For Clients" />
              </div>
              <h3 className="card__title">For Clients</h3>
              <p className="card__subtext">
                Post your job, review proposals, select a freelancer, and deploy milestone-based escrow. Release funds as work is completed and approved.
              </p>
              <Link className="card__link" to="/home">Get Started</Link>
            </div>
          </div>
          <div className="freelancers__card card freelancers--card">
            <div className="card__inner">
              <div className="card__inner_img">
                <img src="/images/index/fi_3930356.png" alt="For Freelancers" />
              </div>
              <h3 className="card__title">For Freelancers</h3>
              <p className="card__subtext">
                Browse jobs, submit proposals, work on milestones, and receive secure payments directly to your wallet. Build your reputation on-chain.
              </p>
              <Link className="card__link" to="/home">Start Earning</Link>
            </div>
          </div>
          <div className="freelancers__card card freelancers--card">
            <div className="card__inner">
              <div className="card__inner_img">
                <img src="/images/index/fi_6578930.png" alt="Security & Trust" />
              </div>
              <h3 className="card__title">Security & Trust</h3>
              <p className="card__subtext">
                Smart contracts on Stacks blockchain ensure transparent, auditable transactions. Dispute resolution and reputation system provide additional security.
              </p>
              <Link className="card__link" to="/how-it-works">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

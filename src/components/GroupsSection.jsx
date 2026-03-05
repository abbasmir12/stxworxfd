import { Link } from 'react-router-dom';

export default function GroupsSection() {
  return (
    <section className="main__groups-section groups-section main__groups-section_white" id="pages">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">Dashboard Previews</h2>
          <p style={{textAlign: 'center', marginTop: '20px', fontSize: '18px', color: '#666'}}>
            Powerful interfaces for clients and freelancers
          </p>
        </div>
        <div className="demo-imgs">
          <div className="demo-img-first">
            <span><Link to="/home"><img src="/images/home-dark.jpg" alt="Client Dashboard" /></Link></span>
            <h4 className="demo-name">Client Dashboard</h4>
            <p style={{textAlign: 'center', color: '#888', marginTop: '10px'}}>Post jobs, review proposals, manage milestones</p>
          </div>
          <div className="demo-img-second">
            <span><Link to="/home"><img src="/images/home-white.jpg" alt="Freelancer Dashboard" /></Link></span>
            <h4 className="demo-name">Freelancer Dashboard</h4>
            <p style={{textAlign: 'center', color: '#888', marginTop: '10px'}}>Browse jobs, submit proposals, track earnings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

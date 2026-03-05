import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo logo" to="/">
            <img className="logo__img logo__rotate" src="/images/logo-img.svg" alt="img" />
            <img className="logo__text" src="/images/logo.svg" alt="STXWORX" />
          </Link>
          <div className="header__wrapper">
            <div className="header__user-nav user-menu">
              <ul>
                <li><Link className="menu__link" to="/projects">Dashboards</Link></li>
                <li><Link className="menu__link" to="/#features">Features</Link></li>
                <li><Link className="menu__link" to="/subscription">Platform</Link></li>
                <li><Link className="menu__link" to="/how-it-works">How It Works</Link></li>
              </ul>
              <button 
                className="act-btn" 
                onClick={() => alert('Wallet integration coming soon!')}
                style={{border: 'none', cursor: 'pointer'}}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

export default function Header() {
  const { isConnected, connectWallet, disconnectWallet, getAddress, truncateAddress } = useWallet();

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
              {isConnected ? (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: '#6d9985', fontSize: '14px', fontWeight: '500' }}>
                    {truncateAddress(getAddress())}
                  </span>
                  <button 
                    className="act-btn" 
                    onClick={disconnectWallet}
                    style={{border: 'none', cursor: 'pointer', padding: '10px 20px'}}
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  className="act-btn" 
                  onClick={connectWallet}
                  style={{border: 'none', cursor: 'pointer'}}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

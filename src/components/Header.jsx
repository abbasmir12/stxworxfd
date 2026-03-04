export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo logo" href="#">
            <img className="logo__img logo__rotate" src="/images/logo-img.svg" alt="img" />
            <img className="logo__text" src="/images/logo.svg" alt="img" />
          </a>
          <div className="header__wrapper">
            <div className="header__user-nav user-menu">
              <ul>
                <li><a className="menu__link" href="#pages">Dark & Light Theme</a></li>
                <li><a className="menu__link" href="#innerpages">Inner Pages</a></li>
                <li><a className="menu__link" href="#features">Features</a></li>
                <li><a className="menu__link" href="#faq">Support</a></li>
              </ul>
              <a href="#" className="act-btn">Purchase Design Lab</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router';

function Header() {
  return <header className="header">
    <div className="row">
      <div className="row__col row__col_size_6">
        <Link to="/" className="header__logo">
          <img src="logo.svg" alt="CouponAd" className="logo" />
        </Link>
      </div>

      <div className="row__col row__col_size_6">
        <nav className="navigation header__navigation">
          <Link to="/news" activeClassName="navigation__link_active" className="navigation__link">Новости</Link>
          <Link to="/webmaster" activeClassName="navigation__link_active" className="navigation__link">Вебмастерам</Link>
          <Link to="/advertiser" activeClassName="navigation__link_active" className="navigation__link">Рекламодателям</Link>
          <Link to="/login" activeClassName="navigation__link_active" className="navigation__link">Вход</Link>
          <Link to="/signup" activeClassName="navigation__link_active" className="navigation__link">Регистрация</Link>
        </nav>
      </div>
    </div>
  </header>;
}

export default Header;

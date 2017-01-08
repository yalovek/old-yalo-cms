import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return <footer className="footer">
    <div className="row">
      <div className="row__col row__col_size_4">
        <Link to="/">
          <img src="logo.svg" alt="CouponAd" className="logo footer__logo" />
        </Link>
      </div>

      <div className="row__col row__col_size_4">
        <ul className="list">
          <li className="list__item">
            <b>телефон: </b>
            <a href="tel:88001234567" className="footer__link">8 (800) 123-45-67</a>
          </li>

          <li className="list__item">
            <b>email: </b>
            <a href="mailto:mail@couponad.ru" className="footer__link">mail@couponad.ru</a>
          </li>

          <li className="list__item">
            <b>адрес: </b>
            <address className="address">Санкт-Петербург</address>
          </li>
        </ul>
      </div>

      <div className="row__col row__col_size_4">
        <b className="footer__social-title">Мы в социальных сетях</b>

        <ul className="list list_type_inline">
          <li className="list__item">
            <a href="https://vk.com" target="_blank" className="footer__link">
              <span className="icon icon_name_vk fa fa-vk fa-2x"></span>
            </a>
          </li>
          <li className="list__item">
            <a href="https://instagram.com" target="_blank" className="footer__link">
              <span className="icon icon_name_instagram fa fa-instagram fa-2x"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>;
}

export default Footer;

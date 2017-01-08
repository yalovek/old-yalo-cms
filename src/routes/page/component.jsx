import React from 'react';
import components from '../../components';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Component extends React.Component {
  render() {
    return <div>
      <Header />

      <main>{
        this.props.viewer && JSON.parse(this.props.viewer.components).map(
          (component, key) => components[component.name](component.data, key)
        )
      }</main>

      <form className="hero">
        <div className="hero__container">
          <h2 className="hero__title">Напишите нам</h2>

          <div className="row">
            <div className="row__col row__col_size_12">
              <label htmlFor="email" className="label">Email</label>
              <input id="email" name="email" type="email" className="input" />
            </div>
            <div className="row__col row__col_size_12">
              <label htmlFor="theme" className="label">Тема</label>
              <input id="theme" name="theme" className="input" />
            </div>
            <div className="row__col row__col_size_12">
              <label htmlFor="message" className="label">Сообщение</label>
              <textarea id="message" name="message" rows="5" className="input"></textarea>
            </div>
            <div className="row__col row__col_size_4"></div>
            <div className="row__col row__col_size_4">
              <button className="button button_type_block">Отправить</button>
            </div>
            <div className="row__col row__col_size_4"></div>
          </div>
        </div>
      </form>

      <Footer />
    </div>;
  }
}

export default Component;

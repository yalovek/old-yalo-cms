import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import components from '../';
import Header from '../header';
import { Hero, HeroTitle } from '../hero';
import { Grid, GridItem } from '../grid';
import Footer from '../footer';

class Component extends React.Component {
  render() {
    return <div className={css(styles.layout)}>
      <Header />

      <main className={css(styles.content)}>
        {
          Array.isArray(this.props.children) && this.props.children.map(
            (component, key) => components[component.name](component.data, key)
          )
        }

        <Hero>
          <HeroTitle>Напишите нам</HeroTitle>

          <form>
            <Grid>
              <GridItem>
                <label className="label" htmlFor="email">Email</label>
                <input className="input" id="email" name="email" type="email" />
              </GridItem>

              <GridItem>
                <label className="label" htmlFor="theme">Тема</label>
                <input className="input" id="theme" name="theme" />
              </GridItem>

              <GridItem>
                <label className="label" htmlFor="message">Сообщение</label>
                <textarea className="input" id="message" name="message" rows="5"></textarea>
              </GridItem>

              <GridItem>
                <button className="button button_type_block">Отправить</button>
              </GridItem>
            </Grid>
          </form>
        </Hero>
      </main>

      <Footer />
    </div>;
  }
}

export default Component;

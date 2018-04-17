import * as React from 'react';
import Showcase from '../Showcase/Showcase';
const styles = require('./Welcome.scss');

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerWelcome}>
        <div className={styles.innerWelcome}>
          <span className={styles.title}>Don't hate the playa!</span>
          <p className={styles.subtitle}>
            Games straight from developers. No ads. No Flash. No bullshit!<br />
            Play all you want for free, and if you feel like trying your luck in
            developing your own games, feel free to read the contributors guide.
          </p>
        </div>
        <Showcase />
      </div>
    );
  }
}

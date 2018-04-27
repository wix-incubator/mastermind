import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../Search/Search.container';
import { getRootPath } from '../../utilities/routes';
const styles = require('./Header.scss');
const logo = require('../../assets/images/logo.svg');

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerHeaderContainer}>
        <div className={styles.innerHeaderContainer}>
          <Link to={getRootPath()} className={styles.header}>
            <img src={logo} className={styles.logo} />
            <span>Mastermind</span>
          </Link>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

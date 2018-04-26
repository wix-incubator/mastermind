import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../Search/Search.container';
import { getRootPath } from '../../utilities/routes';
const styles = require('./Header.scss');

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerHeaderContainer}>
        <div className={styles.innerHeaderContainer}>
          <Link to={getRootPath()} className={styles.header}>
            MASTERMIND
          </Link>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

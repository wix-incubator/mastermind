import * as React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const styles = require('./Layout.scss');

interface IProps {
  children: JSX.Element[];
}

export default class Layout extends React.Component<IProps> {
  render() {
    return (
      <div id="top" className={styles.layoutContainer}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

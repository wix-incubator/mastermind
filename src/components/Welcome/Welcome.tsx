import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>I am the welcome component!</h1>
        <Link to="/games/1a2b3c">LINK!!!!</Link>
      </React.Fragment>
    );
  }
}

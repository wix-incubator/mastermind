import * as React from 'react';
import { ITech } from '../../types/tech';
const styles = require('./Techs.scss');

interface IProps {
  techs: { [key: string]: ITech };
  techIds: string[];
}

export default class Techs extends React.PureComponent<IProps> {
  renderTechs() {
    const { techs, techIds } = this.props;
    return techIds.map(techId => {
      const tech = techs[techId];
      return (
        <div key={tech.id}>
          <img className={styles.techIcon} src={tech.icon} />
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <span className={styles.header}>Technologies Used</span>
        <div className={styles.iconsContainer}>{this.renderTechs()}</div>
      </React.Fragment>
    );
  }
}

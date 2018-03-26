import * as React from 'react';
import { ITech } from '../../types/tech';
import * as classnames from 'classnames';
import Tooltip from 'react-tooltip-lite';
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
        <Tooltip key={tech.id} content={tech.name} styles={{ marginRight: 22 }}>
          <a href={tech.homepage} target={'_blank'} className={styles.link}>
            <div className={styles.iconContainer}>
              <i className={classnames(tech.icon, styles.techIcon)} />
            </div>
          </a>
        </Tooltip>
      );
    });
  }

  render() {
    return <div className={styles.iconsContainer}>{this.renderTechs()}</div>;
  }
}

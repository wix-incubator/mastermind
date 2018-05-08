import * as React from 'react';
import { ITech } from '../../types/tech';
import * as classnames from 'classnames';
import { Tooltip } from 'react-tippy';
import IconHolder from '../IconHolder/IconHolder';
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
      if (!tech) {
        return null;
      }

      return (
        <Tooltip
          key={tech.id}
          title={tech.name}
          arrow
          style={{ marginRight: 22 }}
        >
          <a href={tech.homepage} target={'_blank'} className={styles.link}>
            <IconHolder>
              <i className={classnames(tech.icon, styles.techIcon)} />
            </IconHolder>
          </a>
        </Tooltip>
      );
    });
  }

  render() {
    return <div className={styles.iconsContainer}>{this.renderTechs()}</div>;
  }
}

import * as React from 'react';
import { ITech } from '../../types/tech';

interface IProps {
  techs: ITech[];
}

export default class Techs extends React.PureComponent<IProps> {
  render() {
    return this.props.techs.map(tech => <span key={tech.id}>{tech.name}</span>);
  }
}

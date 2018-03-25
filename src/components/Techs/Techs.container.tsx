import * as React from 'react';
import { connect } from 'react-redux';
import Techs from './Techs';
import { selectors } from '../../redux/reducers';
import { ITech } from '../../types/tech';
import { IState } from '../../types/state';

const { getTechsData } = selectors;

interface IProps {
  techs: { [key: string]: ITech };
  techIds: string[];
}

class TechsContainer extends React.PureComponent<IProps> {
  render() {
    const { techs, techIds } = this.props;
    return <Techs techs={techs} techIds={techIds} />;
  }
}

const mapStateToProps = (state: IState) => {
  return {
    techs: getTechsData(state)
  };
};

export default connect(mapStateToProps)(TechsContainer);

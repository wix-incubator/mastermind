import * as React from 'react';
import { connect } from 'react-redux';
import KeyPointsOfInterest from './KeyPointsOfInterest';
import {
  IFetchProps,
  fetchKeyPointsOfInterest
} from '../../actions/keyPointsOfInterestActions';
import { selectors } from '../../redux/reducers';
import { IState } from '../../types/state';
const { getKeyPointsOfInterestData } = selectors;

interface IProps {
  url: string;
  fetchKeyPointsOfInterest: (opts: IFetchProps) => any;
  id: string;
  data: string;
}

class KeyPointsOfInterestContainer extends React.PureComponent<IProps> {
  componentDidMount() {
    const { fetchKeyPointsOfInterest, url, id } = this.props;
    fetchKeyPointsOfInterest({ url, id });
  }

  render() {
    return <KeyPointsOfInterest data={this.props.data} />;
  }
}

const mapStateToProps = (state: IState, { id }: { id: string }) => {
  return {
    data: getKeyPointsOfInterestData(state)[id]
  };
};

export default connect(mapStateToProps, { fetchKeyPointsOfInterest })(
  KeyPointsOfInterestContainer
);

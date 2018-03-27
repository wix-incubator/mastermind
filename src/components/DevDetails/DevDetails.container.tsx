import * as React from 'react';
import { connect } from 'react-redux';
import DevDetails from './DevDetails';
import { selectors } from '../../redux/reducers';
import { IDev } from '../../types/dev';
import { IState } from '../../types/state';
import { fetchDev } from '../../actions/devActions';

const { getDevsData } = selectors;

interface IProps {
  dev: IDev;
  fetchDev: (developerGithubId: string) => any;
  developerGithubId: string;
  paypalUsername?: string;
  patreonUsername?: string;
}

class DevDetailsContainer extends React.PureComponent<IProps> {
  componentDidMount() {
    const { fetchDev, developerGithubId } = this.props;
    fetchDev(developerGithubId);
  }

  render() {
    const { dev, paypalUsername, patreonUsername } = this.props;
    return (
      <DevDetails
        dev={dev}
        paypalUsername={paypalUsername}
        patreonUsername={patreonUsername}
      />
    );
  }
}

const mapStateToProps = (
  state: IState,
  { developerGithubId }: { developerGithubId: string }
) => {
  return {
    dev: getDevsData(state)[developerGithubId]
  };
};

export default connect(mapStateToProps, { fetchDev })(DevDetailsContainer);

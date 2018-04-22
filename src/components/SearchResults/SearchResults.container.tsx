import * as React from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { selectors } from '../../redux/reducers';
import { IState } from '../../types/state';

interface IProps {
  results: string[] | null;
}
class SearchResultsContainer extends React.PureComponent<IProps> {
  render() {
    const { results } = this.props;
    if (results) {
      return <SearchResults results={results} />;
    }

    return null;
  }
}

const mapStateToProps = (state: IState) => ({
  results: selectors.getSearchResults(state)
});

export default connect(mapStateToProps)(SearchResultsContainer);

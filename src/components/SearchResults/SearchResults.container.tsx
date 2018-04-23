import * as React from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { selectors } from '../../redux/reducers';
import { IState } from '../../types/state';
import { cancelSearch } from '../../actions/searchActions';

const {
  getSearchResults,
  getSearchQuery,
  getSearchIsOverlayVisible
} = selectors;

interface IProps {
  results: string[] | null;
  query: string;
  isOverlayVisible: boolean;
  cancelSearch: () => any;
}

class SearchResultsContainer extends React.PureComponent<IProps> {
  render() {
    const { results, query, cancelSearch, isOverlayVisible } = this.props;

    if (isOverlayVisible) {
      return (
        <SearchResults
          results={results}
          query={query}
          cancelSearch={cancelSearch}
        />
      );
    }

    return null;
  }
}

const mapStateToProps = (state: IState) => ({
  results: getSearchResults(state),
  query: getSearchQuery(state),
  isOverlayVisible: getSearchIsOverlayVisible(state)
});

export default connect(mapStateToProps, { cancelSearch })(
  SearchResultsContainer
);

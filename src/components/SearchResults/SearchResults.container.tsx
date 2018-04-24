import * as React from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { selectors } from '../../redux/reducers';
import { IState } from '../../types/state';
import { IGame } from '../../types/game';

const {
  getSearchResults,
  getSearchQuery,
  getSearchIsOverlayVisible,
  getGamesData
} = selectors;

interface IProps {
  results: string[] | null;
  query: string;
  isOverlayVisible: boolean;
  games: { [key: string]: IGame };
}

class SearchResultsContainer extends React.PureComponent<IProps> {
  render() {
    const { results, query, isOverlayVisible, games } = this.props;

    if (isOverlayVisible) {
      return <SearchResults results={results} query={query} games={games} />;
    }

    return null;
  }
}

const mapStateToProps = (state: IState) => ({
  results: getSearchResults(state),
  query: getSearchQuery(state),
  isOverlayVisible: getSearchIsOverlayVisible(state),
  games: getGamesData(state)
});

export default connect(mapStateToProps)(SearchResultsContainer);

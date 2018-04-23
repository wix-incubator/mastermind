import { connect } from 'react-redux';
import Search from './Search';
import { selectors } from '../../redux/reducers';
import { searchGame, cancelSearch } from '../../actions/searchActions';
import { IState } from '../../types/state';

const mapStateToProps = (state: IState) => ({
  query: selectors.getSearchQuery(state)
});

export default connect(mapStateToProps, {
  searchGame,
  cancelSearch
})(Search);

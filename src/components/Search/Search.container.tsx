import { connect } from 'react-redux';
import Search from './Search';
import { actions } from '../../redux/reducers';
import { searchGame } from '../../actions/searchActions';
export default connect(null, {
  searchGame,
  cancelSearch: actions.nullifySearchResults
})(Search);

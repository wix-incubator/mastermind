import { connect } from 'react-redux';
import Search from './Search';
import { searchGame } from '../../actions/searchActions';
export default connect(null, { searchGame })(Search);

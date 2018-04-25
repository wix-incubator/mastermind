import { connect } from 'react-redux';
import GameShowcase from './GameShowcase';
import { navigateToGame } from '../../actions/gameActions';
export default connect(null, { navigateToGame })(GameShowcase);

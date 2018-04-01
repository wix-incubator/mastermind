import { Dispatch } from 'redux';
import { IState } from '../types/state';
import { actions } from '../redux/reducers';

export const sendFeedback = () => (dispatch: Dispatch<IState>) => {
  dispatch(actions.toggleFeedbackModalIsVisible());
};

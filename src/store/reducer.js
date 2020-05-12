import {combineReducers} from 'redux';
import {reducer as LoginReducer} from '../screenStore/LoginStore';

export default combineReducers({
  login: LoginReducer,
});

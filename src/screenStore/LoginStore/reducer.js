import {constants} from './index';

const initialState = {
  username: '',
  password: '',
  isLogin: false,
};

export default (state = initialState, action) => {
  if (action.type === constants.CHANGE_INPUT_USER) {
    const newData = Object.assign({}, state);
    newData.username = action.value;
    return newData;
  }
  if (action.type === constants.CHANGE_INPUT_PASS) {
    const newData = Object.assign({}, state);
    newData.password = action.value;
    return newData;
  }
  if (action.type === constants.LOGIN) {
    const newData = Object.assign({}, state);
    newData.isLogin = action.loginStatus;
    return newData;
  }
  if (action.type === constants.EXIT_LOGIN) {
    const newData = Object.assign({}, state);
    newData.isLogin = action.loginStatus;
    return newData;
  }
  return state;
};

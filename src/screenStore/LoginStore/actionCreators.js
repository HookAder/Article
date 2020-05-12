import {ToastAndroid} from 'react-native';
import {constants} from './index';

// change input type username
export const changeUserHandle = value => ({
  type: constants.CHANGE_INPUT_USER,
  value,
});

// change input type password
export const changePassHandle = value => ({
  type: constants.CHANGE_INPUT_PASS,
  value,
});

const loginToApp = loginStatus => ({
  type: constants.LOGIN,
  loginStatus,
});

export const login = (user, pass) => dispatch => {
  // MOCK LOGIN
  if (user === 'test' && pass === '123456') {
    // ToastAndroid.show('登录成功', 1500);
    ToastAndroid.showWithGravity(
      '登录成功',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    dispatch(loginToApp(true));
  } else {
    ToastAndroid.showWithGravity(
      '登录失败',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    dispatch(loginToApp(false));
  }
};

// exit to login
export const exitToLogin = loginStatus => ({
  type: constants.EXIT_LOGIN,
  loginStatus,
});

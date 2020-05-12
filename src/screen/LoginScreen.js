import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Button as AntButton, InputItem, List} from '@ant-design/react-native';
import {actionCreators} from '../screenStore/LoginStore';

const LoginScreen = props => {
  const {navigation} = props;
  const {username, password, isLogin} = props;
  const {handleChangeUserValue, handleChangePassValue, handleLogin} = props;

  React.useEffect(() => {
    if (isLogin) {
      navigation.replace('Index');
    }
    // 当isLogin 发生变化是检测是否登录，登录就跳转到主页面Index
  }, [isLogin, navigation]);

  return (
    <View>
      <View style={styles.layout}>
        <Text style={styles.logoTitle}>热点文章</Text>
      </View>
      <View>
        <List renderHeader={'登录'}>
          {/* <InputItem clear placeholder="欢迎来到,热点文章" editable={false} /> */}
          <Text style={styles.welcomeTitle}>欢迎来到,热点文章</Text>
          <InputItem
            clear
            placeholder="账户"
            value={username}
            onChange={value => handleChangeUserValue(value)}>
            账户
          </InputItem>
          <InputItem
            clear
            placeholder="密码"
            type="password"
            value={password}
            onChange={value => handleChangePassValue(value)}>
            密码
          </InputItem>
          <List.Item>
            <AntButton
              onPress={() => handleLogin(username, password)}
              type="primary">
              登录
            </AntButton>
          </List.Item>
        </List>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = dispatch => ({
  handleChangeUserValue(value) {
    dispatch(actionCreators.changeUserHandle(value));
  },
  handleChangePassValue(value) {
    dispatch(actionCreators.changePassHandle(value));
  },
  handleLogin(user, pass) {
    dispatch(actionCreators.login(user, pass));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  layout: {
    width: Dimensions.get('window').width,
    height: 220,
    backgroundColor: '#ddd',
  },
  logoTitle: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 220,
  },
  welcomeTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

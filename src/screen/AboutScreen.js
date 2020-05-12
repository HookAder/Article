import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button as AntButton} from '@ant-design/react-native';
import {actionCreators} from '../screenStore/LoginStore/index';

const AboutScreen = ({navigation, handleExitLogin}) => {
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <View style={styles.author}>
          <Text style={styles.name}>React Native</Text>
        </View>
        <View style={[styles.author, {height: 55, backgroundColor: '#fff'}]}>
          <Text>沉鱼落木</Text>
        </View>
      </View>
      {/* <Text style={styles.title}>Hello About Screen</Text> */}
      {/* <Button title="退出登录" onPress={() => navigation.replace('Login')} /> */}
      <View style={styles.exit}>
        <AntButton type="warning" onPress={() => handleExitLogin(navigation)}>
          退出登录
        </AntButton>
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   isLogin: state.login.isLogin,
// });

const mapDispatchToProps = dispatch => ({
  handleExitLogin(navigation) {
    dispatch(actionCreators.exitToLogin(false));
    navigation.replace('Login');
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AboutScreen);

const styles = StyleSheet.create({
  layout: {
    height: Dimensions.get('window').height,
  },
  header: {
    width: Dimensions.get('window').width,
    height: 150,
    backgroundColor: '#ddd',
  },
  author: {
    backgroundColor: '#333',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 25,
  },
  exit: {
    width: Dimensions.get('window').width,
    height: 400,
    // height: Dimensions.get('window').height,
    backgroundColor: '#ccc',
    flexDirection: 'column-reverse',
  },
});

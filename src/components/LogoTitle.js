/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const LogoTitle = () => (
  <Image
    style={{width: 50, height: 50}}
    source={require('../static/logo.jpg')}
  />
);

export default LogoTitle;

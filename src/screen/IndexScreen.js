import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Tabs = createBottomTabNavigator();
const IndexScreen = () => {
  return (
    <Tabs.Navigator
      lazy={true}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? // ? 'ios-information-circle'
                'ios-book'
              : 'ios-bookmark';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen
        name="Home"
        options={{title: '首页'}}
        component={HomeScreen}
      />
      <Tabs.Screen
        name="About"
        options={{title: '关于'}}
        component={AboutScreen}
      />
    </Tabs.Navigator>
  );
};

export default IndexScreen;

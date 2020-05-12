import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ArticleScreen from './ArticleScreen';
import ToolScreen from './ToolScreen';

const TopTab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    // tabBarPosition 标签默认位置top
    <TopTab.Navigator
      tabBarPosition="top"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#000',
        pressColor: 'skyblue',
      }}>
      <TopTab.Screen
        name="Article"
        options={{title: '文章'}}
        component={ArticleScreen}
      />
      <TopTab.Screen
        name="Tool"
        options={{title: '工具'}}
        component={ToolScreen}
      />
    </TopTab.Navigator>
  );
};

export default HomeScreen;

import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store';
import LogoTitle from './src/components/LogoTitle';
import IndexScreen from './src/screen/IndexScreen';
import LoginScreen from './src/screen/LoginScreen';
import DetailsScreen from './src/screen/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Index"
            options={{
              // title: 'React Native',
              // headerShown: false,
              headerTitle: props => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={IndexScreen}
          />
          <Stack.Screen
            options={{title: '详情'}}
            name="Details"
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

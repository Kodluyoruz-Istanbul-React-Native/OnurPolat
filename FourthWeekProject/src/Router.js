import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogIn, Main, SignUp} from './screens';
import {Provider} from 'react-redux';
import store from './Redux/index';
const Stack = createStackNavigator();

const Router = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;

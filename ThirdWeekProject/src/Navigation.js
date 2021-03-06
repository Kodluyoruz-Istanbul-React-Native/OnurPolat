import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash, SignIn, LogIn, Profile} from './screens/index';

const STACK1 = createStackNavigator();

const Navigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <STACK1.Navigator
        headerMode={'none'}
        //screenOptions={}
      >
        <STACK1.Screen
          name={showSplash ? 'Splash' : 'LogIn'}
          component={showSplash ? Splash : LogIn}
        />
        <STACK1.Screen name="Login" component={LogIn} />
        <STACK1.Screen name="SignIn" component={SignIn} />
        <STACK1.Screen name="Profile" component={Profile} />
      </STACK1.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};

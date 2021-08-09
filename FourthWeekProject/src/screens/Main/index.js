import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './Home/Home';
import {Profile} from './Profile/Profile';
import {UploadPhoto} from './UpploadPhoto/UploadPhoto';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator tabBarPosition={'bottom'}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Upload Photo'} component={UploadPhoto} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};

export {Main};

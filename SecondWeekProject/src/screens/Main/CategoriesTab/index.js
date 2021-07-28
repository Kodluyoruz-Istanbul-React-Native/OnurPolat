import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Movie} from './Movie';
import {TabBar} from './TabBar';
const Tab = createMaterialTopTabNavigator();

const CategoriesTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(40, 40, 40, 1)',
      }}>
      <Tab.Navigator tabBar={TabBar}>
        <Tab.Screen name={'Action'} component={Movie} />
        <Tab.Screen name={'Drama'} component={Movie} />
        <Tab.Screen name={'Sci-Fi'} component={Movie} />
        <Tab.Screen name={'Thriller'} component={Movie} />
        <Tab.Screen name={'Adventure'} component={Movie} />
        <Tab.Screen name={'History'} component={Movie} />
        <Tab.Screen name={'Fantasy'} component={Movie} />
        <Tab.Screen name={'Comedy'} component={Movie} />
        <Tab.Screen name={'Family'} component={Movie} />
        <Tab.Screen name={'Horror'} component={Movie} />
        <Tab.Screen name={'Crime'} component={Movie} />
        <Tab.Screen name={'Animation'} component={Movie} />
      </Tab.Navigator>
    </View>
  );
};

export {CategoriesTab};

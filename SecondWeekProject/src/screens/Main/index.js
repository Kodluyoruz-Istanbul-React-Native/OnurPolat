import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from './HomeTab';
import {CategoriesTab} from './CategoriesTab';
import {FavoritesTab} from './FavoritesTab';
import {SettingsTab} from './SettingsTab';
import {TabBar} from './TabBar';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(40, 40, 40, 1)',
      }}>
      <Tab.Navigator tabBar={TabBar}>
        <Tab.Screen name={'HomeTab'} component={HomeTab} />
        <Tab.Screen name={'CategoriesTab'} component={CategoriesTab} />
        <Tab.Screen name={'FavoritesTab'} component={FavoritesTab} />
        <Tab.Screen name={'SettingsTab'} component={SettingsTab} />
      </Tab.Navigator>
    </View>
  );
};

export {Main};

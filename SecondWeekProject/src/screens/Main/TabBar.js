import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TabBar = ({state: {index}, navigation: {jumpTo}}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.tabButton}
        onPress={() => jumpTo('HomeTab')}>
        <AntDesign
          name={'home'}
          color={index === 0 ? 'rgba(120, 184, 76, 1)' : '#444444'}
          size={32}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tabButton}
        onPress={() => jumpTo('CategoriesTab')}>
        <MaterialIcons
          name={'category'}
          color={index === 1 ? 'rgba(120, 184, 76, 1)' : '#444444'}
          size={32}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tabButton}
        onPress={() => jumpTo('FavoritesTab')}>
        <Fontisto
          name={'favorite'}
          color={index === 2 ? 'rgba(120, 184, 76, 1)' : '#444444'}
          size={32}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tabButton}
        onPress={() => jumpTo('SettingsTab')}>
        <AntDesign
          name={'setting'}
          color={index === 3 ? 'rgba(120, 184, 76, 1)' : '#444444'}
          size={32}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111111',
  },
  tabButton: {paddingVertical: 10},
});

export {TabBar};

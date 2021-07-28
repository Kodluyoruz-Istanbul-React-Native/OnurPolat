import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

const tabs = [
  {title: 'Action', name: 'Action'},
  {title: 'Drama', name: 'Drama'},
  {title: 'Sci-Fi', name: 'Sci-Fi'},
  {title: 'Thriller', name: 'Thriller'},
  {title: 'Adventure', name: 'taAdventurekip'},
  {title: 'History', name: 'History'},
  {title: 'Fantasy', name: 'Fantasy'},
  {title: 'Comedy', name: 'Comedy'},
  {title: 'Family', name: 'Family'},
  {title: 'Horror', name: 'Horror'},
  {title: 'Crime', name: 'Crime'},
  {title: 'Animation', name: 'Animation'},
];

const TabBar = ({state: {index}, navigation: {jumpTo}}) => {
  const item = ({title, name, i}) => (
    <TouchableOpacity
      style={style.tabButton}
      onPress={() => jumpTo(name)}
      key={i}>
      <Text style={style.buttonTitle}>{title}</Text>

      <View
        style={{
          height: 3,
          width: '80%',
          backgroundColor: 'rgba(120, 184, 76, 1)',
          marginTop: 4,
          borderRadius: 10,
          alignSelf: 'center',
          display: index === i ? 'flex' : 'none',
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((d, i) => item({...d, i}))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(40, 40, 40, 1)',
  },
  tabButton: {
    paddingVertical: 10,
  },
  tabButtonActive: {},
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export {TabBar};

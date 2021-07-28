import React from 'react';
import {View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Fontisto name={'film'} color={'red'} size={162} />
    </View>
  );
};

export {Splash};

import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/index';
import {Navigation} from './Navigation';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export {App};

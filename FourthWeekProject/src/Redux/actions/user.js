import * as types from '../types/user';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const USER_SIGNUP =
  (mail, pass, name, userName, navigation) => async dispatch => {
    auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(d => {
        const uid = d.user.uid;

        dispatch({
          type: types.USER_SIGNUP,
          payload: {
            uid,
          },
        });
        database()
          .ref(`USERS/${uid}/info`)
          .set({
            name: name,
            userName: userName,
          })
          .then(() => console.log('Data set.'));
        navigation.navigate('LogIn');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
export const USER_LOGIN = (mail, pass, navigation) => async dispatch => {
  auth()
    .signInWithEmailAndPassword(mail, pass)
    .then(d => {
      const uid = d.user.uid;
      dispatch({
        type: types.USER_LOGIN,
        payload: {
          uid,
        },
      });
      navigation.navigate('Main');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

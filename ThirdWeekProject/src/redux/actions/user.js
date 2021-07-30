import * as types from '../types/user';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const USER_SIGNIN = (mail, pass, name, userName) => async dispatch => {
  auth()
    .createUserWithEmailAndPassword(mail, pass)
    .then(d => {
      console.log('test', d);
      const uid = d.user.uid;

      database()
        .ref(`/USERS/${uid}/info`)
        .set({
          name: name,
          username: userName,
        })
        .then(() => console.log('Data set.'));

      dispatch({
        type: types.USER_SIGNIN,
        payload: {
          uid,
        },
      });
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
export const USER_LOGIN = (mail, pass, name, userName) => async dispatch => {
  auth()
    .signInWithEmailAndPassword(mail, pass)
    .then(d => {
      console.log('test', d);
      const uid = d.user.uid;

      database()
        .ref(`USERS/${uid}/info`)
        .on('value', snapshot => {
          name = snapshot.val().name;
          userName = snapshot.val().username;
        });

      dispatch({
        type: types.USER_LOGIN,
        payload: {
          uid,
        },
      });
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
export const USER_LOGOUT = () => async dispatch => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));

  dispatch({
    type: types.USER_LOGOUT,
  });
};

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {name, userName, mail} from '../../redux/actions/user';

import {connect} from 'react-redux';
import {USER_LOGOUT} from '../../redux/actions/user';

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = dispatch => ({
  USER_LOGOUT: () => dispatch(USER_LOGOUT()),
});

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {navigation} = props;

  const {user} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Profile</Text>

      <View style={styles.View}>
        <Text style={styles.Text}> </Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}> </Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}> </Text>
      </View>
      <TouchableOpacity
        onPress={() => [props.USER_LOGOUT(), navigation.navigate('Login')]}
        style={styles.logOutBtn}>
        <Text style={styles.logOutText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  View: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  Text: {
    height: 50,
    color: '#fb5b5a',
  },

  logOutBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
export {Profile};

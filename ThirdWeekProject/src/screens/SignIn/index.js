import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {USER_SIGNIN} from '../../redux/actions/user';

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = dispatch => ({
  USER_SIGNIN: (mail, pass, name, userName) =>
    dispatch(USER_SIGNIN(mail, pass, name, userName)),
});
const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {navigation} = props;
  const [mail, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const {user} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HeyAPP</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name.."
          placeholderTextColor="white"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor="white"
          value={userName}
          onChangeText={setUserName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="white"
          value={mail}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="white"
          value={pass}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        onPress={() => [
          props.USER_SIGNIN(mail, pass, name, userName),
          navigation.navigate('Login'),
        ]}
        style={styles.signInBtn}>
        <Text style={styles.loginText}>Signip</Text>
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
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#fb5b5a',
  },

  signInBtn: {
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
export {SignIn};

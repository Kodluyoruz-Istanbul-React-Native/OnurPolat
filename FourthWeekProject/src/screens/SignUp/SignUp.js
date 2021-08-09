import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {USER_SIGNUP} from '../../Redux/actions/user';

const SignUp = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [mail, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const signup = () => {
    dispatch(USER_SIGNUP(mail, pass, name, userName, navigation));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>MyPhoto</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name.."
            placeholderTextColor="white"
            value={name}
            onChangeText={n => setName(n)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="white"
            value={userName}
            onChangeText={u => setUserName(u)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            value={mail}
            onChangeText={e => setEmail(e)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            value={pass}
            onChangeText={p => setPassword(p)}
          />
        </View>
        <TouchableOpacity onPress={() => signup()} style={styles.signInBtn}>
          <Text style={styles.loginText}>Signip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.loginText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
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

export {SignUp};

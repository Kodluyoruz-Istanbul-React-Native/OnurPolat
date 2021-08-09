import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {USER_LOGIN} from '../../Redux/actions/user';
import {useNavigation} from '@react-navigation/native';

const LogIn = props => {
  const uid = useSelector(state => state.user.uid);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mail, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const LogIn = () => {
    dispatch(USER_LOGIN(mail, pass, navigation));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>MyPhoto</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            value={mail}
            onChangeText={d => setEmail(d)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            value={pass}
            onChangeText={d => setPassword(d)}
          />
        </View>
        <TouchableOpacity onPress={() => LogIn()} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.loginText}>SignIn</Text>
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

  loginBtn: {
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

export {LogIn};

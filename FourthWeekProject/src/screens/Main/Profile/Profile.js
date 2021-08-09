import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {uid} = useSelector(state => state.user.uid);
  const [data, setData] = useState();
  const navigation = useNavigation();

  const fetchData = async () => {
    const fetchdata = await database().ref(`/USERS/${uid}/info`).once('value');
    const result = Object.values(fetchdata._snapshot.value).reverse().join(' ');
    setData(result);
  };

  useEffect(() => fetchData(), []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.head}>USER</Text>
        <Text>{data}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LogIn')}
          style={styles.LogOut}>
          <Text style={styles.LogOutText}>LogOut</Text>
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
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
    color: 'purple',
    textAlign: 'center',
  },
  LogOutText: {
    color: 'white',
  },

  LogOut: {
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

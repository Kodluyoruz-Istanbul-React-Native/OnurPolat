import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
const deviceSize = Dimensions.get('window');

const Home = () => {
  const {uid} = useSelector(state => state.user.uid);
  const [photo, setPhoto] = useState();

  const renderSeperator = () => <View style={styles.seperator} />;
  const renderPhoto = ({item}) => (
    <Image style={styles.image} source={{url: item}} />
  );
  const fetchData = async () => {
    const fetchdata = await database().ref(`/USERS/${uid}/posts`).once('value');
    const result = Object.values(fetchdata._snapshot.value);
    setPhoto(result);
  };

  useEffect(() => fetchData(), []);
  console.log(photo);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Home</Text>
      <FlatList
        data={photo}
        renderItem={renderPhoto}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  image: {
    width: deviceSize.width,
    minHeight: deviceSize.height / 3,
  },
});

export {Home};

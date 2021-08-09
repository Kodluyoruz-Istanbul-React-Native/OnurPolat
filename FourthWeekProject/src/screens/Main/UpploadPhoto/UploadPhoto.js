import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';

import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';

const UploadPhoto = () => {
  const {uid} = useSelector(state => state.user.uid);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log(source);
        console.log(response.assets[0].uri);
        setImage(source);
      }
    });
  };
  const uploadImage = async () => {
    const {uri} = image;
    const filename = `images/${uid}/${uri.substring(uri.lastIndexOf('/') + 1)}`;

    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    setUploading(true);
    setTransferred(0);

    const task = storage().ref(filename).putFile(uploadUri);

    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });

    try {
      await task;
      const url = await storage().ref(filename).getDownloadURL();
      await database().ref(`USERS/${uid}/posts`).set({url});
    } catch (e) {
      console.error(e);
    }

    setUploading(false);

    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );

    setImage(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{uri: image.uri}} style={styles.imageBox} />
        ) : null}
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </View>
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  selectButton: {
    borderRadius: 25,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 25,
    width: 150,
    height: 50,
    backgroundColor: '#fb5b5a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});
export {UploadPhoto};

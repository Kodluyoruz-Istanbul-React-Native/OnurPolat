import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
  },
  releaseYear: {
    fontWeight: '100',
  },
  genre: {
    marginBottom: 10,
    marginTop: 10,
  },
  reating: {},
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MovieCard.styles';
const MovieCard = ({movie}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{url: movie.image}} />
      <View style={styles.inner_container}>
        <View style={styles.info_container}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseYear}>{movie.releaseYear} </Text>
        </View>
        <Text style={styles.genre}>Genre: {movie.genre.join(',')}</Text>
        <Text style={styles.rating}>Rating: {movie.rating}</Text>
      </View>
    </View>
  );
};

export default MovieCard;

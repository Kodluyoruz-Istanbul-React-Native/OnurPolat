import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import MovieCard from '../../../../components/MovieCard';
import movie_data from '../../HomeTab/movies.json';

const Movie = categories => {
  const renderMovie = ({item}) => <MovieCard movie={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const MovieList = movie_data.filter(movie => {
    return movie.genre.indexOf(categories.route.name) > -1;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Legend Movies </Text>
      <FlatList
        data={MovieList}
        renderItem={renderMovie}
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
});

export {Movie};

import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import MovieCard from '../../../components/MovieCard';
import SearchBar from '../../../components/SearchBar';
import movie_data from './movies.json';

const HomeTab = () => {
  const renderMovie = ({item}) => <MovieCard movie={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const [movieList, setMovieList] = useState(movie_data);
  const handleSearch = text => {
    const filteredMovieList = movie_data.filter(movie => {
      const searchedText = text.toLowerCase();
      const title = movie.title.toLocaleLowerCase();
      return title.indexOf(searchedText) > -1;
    });
    setMovieList(filteredMovieList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Legend Movies </Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={movieList}
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

export {HomeTab};

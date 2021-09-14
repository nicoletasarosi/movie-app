import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Button from '../components/Button';
import MovieCard from '../components/MovieCard';
import {getMovieById} from '../api/movie';
import {Heading1} from '../typography/Headlines';
import {BodyText2} from '../typography/BodyTexts';
import {selectFavorites} from '../redux/selectors';

const FavoritesScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const favoriteMoviesIds = useSelector(selectFavorites);

  const getFavouriteMovies = async () => {
    setIsLoading(true);
    const moviesData = await Promise.all(
      favoriteMoviesIds.map(id => getMovieById(id)),
    );
    setMovies(moviesData);
    setIsLoading(false);
  };

  useEffect(() => {
    const clearFunc = navigation.addListener('focus', getFavouriteMovies);

    return clearFunc;
  }, [navigation, favoriteMoviesIds]);

  const renderListItem = ({item}) => {
    return (
      <MovieCard
        item={item}
        onPress={() =>
          navigation.navigate('Movie Details', {movieId: item.imdbID})
        }
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <View>
          <Heading1 style={styles.sectionTitle}>My Favorite Movies</Heading1>
          <Button
            onPress={() => navigation.navigate('Search Movies')}
            text={'Search for movies/shows'}
            style={styles.searchButton}
          />
        </View>
        {isLoading && <ActivityIndicator />}
        <FlatList data={movies} renderItem={renderListItem} />

        {movies.length === 0 && (
          <View style={styles.noMoviesList}>
            <BodyText2>No movies in your favorites list</BodyText2>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#EBF0FF',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  noMoviesList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
});

export default FavoritesScreen;

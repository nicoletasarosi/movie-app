import React, {useState, useCallback} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {getMoviesByName} from '../api/movie';
import MovieCard from '../components/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {selectHidden} from '../redux/selectors';
import {setErrorAction} from '../redux/actions';

const SearchMoviesScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const hiddenMovies = useSelector(selectHidden);
  const dispatch = useDispatch();

  const filterMovies = useCallback(
    movies => {
      const filteredMovies = movies.filter(
        movie => hiddenMovies.indexOf(movie.imdbID) < 0,
      );
      return filteredMovies;
    },
    [hiddenMovies],
  );

  const searchMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getMoviesByName(searchText, page);
      const filteredMovies = filterMovies(response.Search);
      setMovies(filteredMovies);
    } catch (e) {
      dispatch(setErrorAction('Something went wrong! Try again'));
    }
    setIsLoading(false);
  }, [dispatch, filterMovies, page, searchText]);

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

  const loadMoreData = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const resp = await getMoviesByName(searchText, newPage);
    const filteredMovies = filterMovies(resp.Search);
    const allMovies = movies.concat(filteredMovies);
    setMovies(allMovies);
    setPage(newPage);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder={'Search your favorite movie...'}
        onChangeText={setSearchText}
        onSubmitEditing={searchMovie}
      />
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={movies}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index}
        onEndReachedThreshold={0}
        onEndReached={loadMoreData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#EBF0FF',
    height: '100%',
  },
  searchInput: {
    marginTop: 30,
    marginBottom: 15,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 50,
    borderColor: '#DFE1E6',
    backgroundColor: '#FAFAFA',
  },
});

export default SearchMoviesScreen;

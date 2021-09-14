import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Button from '../components/Button';
import {getMovieById} from '../api/movie';
import {Heading2} from '../typography/Headlines';
import {
  BodyText2,
  BodyText3,
  BodyText4,
} from '../typography/BodyTexts';
import {Subtitle2} from '../typography/UtilityTexts';
import {selectFavorites, selectHidden} from '../redux/selectors';
import {
  removeFavoriteAction,
  addFavoriteAction,
  removeHiddenAction,
  addHiddenAction,
} from '../redux/actions';

const MovieDetailsScreen = ({route}) => {
  const {movieId} = route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const isMovie = !movie?.totalSeasons;
  const favoriteMoviesIds = useSelector(selectFavorites);
  const hiddenMoviesIds = useSelector(selectHidden);
  const dispatch = useDispatch();

  const getMovieData = async () => {
    setIsLoading(true);
    const response = await getMovieById(movieId);
    setMovie(response);
    const isFav = favoriteMoviesIds.indexOf(movieId) >= 0;
    const isHidd = hiddenMoviesIds.indexOf(movieId) >= 0;
    setIsFavourite(isFav);
    setIsHidden(isHidd);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, [movieId]);

  const onFavouritePress = async () => {
    if (isFavourite) {
      dispatch(removeFavoriteAction(movieId));
    } else {
      dispatch(addFavoriteAction(movieId));
    }
    setIsFavourite(!isFavourite);
  };

  const onHidePress = () => {
    if (isHidden) {
      dispatch(removeHiddenAction(movieId));
    } else {
      dispatch(addHiddenAction(movieId));
    }
    setIsHidden(!isHidden);
  };

  if (!movie) {
    return null;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.ImageAndTitleWrapper}>
            <View style={styles.posterWrapper}>
              <Image style={styles.poster} source={{uri: movie.Poster}} />
            </View>
            <View style={styles.aboutMovie}>
              <Heading2 style={styles.movieTitle}>{movie.Title}</Heading2>
              <BodyText3>{movie.Year}</BodyText3>
            </View>
          </View>
          <Subtitle2 style={styles.generalInfo}>General Info</Subtitle2>
          <BodyText2 style={styles.marginBottom}>
            {movie.Ratings[0].Value}, {movie.Type}
          </BodyText2>
          <Subtitle2 style={styles.marginBottom}>
            Genre: {movie.Genre}
          </Subtitle2>
          {isMovie ? (
            <BodyText4>{movie.Country}</BodyText4>
          ) : (
            <BodyText4>{movie.totalSeasons} seasons</BodyText4>
          )}
          <Button
            text={
              isFavourite ? 'Remove from favourites' : 'Add to my favorites'
            }
            onPress={onFavouritePress}
          />
          <Button
            text={isHidden ? 'Do not hide anymore' : 'Hide'}
            onPress={onHidePress}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 15,
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  ImageAndTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  aboutMovie: {
    marginLeft: 8,
    flex: 1,
  },
  posterWrapper: {
    height: 300,
    marginBottom: 24,
    flex: 1,
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  movieTitle: {
    marginBottom: 5,
  },
  generalInfo: {
    marginTop: 10,
    marginBottom: 3,
  },
  marginBottom: {
    marginBottom: 3,
  },
});

export default MovieDetailsScreen;

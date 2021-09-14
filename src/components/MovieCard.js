import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Subtitle1} from '../typography/UtilityTexts';
import {BodyText1, BodyText2, BodyText3} from '../typography/BodyTexts';

const MovieCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.movieCard} onPress={onPress}>
      <Image style={styles.poster} source={{uri: item.Poster}} />
      <View style={styles.movieDetails}>
        <Subtitle1 style={styles.movieTitle}>{item.Title}</Subtitle1>
        <BodyText1>
          Type: <BodyText2>{item.Type}</BodyText2>
        </BodyText1>
        <BodyText3 style={styles.year}>{item.Year}</BodyText3>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 250,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.23,
    shadowRadius: 7,
    backgroundColor: '#FAFAFA',
    marginTop: 15,
    padding: 8,
  },
  movieDetails: {
    padding: 10,
  },
  poster: {
    width: '50%',
    height: '100%',
  },
  movieTitle: {
    width: '100%',
    marginBottom: 10,
  },
  year: {
    marginTop: 5,
  },
});

export default MovieCard;

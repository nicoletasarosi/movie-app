import {
  ADD_FAVORITE,
  ADD_HIDDEN,
  REMOVE_FAVORITE,
  REMOVE_HIDDEN,
  SET_ERROR,
} from './actionTypes';

export const removeFavoriteAction = movieId => ({
  type: REMOVE_FAVORITE,
  payload: {
    id: movieId,
  },
});

export const addFavoriteAction = movieId => ({
  type: ADD_FAVORITE,
  payload: {
    id: movieId,
  },
});

export const removeHiddenAction = movieId => ({
  type: REMOVE_HIDDEN,
  payload: {
    id: movieId,
  },
});

export const addHiddenAction = movieId => ({
  type: ADD_HIDDEN,
  payload: {
    id: movieId,
  },
});

export const setErrorAction = error => ({
  type: SET_ERROR,
  payload: {
    error,
  },
});

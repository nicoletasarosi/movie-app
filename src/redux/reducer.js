import {
  ADD_FAVORITE,
  ADD_HIDDEN,
  REMOVE_FAVORITE,
  REMOVE_HIDDEN,
} from './actionTypes';

const INITIAL_STATE = {
  favorites: [],
  hiddenItems: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  const {favorites, hiddenItems} = state;
  switch (action.type) {
    case REMOVE_FAVORITE:
      const newFavorites = favorites.filter(
        favorite => favorite !== action.payload.id,
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...favorites, action.payload.id],
      };
    case REMOVE_HIDDEN:
      const newHiddenItems = hiddenItems.filter(
        hiddenItem => hiddenItem !== action.payload.id,
      );
      return {
        ...state,
        hiddenItems: newHiddenItems,
      };
    case ADD_HIDDEN:
      return {
        ...state,
        hiddenItems: [...hiddenItems, action.payload.id],
      };
    default:
      return state;
  }
};

export default appReducer;

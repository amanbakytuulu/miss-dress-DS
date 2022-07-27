/* import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFavorite } from "../../types/FavoritesTypes/FavoritesTypes";

const fav =
  (localStorage.getItem("favorites") && localStorage.getItem("favorites")) ||
  "[]";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: JSON.parse(fav) || [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      console.log(action.payload);
      state.favorites = [...state.favorites, action.payload.item];
      localStorage.setItem("favorites", state.favorites);
    },
    deleteFromFavorites: (state, action) => {
      const newFav = state.favorites.filter(
        (item: IFavorite) => item.id !== action.payload.item.id
      );
      state.favorites = newFav;
      localStorage.setItem("favorites", state.favorites);
    },
  },
});
export const { addToFavorite, deleteFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
 */

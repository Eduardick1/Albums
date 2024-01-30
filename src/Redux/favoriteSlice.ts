import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "utils/types";

const initialState: IPhoto[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<IPhoto>) => {
      if (state.some((photo) => photo.id === action.payload.id))
        return state.filter((photo) => photo.id !== action.payload.id);
      else state.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

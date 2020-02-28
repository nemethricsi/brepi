import { createSlice } from '@reduxjs/toolkit';

export const beerSlice = createSlice({
  name: 'beer',
  initialState: {
    beers: [],
    page: 1,
  },
  reducers: {
    downloadBeers: (state, action) => {
      state.beers = action.payload;
    },
  },
});

export const selectBeers  = state => state.beers;
export const { downloadBeers } = beerSlice.actions;

export default beerSlice.reducer;

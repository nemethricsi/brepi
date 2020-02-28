import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import beerReducer from './features/beers/beerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    beers: beerReducer,
  },
});

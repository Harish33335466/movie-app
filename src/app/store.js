import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import movieReducer from '../features/movies/MovieSlice';
// import { userReducer } from '../features/user/UserSlice';
import moviesReducer from '../features/movies/MovieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from "../../api/Movieapi";
import { APIKey } from "../../api/MovieapiKey";

const initialState = {
  movies: {},
  user: null,
  loading: false,
  watchlist: [],
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await Movieapi.get(
      `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    return response.data;
  }
);

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    cleanup: (state, action) => {
      state.movies = {};
    },
    watchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
    showloading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { login, logout, cleanup, watchlist, showloading } =
  MovieSlice.actions;
export const getallmovies = (state) => state.movies.movies;
export const watchlistmovies = (state) => state.movies.watchlist;
export const selectUser = (state) => state.movies.user;
export const isLoading = (state) => state.movies.loading;

export default MovieSlice.reducer;

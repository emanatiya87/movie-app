import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: movieSliceReducer,
  },
});
export default store;

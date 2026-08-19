import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./slices/moviesSlice";
import authSliceReducer from "./slices/authSlice";
const store = configureStore({
  reducer: {
    movies: movieSliceReducer,
    auth: authSliceReducer,
  },
});
export default store;

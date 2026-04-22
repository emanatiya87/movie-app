import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("movies/fetchData", async () => {
  const res = await axios.get("http://localhost:3000/results");
  const data = await res.data;
  return data;
});
export const handleDelete = createAsyncThunk(
  "movies/handleDelete",
  async (id) => {
    await axios.delete(`http://localhost:3000/results/${id}`).then(() => {
      console.log(`${id} deleted`);
    });
    return id;
  },
);
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
    favorites: JSON.parse(localStorage.getItem("fav-movies")) || [],
  },
  reducers: {
    addToFav: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.find((m) => m.id === movie.id);
      if (!exists) {
        state.favorites.push(movie);
      }
      localStorage.setItem("fav-movies", JSON.stringify(state.favorites));
    },

    removeFromFav: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.filter((m) => m.id !== id);
      localStorage.setItem("fav-movies", JSON.stringify(state.favorites));
    },
  },

  extraReducers: (builder) => {
    builder
      // fetch data
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      })
      // delete movie
      .addCase(handleDelete.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload,
        );
      })

      .addCase(handleDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  },
});
export const { addToFav, removeFromFav } = movieSlice.actions;
export default movieSlice.reducer;

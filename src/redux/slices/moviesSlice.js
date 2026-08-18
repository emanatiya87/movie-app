import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, saveMovies } from "../../api/jsonbin";

export const fetchData = createAsyncThunk("movies/fetchData", async () => {
  return await getMovies();
});

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie, { getState }) => {
    const current = getState().movies.movies;
    const movieWithId = { id: Date.now(), ...newMovie };
    const updated = [...current, movieWithId];
    await saveMovies(updated);
    return movieWithId;
  },
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ id, updatedMovie }, { getState }) => {
    const current = getState().movies.movies;
    const updated = current.map((m) =>
      m.id == id ? { ...m, ...updatedMovie } : m,
    );
    await saveMovies(updated);
    return { id, updatedMovie };
  },
);

export const handleDelete = createAsyncThunk(
  "movies/handleDelete",
  async (id, { getState }) => {
    const current = getState().movies.movies;
    const updated = current.filter((m) => m.id != id);
    await saveMovies(updated);
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
      // fetch
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      })
      // add
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(addMovie.rejected, (state) => {
        state.error = "Failed to add movie";
      })
      // edit
      .addCase(editMovie.fulfilled, (state, action) => {
        const { id, updatedMovie } = action.payload;
        state.movies = state.movies.map((m) =>
          m.id == id ? { ...m, ...updatedMovie } : m,
        );
      })
      .addCase(editMovie.rejected, (state) => {
        state.error = "Failed to update movie";
      })
      // delete
      .addCase(handleDelete.fulfilled, (state, action) => {
        state.movies = state.movies.filter((m) => m.id != action.payload);
      })
      .addCase(handleDelete.rejected, (state) => {
        state.error = "Failed to delete movie";
      });
  },
});

export const { addToFav, removeFromFav } = movieSlice.actions;
export default movieSlice.reducer;

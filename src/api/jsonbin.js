import axios from "axios";

const BASE_URL = import.meta.env.VITE_JSONBIN_URL;
const MASTER_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;

const headers = {
  "Content-Type": "application/json",
  "X-Master-Key": MASTER_KEY,
};

// GET all movies
export const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}/latest`);
  return res.data.record.results;
};

// PUT the full updated array back to JSONBin
export const saveMovies = async (moviesArray) => {
  const res = await axios.put(BASE_URL, { results: moviesArray }, { headers });
  return res.data.record.results;
};

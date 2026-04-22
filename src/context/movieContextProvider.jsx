import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("http://localhost:3000/results")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
}

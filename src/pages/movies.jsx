import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/moviesSlice";
import Card from "../components/card";
import Loader from "../components/loader";
export default function Movies() {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-4 logo">Discover The New Movies</h1>
      </div>

      <div className=" row">
        {movies.map((m) => (
          <Card
            key={m.id}
            id={m.id}
            imgPath={imgPath + m.backdrop_path}
            title={m.title}
            overview={m.overview}
            isAdult={m.adult}
            original_language={m.original_language}
            vote_average={m.vote_average}
            release_date={m.release_date}
          />
        ))}
      </div>
    </div>
  );
}

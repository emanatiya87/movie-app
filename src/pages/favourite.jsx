import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavCard from "../components/favCard";
import Loader from "../components/loader";
export default function Favourite() {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.movies);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-4 logo">Your Favourite Movies !</h1>
      </div>

      <div className=" row min-vh-100">
        {favorites.length > 0 ? (
          favorites.map((m) => (
            <FavCard
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
          ))
        ) : (
          <p className="text-light text-center">No movies in fav !!</p>
        )}
      </div>
    </div>
  );
}

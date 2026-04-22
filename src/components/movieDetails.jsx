import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./loader";
import { useDispatch } from "react-redux";
import {
  ArrowLeft,
  Play,
  Plus,
  Star,
  Clock,
  Calendar,
  Globe,
  Pencil,
} from "lucide-react";
import { addToFav } from "../redux/slices/moviesSlice";
import { MovieContext } from "../context/movieContextProvider";
export default function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const { movies, loading } = useContext(MovieContext);
  const movie = movies.find((m) => m.id == id);
  if (loading) {
    return <Loader />;
  } else if (!movie) return <>Error 404!</>;
  return (
    <>
      <div
        className="movie-details-hero"
        style={{ backgroundImage: `url(${imgPath + movie.poster_path})` }}
      >
        <div className="movie-details-hero-overlay" />
        <div className="movie-details-topbar">
          <Link to="/movies" className="movie-details-back">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <Link to={`/edit/${id}`}>
            <button
              type="button"
              className="movie-card-action movie-card-action-edit"
              title="Edit"
            >
              <Pencil size={25} />
            </button>
          </Link>
        </div>

        <div className="movie-details-hero-content">
          <h1 className="movie-details-title text-light">{movie.title}</h1>

          <div className="movie-details-meta">
            <span className="movie-details-meta-item movie-details-rating">
              <Star size={14} fill="currentColor" />
              {Number(movie.vote_average)}
            </span>
            <span className="movie-details-meta-item text-light">
              <Calendar size={14} /> {movie.release_date}
            </span>

            <span className="movie-details-meta-item text-light">
              <Globe size={14} /> {movie.original_language}
            </span>
          </div>

          <div className="movie-details-actions">
            <button className="movie-details-btn movie-details-btn-primary">
              <Play size={18} fill="currentColor" />
              Play now
            </button>
            <button
              className="movie-details-btn movie-details-btn-ghost"
              onClick={() => {
                dispatch(addToFav(movie));
              }}
            >
              <Plus size={18} />
              My list
            </button>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-md-4">
            <div className="movie-img-wrapper rounded overflow-hidden shadow">
              <img
                src={imgPath + movie.backdrop_path}
                alt={movie.title}
                loading="lazy"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-md-8">
            <div className="movie-details p-3">
              <h2 className="fw-bold mb-3 text-light">Over Viwe:</h2>

              <p className="lh-lg text-light">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Play, Star, Clock, Pencil, Trash2, CalendarRange } from "lucide-react";
import EditForm from "../pages/EditForm";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../redux/slices/moviesSlice";
import { addToFav } from "../redux/slices/moviesSlice";

export default function Card({
  id,
  title,
  imgPath,
  release_date,
  vote_average,
  original_language,
}) {
  const dispatch = useDispatch();

  return (
    <div className=" col-md-3 col-sm-4 col-6 my-2 p-2">
      <div className="movie-card d-flex flex-column over-flow-hidden">
        <div className="movie-card-media relative">
          <img src={imgPath} alt={title} loading="lazy" />
          <div className="movie-card-overlay" />
          <span className="movie-card-rating">
            <Star size={12} fill="currentColor" />
            {Number(vote_average).toFixed(1)}
          </span>

          <div className="movie-card-actions">
            <Link to={`/edit/${id}`}>
              <button
                type="button"
                className="movie-card-action movie-card-action-edit"
                title="Edit"
              >
                <Pencil size={15} />
              </button>
            </Link>
            <button
              type="button"
              className="movie-card-action movie-card-action-delete"
              onClick={() => dispatch(handleDelete(id))}
              title="Delete"
            >
              <Trash2 size={15} />
            </button>
          </div>
          <Link to={`/movies/${id}`}>
            <span className="movie-card-play" aria-hidden>
              <Play size={22} fill="currentColor" />
            </span>
          </Link>
        </div>
        <div className="movie-card-body ">
          <h3 className="movie-card-title">{title}</h3>
          <div className="movie-card-meta">
            <span className="movie-card-length text-light">
              <CalendarRange size={11} />
              {release_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

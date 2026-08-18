import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMovie } from "../redux/slices/moviesSlice";
import { useSelector } from "react-redux";

export default function EditForm() {
  const navigate = useNavigate();
  const formatForInput = (date) => {
    if (!date) return "";
    if (date.includes("/")) {
      const [d, m, y] = date.split("/");
      return `${y}-${m}-${d}`;
    }
    return date;
  };
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies?.find((m) => m.id == id);
  const [formData, setFormData] = useState({
    title: movie.title,
    vote_average: movie.vote_average,
    original_language: movie.original_language,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release_date: formatForInput(movie?.release_date),
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editMovie({ id, updatedMovie: formData }))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          navigate(`/movies/${id}`);
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" d-flex align-items-center justify-content-center min-vh-100 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className=" shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-light">Movie Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Interstellar"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Rate</label>
                    <input
                      type="number"
                      className="form-control"
                      name="vote_average"
                      value={formData.vote_average}
                      onChange={handleChange}
                      placeholder="8.5"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Language</label>
                    <input
                      type="text"
                      className="form-control"
                      name="original_language"
                      value={formData.original_language}
                      onChange={handleChange}
                      placeholder="en"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">
                      Release date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="release_date"
                      value={formData.release_date}
                      onChange={handleChange}
                      placeholder="en"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="poster_path"
                      value={formData.poster_path}
                      onChange={handleChange}
                      placeholder="poster url"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">
                      Main Image URL
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="backdrop_path"
                      value={formData.backdrop_path}
                      onChange={handleChange}
                      placeholder="backdrop_path url"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">over view</label>
                    <input
                      type="text"
                      className="form-control"
                      name="overview"
                      value={formData.overview}
                      onChange={handleChange}
                      placeholder="overview"
                    />
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn mainBtn w-50">
                      Edit Movie
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

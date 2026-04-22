import React, { useState } from "react";
import axios from "axios";
import Toast from "../components/toast";
import { useContext } from "react";
import { MovieContext } from "../context/movieContextProvider";
import { useNavigate } from "react-router-dom";
export default function AddMovie() {
  const navigator = useNavigate();

  const { setMovies } = useContext(MovieContext);
  const [formData, setFormData] = useState({
    title: "",
    vote_average: "",
    original_language: "",
    poster_path: "",
    backdrop_path: "",
    overview: "",
    release_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      ...formData,
    };

    axios
      .post("http://localhost:3000/results", newMovie)
      .then((response) => {
        setMovies((prev) => [...prev, response.data]); // ✔ important

        setFormData({
          title: "",
          vote_average: "",
          original_language: "",
          poster_path: "",
          backdrop_path: "",
          overview: "",
          release_date: "",
        });
        setTimeout(() => {
          navigator("/movies");
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center min-vh-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className=" shadow-lg border-0 rounded-4">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label text-light">
                        Movie Name
                      </label>
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
                        Add Movie
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast msg="added" />
    </>
  );
}

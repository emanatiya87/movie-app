import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function NavComponent() {
  const { favorites } = useSelector((state) => state.movies);

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid">
        <NavLink to="/" className="logo">
          CINESTREAM
        </NavLink>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          ☰
        </button>

        <div
          className="collapse navbar-collapse mt-3 mt-lg-0"
          id="navbarContent"
        >
          <ul className="nav-menu d-flex  mx-auto ">
            <li>
              <NavLink to="/" className="nav-link-item">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="nav-link-item">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-movie" className="nav-link-item">
                Add Movie
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourites" className="nav-link-item">
                <span className="badge text-dark me-2 lengthFav rounded-circle d-inline-flex align-items-center justify-content-center">
                  {favorites.length}
                </span>
                Favourites
              </NavLink>
            </li>
          </ul>

          <div className="right-actions d-flex justify-content-center justify-content-lg-end gap-3 mt-3 mt-lg-0">
            <button className="search-btn">
              <FaSearchengin />
              {/* todo:en/ar */}
            </button>
            <Link to="/registration">
              {" "}
              <button className="login-btn">Sign up</button>
            </Link>{" "}
            <Link to="/login">
              <button className="login-btn">login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

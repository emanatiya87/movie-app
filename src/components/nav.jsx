import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff397",
    },
  },
});

const whiteInputStyle = {
  "& .MuiInputLabel-root": { color: "#f8f9fa" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fff397" },
  "& .MuiInput-underline:before": { borderBottomColor: "#f8f9fa" },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff397 !important",
  },
  "& .MuiInput-underline:after": { borderBottomColor: "#fff397" },
  "& .MuiInput-input": { color: "#f8f9fa" },
};

export default function NavComponent() {
  const { favorites } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/movies?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
                <NavLink to="/about" className="nav-link-item">
                  About us
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

            <div className="right-actions d-flex align-items-center justify-content-center justify-content-lg-end gap-3 mt-3 mt-lg-0">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit}>
                  <TextField
                    autoFocus
                    variant="standard"
                    placeholder="Search movies..."
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => !searchTerm && setSearchOpen(false)}
                    sx={{
                      ...whiteInputStyle,
                      width: { xs: "150px", sm: "200px" },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="submit"
                            size="small"
                            sx={{ color: "#f8f9fa" }}
                          >
                            <FaSearchengin />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              ) : (
                <button
                  type="button"
                  className="search-btn"
                  onClick={() => setSearchOpen(true)}
                >
                  <FaSearchengin />
                </button>
              )}

              <Link to="/login">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#fff397", color: "#000", fontWeight: "bold" }}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}

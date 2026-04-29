import React, { useEffect } from "react";

import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/moviesSlice";
import Loader from "../components/loader";
const GallaryComponent = () => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const imgsData = movies.slice(0, 9);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Stack
        sx={{
          textAlign: "center",
          alignItems: "center",
          p: 3,
        }}
        spacing={2}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}
        >
          What’s new with us{" "}
        </Typography>{" "}
        <ImageList cols={3} rowHeight={150} variant="masonry">
          {imgsData.map((item, i) => (
            <ImageListItem key={i}>
              <img src={imgPath + item.backdrop_path}></img>
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </>
  );
};

export default GallaryComponent;

import { lazy } from "react";
import NavComponent from "./components/nav";
import Loader from "./components/loader";
import { Suspense } from "react";
const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notfound"));
const AddMovie = lazy(() => import("./pages/add-movie"));
const MovieDetails = lazy(() => import("./components/movieDetails"));
const Slider = lazy(() => import("./components/slider"));
const Movies = lazy(() => import("./pages/movies"));
const Layout = lazy(() => import("./pages/layout"));
const EditForm = lazy(() => import("./pages/EditForm"));
const Favourite = lazy(() => import("./pages/favourite"));
const RegistrationForm = lazy(() => import("./pages/registrationForm"));
const LoginForm = lazy(() => import("./pages/login"));
const About = lazy(() => import("./pages/about"));
import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/slices/moviesSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home /> },
        { path: "add-movie", element: <AddMovie /> },
        { path: "contact", element: <Slider /> },
        { path: "favourites", element: <Favourite /> },
        { path: "movies", element: <Movies /> },
        { path: "about", element: <About /> },
        { path: "registration", element: <RegistrationForm /> },
        { path: "login", element: <LoginForm /> },
        { path: "movies/:id", element: <MovieDetails /> },
        { path: "edit/:id", element: <EditForm /> },
      ],
      errorElement: <NotFound></NotFound>,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#0d0f11",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </Box>
  );
}

export default App;

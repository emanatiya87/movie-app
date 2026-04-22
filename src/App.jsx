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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieContextProvider from "./context/movieContextProvider";
function App() {
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
        { path: "movies/:id", element: <MovieDetails /> },
        { path: "edit/:id", element: <EditForm /> },
      ],
      errorElement: <NotFound></NotFound>,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <div>
      <MovieContextProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </MovieContextProvider>
    </div>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage.jsx";
// import MovieDetail from "./pages/MovieDetail.jsx"; // Correct import for MovieDetail
import RootLayout from "./pages/RootLayout.jsx";
// import TVShowDetail from "./pages/TVShowDetail.jsx";
import ModalProvider from "./context/ModalProvider.jsx";
// import PeoplePage from "./pages/PeoplePage.jsx";
import { lazy } from "react";
import SeachPage from "./pages/SeachPage.jsx";

const HomePage = lazy(()=> import('./pages/HomePage.jsx'))
const TVShowDetail = lazy(()=> import('./pages/TVShowDetail.jsx'))
const MovieDetail = lazy(()=> import('./pages/MovieDetail.jsx'))
const PeoplePage = lazy(()=> import('./pages/PeoplePage.jsx'))
const router = createBrowserRouter([
  {
    // de hien thi chung cho toan bo trang
    element: <RootLayout />,
    // tung trang rieng
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        // dấu : để react hiểu được là id cần lấy
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        // loader nay la 1 param trong route, dung de lay params can thiet ma ko phai goi lai api
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOCKEN}`,
              },
            }
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SeachPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router}></RouterProvider>
  </ModalProvider>
);

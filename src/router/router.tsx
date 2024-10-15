import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "../pages/home";
import { JokeCategories } from "../pages/joke-categories";
import { Joke } from "../pages/joke";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <JokeCategories />,
        children: [
          {
            path: ":category",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Joke />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

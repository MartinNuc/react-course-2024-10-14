import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "../pages/home";
import { JokeCategories } from "../pages/joke-categories";
import { Joke } from "../pages/joke";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'categories',
        element: <JokeCategories />,
        children: [
          {
            path: ':category',
            element: <Joke />
          }
        ]
      },
    ]
  }
]);
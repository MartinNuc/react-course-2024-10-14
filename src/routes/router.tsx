import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./home";
import { JokeCategories } from "./joke-categories";

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
        element: <JokeCategories />
      }
    ]
  }
]);
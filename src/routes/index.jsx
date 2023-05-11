import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // loader: rootLoader,
        children: [
          {
            path: "/home",
            element: <HomePage />,
          }
        ],
      },
])
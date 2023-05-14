import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";
import BaseLayout from "../pages/layout/BaseLayout";
import TrialBalancePage from "../pages/TrialBalancePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/trial-balance",
            element: <TrialBalancePage />,
          }
        ],

      },
])
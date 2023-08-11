import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: <WorkSystemsPage />,
  },
  {
    path: "/allproduct",
    element: <AllProduct />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

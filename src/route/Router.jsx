import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
// import MapContainer from "../features/map/components/MapContainer";
import MapPage from "../pages/MapPage";
// import MapPage from "../pages/MapPage";

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
  {
    path: "/map",
    element: <MapPage />,
  },
  // {
  //   path: "/map",
  //   element: <MapContainer />,
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

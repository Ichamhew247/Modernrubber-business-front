import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
import MapPage from "../pages/MapPage";

import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

import WorkSystemsPage from "../pages/WorkSystemsPage";
import ProductImageTable from "../features/CRUD/ProductTable/ProductImageTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
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
      {
        path: "/productimagetable",
        element: <ProductImageTable />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

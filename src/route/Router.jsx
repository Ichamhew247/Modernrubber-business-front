import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
import MapPage from "../pages/MapPage";
import Invoice from "../pages/InvoicePage";
import FileUpload from "../features/CRUD/Products/components/ProductImageTable";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
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

        element: (
          <ProtectedRoute>
            <WorkSystemsPage />
          </ProtectedRoute>
        ),
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
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/upload",
        element: <FileUpload />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

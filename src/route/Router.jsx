import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSpacePage/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
// import MapContainer from "../features/map/components/MapContainer";
import MapPage from "../pages/MapPage/MapPage";
import ProfilePage from "../pages/ProfilePage";
import Invoice from "../pages/InvoicePage/Invoice";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
// import MapPage from "../pages/MapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: (
      // <ProtectedRoute>
      <WorkSystemsPage />
      // </ProtectedRoute>
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
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

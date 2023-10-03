import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
// import MapContainer from "../features/map/components/MapContainer";
import MapPage from "../pages/MapPage";
import ProfilePage from "../pages/ProfilePage";
import Invoice from "../pages/InvoicePage";
import FileUpload from "../pages/FileUpload";
// import UploadImageForm from "../pages/UploadImageForm";
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
  {
    path: "/upload",
    element: <FileUpload />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

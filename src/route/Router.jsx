import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkSystemsPage from "../pages/WorkSystemsPage";

const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: <WorkSystemsPage />,
  },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

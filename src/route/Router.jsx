import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import WorkSystemsPage from "../pages/WorkSystemsPage";
import AllProduct from "../pages/ProductPage";
import MapPage from "../pages/MapPage";
// import FileUpload from "../features/CRUD/Products/components/ProductImageTable";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";
// import ProductImageTable from "../features/CRUD/Products/components/ProductImageTable";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
// import ProtectedWork from "../features/auth/components/ProtectedWorkInvoice";
// import ProtectedWorkInvoice from "../features/auth/components/ProtectedWorkInvoice";
// import ProtectedWorkProduct from "../features/auth/components/ProtectedWorkProduct";
import WorkSystemsPage from "../pages/WorkSystemsPage";
import DogPage from "../pages/DogPage";
// import InvoicePage from "../pages/InvoicePage";
// import RetIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
// import ProtectedWorkSystem from "../features/auth/components/ProtectedWorkSystem";
// import ProductTable from "../features/CRUD/Products/components/ProductTable";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        path: "/dogpage",
        element: <DogPage />,
      },
      // {
      //   path: "/workinvoice",
      //   element: <InvoicePage />,
      // },
      // {
      //   path: "/workproduct",
      //   element: <ProtectedWorkProduct />,
      // },
      // {
      //   path: "/workimage",
      //   element: <ProductImageTable />,
      // },
      {
        path: "/allproduct",
        element: <AllProduct />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

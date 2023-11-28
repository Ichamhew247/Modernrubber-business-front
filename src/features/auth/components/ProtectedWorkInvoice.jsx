import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import InvoicePage from "../../../pages/InvoicePage";
import WorkSystemsPage from "../../../pages/WorkSystemsPage";

export default function ProtectedWorkInvoice() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <InvoicePage />;
  }
  return <WorkSystemsPage />;
}

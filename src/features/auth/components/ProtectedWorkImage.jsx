import { useSelector } from "react-redux";
import WorkSystemsPage from "../../../pages/WorkSystemsPage";
import ProductImageTable from "../../CRUD/Products/components/ProductImageTable";

export default function ProtectedWorkImage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <ProductImageTable />;
  }
  return <WorkSystemsPage />;
}

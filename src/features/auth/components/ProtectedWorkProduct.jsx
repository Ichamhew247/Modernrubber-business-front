import { useSelector } from "react-redux";
import ProductTable from "../../CRUD/Products/components/ProductTable";
import HomePage from "../../../pages/HomePage";

export default function ProtectedWorkProduct() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <ProductTable />;
  }
  return <HomePage />;
}

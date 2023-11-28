import { useSelector } from "react-redux";
// import HomePage from "../../../pages/HomePage";
import WorkSystemsPage from "../../../pages/WorkSystemsPage";

export default function ProtectedWorkSystem({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <WorkSystemsPage />;
  }
  return children;
}

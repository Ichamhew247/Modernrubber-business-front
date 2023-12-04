import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRole } from "../slice/auth-slice";

export default function ProtectedWorkRoute({ children }) {
  const myRole = useSelector(selectRole);
  console.log("Role", myRole);

  if (myRole === "user") {
    console.log("Not admin");

    return <Navigate to="/map" />;
  } else if (myRole === "admin") {
    console.log("Admin");
    return children;
  }

  return null;
}

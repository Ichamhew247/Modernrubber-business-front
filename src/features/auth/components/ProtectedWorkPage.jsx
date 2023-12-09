import { useSelector } from "react-redux";
import { selectRole } from "../slice/auth-slice";

export default function ProtectedWorkPage({ children }) {
  const myRole = useSelector(selectRole);
  console.log("Role", myRole);

  if (myRole === "admin") {
    return children;
  } else if (myRole === "user") {
    return <div>You are not an admin</div>;
  }
}

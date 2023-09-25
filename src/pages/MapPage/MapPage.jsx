// import MapContainer from "../../features/map/components/MapContainer";
// import { FiMapPin } from "react-icons/fi";
// import { FaPhone } from "react-icons/fa";
// import { GrMail } from "react-icons/gr";
// import { FaLine } from "react-icons/fa";
// import Header from "../../layout/Header";
import Contact from "./components/Contact";
import Map from "./components/Map";
// import InputErrormessage from "../features/auth/components/InputErrormessage";
// import { useState } from "react";
// import validateContact from "../features/auth/validators/validate-contact";
// import ContactInput from "../features/auth/components/ContactInput";
// const initialInput = {
//   contact: "",
// };
export default function MapPage() {
  // const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({
  //   contact: "",
  // });
  // const handleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const result = validateContact(input);
  //   console.dir(result);
  //   if (result) {
  //     return setError(result);
  //   }
  // };
  return (
    <>
      <main className="flex flex-col justify-between gap-32">
        <Map />
        <Contact />
      </main>
    </>
  );
}

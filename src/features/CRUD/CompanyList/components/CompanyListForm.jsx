import { useState } from "react";
import { useDispatch } from "react-redux";
import AddInput from "../../Components/AddInput";
import { addCompanyListAsync } from "../slice/product-slice";
export default function CompanyListForm({ onClose }) {
  const dispatch = useDispatch();

  // const [customerCode, setCustomerCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [note, setNote] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const companyListData = {
        // customerCode: customerCode,
        companyName: companyName,
        address: address,
        email: email,
        contactNumber: contactNumber,
        note: note,
      };

      const response = dispatch(addCompanyListAsync(companyListData));
      console.log("Product added:", response);
      console.log("mew");
      setCompanyName("");
      setAddress("");
      setEmail("");
      setContactNumber("");
      setNote("");
      await onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 mb-5">
        <AddInput
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <AddInput
          placeholder="Address*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <AddInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AddInput
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <AddInput
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          type="submit"
          className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

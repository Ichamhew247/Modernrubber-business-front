import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductInput from "../ProductInput";
import { addCompanyListAsync } from "../../slice/product-slice";
export default function AddProductForm({ onClose }) {
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
      // setCustomerCode("");
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
        {/* <ProductInput
          placeholder="ชื่อสินค้า"
          value={customerCode}
          onChange={(e) => setCustomerCode(e.target.value)}
        /> */}
        <ProductInput
          placeholder="ชื่อสินค้าอื่น ๆ"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <ProductInput
          placeholder="ราคาโดยประมาณ*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <ProductInput
          placeholder="รายละเอียดสินค้า"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ProductInput
          placeholder="ชนิดของสินค้า"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <ProductInput
          placeholder="ชนิดของสินค้า"
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

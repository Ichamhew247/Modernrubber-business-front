import { useState } from "react";
import Header from "../layout/Header";
import InvoicePage from "../pages/InvoicePage";
import SearchProduct from "../features/SearchProduct";

export default function WorkSystems() {
  const [productSearch, setProductSearch] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />

      <div className="flex justify-center text-xl mb-8 font-bold ">
        เลือกการทำงานที่ต้องการ
      </div>
      <div className="flex justify-center gap-5 ">
        <button
          onClick={() => {
            setOpenInvoice(true);
            setProductSearch(false); // เมื่อกด Invoice ให้ปิดคอมโพเนนท์ SearchProduct
          }}
          className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300 ${
            openInvoice ? "bg-[#3A3022]" : ""
          }`}
        >
          Invoice
        </button>

        <button
          onClick={() => {
            setProductSearch(true);
            setOpenInvoice(false); // เมื่อกด All Product ให้ปิดคอมโพเนนท์ InvoicePage
          }}
          className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300 ${
            productSearch ? "bg-[#3A3022]" : ""
          }`}
        >
          All Product
        </button>
      </div>
      <hr className="m-5" />
      {productSearch ? <SearchProduct /> : null}
      {openInvoice ? <InvoicePage /> : null}
    </>
  );
}

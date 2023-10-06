import { useState } from "react";
import Header from "../layout/Header";
import InvoicePage from "../pages/InvoicePage";
import ProductTable from "../features/CRUD/Products/components/ProductTable";
import FileUpload from "../features/CRUD/Products/components/ProductImageTable";

export default function WorkSystems() {
  const [productSearch, setProductSearch] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openImageTable, setOpenImageTable] = useState(true);

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
            setOpenImageTable(false);
          }}
          className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
            openInvoice ? "bg-[#3c3224]" : ""
          }`}
        >
          Invoice
        </button>

        <button
          onClick={() => {
            setProductSearch(true);
            setOpenInvoice(false); // เมื่อกด All Product ให้ปิดคอมโพเนนท์ InvoicePage
            setOpenImageTable(false);
          }}
          className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
            productSearch ? "bg-[#3c3224]" : ""
          }`}
        >
          Product Table
        </button>
        <button
          onClick={() => {
            setOpenImageTable(true);
            setProductSearch(false);
            setOpenInvoice(false);
          }}
          className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
            openImageTable ? "bg-[#3c3224]" : ""
          }`}
        >
          Product Image
        </button>
      </div>
      <hr className="m-5" />
      {productSearch ? <ProductTable /> : null}
      {openInvoice ? <InvoicePage /> : null}
      {openImageTable ? <FileUpload /> : null}
    </>
  );
}

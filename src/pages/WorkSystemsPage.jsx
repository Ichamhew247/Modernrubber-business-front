import SearchEdit from "../features/SearchEdit";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import InvoicePage from "../pages/InvoicePage";
import Table from "../features/CRUD/productWorkSpaceTable/components/Table";

export default function WorkSystems() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  // const [openTable, setOpenTable] = useState(false);
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
        <Link to="/invoice">
          <button
            onClick={() => setOpenInvoice((Open) => !Open)}
            className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300"
          >
            {openSearch ? "พิมพ์ใบวางบิล" : "พิมพ์ใบวางบิล"}
          </button>
        </Link>
        {/* <button
          onClick={() => setOpenTable(true)}
          className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300"
        >
          {openTable ? "สินค้าในระบบ" : "สินค้าในระบบ"}
        </button> */}
        <div className=" cursor-pointer bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300">
          สินค้า
        </div>
        <button
          className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300"
          onClick={() => setOpenSearch((Open) => !Open)}
        >
          {openSearch ? "ค้นหาประวัติ" : "ค้นหาประวัติ"}
        </button>
      </div>
      <hr className="m-5" />
      {openSearch && <SearchEdit />}
      <div className="flex justify-center">
        <Table />
      </div>
      {openInvoice && <InvoicePage />}
      {/* <main className=" flex justify-center">{openTable && <Table />}</main> */}
      {/* <button
        className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        รายการสินค้า
      </button> */}
    </>
  );
}

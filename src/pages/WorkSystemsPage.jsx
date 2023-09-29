import HistoryPage from "../features/SearchEdit";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import Table from "../features/CRUD/productWorkSpaceTable/components/Table";
import AddProduct from "../features/CRUD/Products/AddProduct";

export default function WorkSystems() {
  const [open, setOpen] = useState(false);
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
          <button className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300">
            พิมพ์ใบวางบิล
          </button>
        </Link>
        <button className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300">
          <AddProduct />
        </button>
        <button
          className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white transition-all duration-300"
          onClick={() => setOpen(true)}
        >
          ค้นหาประวัติ
        </button>
      </div>
      <hr className="m-5" />
      {open && <HistoryPage />}
      <main className=" flex justify-center">
        <Table />
      </main>
    </>
  );
}

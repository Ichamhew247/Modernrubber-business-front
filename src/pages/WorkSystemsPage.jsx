import Header from "../layout/Header";
import AddProduct from "../features/CRUD/components/AddProduct";
import HistoryPage from "../features/SearchEdit";
import { useState } from "react";

export default function WorkSystems() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center gap-5 ">
        <button className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white">
          พิมพ์ใบกำกับภาษี
        </button>
        <button className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white">
          <AddProduct />
        </button>
        <button
          className="bg-[#8A4819] hover:bg-[#3A3022] py-2 px-3 rounded-full text-white"
          onClick={() => setOpen(true)}
        >
          ค้นหาประวัติ
        </button>
      </div>
      <hr className="m-10" />
      {open && <HistoryPage />}
    </>
  );
}

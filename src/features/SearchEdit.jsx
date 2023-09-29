import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import SearchContainer from "../components/SearchContainer";
import { useState } from "react";
import Modal from "../components/Modal";
import EditProductForm from "./CRUD/components/EditProductForm";

export default function HistoryPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className="ml-[160px]"> */}
      {/* <div className="flex justify-center gap-4">
          <button className="hover:text-[#6ABD65] hover:underline">
            ชื่อสินค้า
          </button>
          <button className="hover:text-[#6ABD65] hover:underline">
            บริษัท
          </button>
        </div> */}
      <div className="flex justify-center ">
        <SearchContainer placeholder="ค้นหาผ่าน Keyword...">
          <AiOutlineSearch />
        </SearchContainer>
      </div>
      {/* <div className="flex gap-2  ">
          <div>Sort</div>
          <div>
            <BsArrowDownUp />
          </div>
        </div> */}
      <hr />
      {/* <div className="flex flex-col gap-3 pt-6">
          <a
            className="hover:text-[#6ABD65] hover:underline cursor-pointer"
            onClick={() => setOpen(true)}
          >
            ลูกกลิ้งสแตนเลสขัดเงา
          </a>
        </div> */}
      {/* </div> */}
      {open && (
        <Modal
          title="แก้ไขสินค้าในระบบ"
          width="27"
          open={open}
          onClose={() => setOpen(false)}
          color="#3A3022"
        >
          <EditProductForm />
        </Modal>
      )}
    </>
  );
}

// import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import SearchContainer from "../components/SearchContainer";
import { useState } from "react";
import Modal from "../components/Modal";
import EditProductForm from "../features/CRUD/Products/components/EditProductForm";

export default function SearchEdit() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center  ">
        <SearchContainer placeholder="ค้นหาผ่าน Keyword...">
          <AiOutlineSearch />
        </SearchContainer>
      </div>

      <hr />

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

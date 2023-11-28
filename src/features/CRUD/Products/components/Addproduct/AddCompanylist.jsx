import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Modal from "../../../../../components/Modal";
import AddProductForm from "./AddProductForm";

export default function AddCompanylist() {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="hover:bg-zinc-800  hover:text-white transition-all duration-300 items-baseline rounded flex gap-4 p-2   "
      >
        <div>
          <HiCursorClick />
        </div>
        <div>เพิ่มสินค้า</div>
      </div>
      <Modal
        title="Add Product"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <AddProductForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Modal from "../../../../../components/Modal";
import AddProductImageForm from "./AddProductImageForm";

export default function AddProductImage() {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="  p-2 hover:bg-zinc-800  hover:text-white transition-all duration-300 items-baseline rounded flex gap-4   "
      >
        <div>
          <HiCursorClick />
        </div>
        <div>เพิ่มภาพสินค้า</div>
      </div>
      <Modal
        title="Add Image Product"
        width="38"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <AddProductImageForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

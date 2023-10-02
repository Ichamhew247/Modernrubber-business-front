import { useState } from "react";
import Modal from "../../../../../components/Modal";
import EditProductForm from "./EditProductForm";
import { AiFillEdit } from "react-icons/ai";

export default function EditProduct() {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="hover:bg-zinc-800  hover:text-white items-baseline rounded flex gap-4 p-2  transition-all duration-300 "
      >
        <div>
          <AiFillEdit className="editIcon" />
        </div>
      </div>
      <Modal
        title="Update Product"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <EditProductForm onClose={handleCloseModal} />
        {/* <EditForm onClose={handleCloseModal} /> */}
      </Modal>
    </div>
  );
}

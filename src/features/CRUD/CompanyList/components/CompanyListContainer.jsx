import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Modal from "../../../../components/Modal";
import CompanyListForm from "./CompanyListForm";

export default function CompanyListContainer() {
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
        <div className="flex text-white  items-baseline gap-2">
          <HiCursorClick />
          <div>Add List</div>
        </div>
      </div>
      <Modal
        title="Add Product"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <CompanyListForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

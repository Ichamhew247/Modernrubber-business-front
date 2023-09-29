import Modal from "../../../components/Modal";
import { useState } from "react";
import AddProductForm from "../Products/components/AddProductForm";

export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="transition-all duration-300"
      >
        เพิ่มสินค้า
      </button>
      <Modal
        title="เพิ่มสินค้าในระบบ"
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
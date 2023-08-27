import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="hover:text-[#6ABD65] hover:underline"
        onClick={() => setOpen(true)}
      >
        ลงทะเบียน
      </button>
      <Modal
        title="ลงทะเบียน"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}

import { useState } from "react";
import Modal from "../../../components/Modal";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className=" hover:text-[#6ABD65] hover:underline"
        onClick={() => setOpen(true)}
      >
        เข้าสู่ระบบ
      </button>
      <Modal
        title="เข้าสู่ระบบ"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <LoginForm />
      </Modal>
    </>
  );
}

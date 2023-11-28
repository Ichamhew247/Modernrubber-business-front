import { useState } from "react";
import Modal from "../../../components/Modal";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";
export default function LoginContainer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="pt-4 cursor-pointer hover:text-[#2B2B2B] hover:border-x-[#3E3E3E] border border-white  px-4 py-4 "
        onClick={() => setOpen(true)}
      >
        {t("Login")}
      </div>
      <Modal
        title="เข้าสู่ระบบ"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <LoginForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}

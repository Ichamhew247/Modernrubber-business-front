import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";
import { useTranslation } from "react-i18next";
export default function RegisterContainer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="hover:text-[black] hover:underline transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        {t("register")}
      </button>
      <Modal
        title={t("register")}
        width="34"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}

import { useState } from "react";
import Modal from "../../../components/Modal";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";
export default function LoginContainer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>{t("Login")}</div>
      <Modal
        title={t("Login")}
        width="34"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        <LoginForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}

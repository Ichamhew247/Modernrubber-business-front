import { useTranslation } from "react-i18next";
export default function ClientName({ client, descript }) {
  const { t } = useTranslation();
  return (
    <>
      <div className=" text-sm">{client || "-"}</div>
      <div className="text-xs">{descript || t("Received the invoice")}</div>
    </>
  );
}

import { useTranslation } from "react-i18next";
export default function Topic() {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <p>{t("Invoice")}</p>
      </div>
    </div>
  );
}

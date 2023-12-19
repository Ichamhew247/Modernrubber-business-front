import { useTranslation } from "react-i18next";
export default function Signature() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col m-11 gap-5 ">
        <div className="flex justify-between ">
          <div className="text-xs">
            {t("Invoice issuer")}..............................................
          </div>
          <div className="text-xs">
            {t("Invoice recipient")}............................................
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-xs">
            {t("Date2")}.....................................................
          </div>
          <div className="text-xs">
            {t("Payment due date")}..........................................
          </div>
        </div>
      </div>
    </>
  );
}

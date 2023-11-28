import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <>
      <hr className="w-[78%] m-auto mt-[-30px]" />
      <p className="tracking-wider">
        {t(
          "Modern Rubber and Supply specializes in machining and supplying industrial machinery components"
        )}
        <br />
        {t("By expert technicians with over 20 years of experience.")}
      </p>
    </>
  );
}

import { useTranslation } from "react-i18next";
export default function HeadName({ name, address, email, companyTel }) {
  const { t } = useTranslation();
  return (
    <>
      <main className="flex flex-col gap-4 text-center ">
        <div className="text-lg font-medium ">{name || t("titleLogo")}</div>

        <main className="flex flex-col text-sm">
          <div>{address || t("Address2")}</div>
          <div className="flex text-center justify-center gap-4 ">
            <div>{email || "modernrubber1@hotmail.com"}</div>
            <div>{companyTel || "Tel. 02-8982250"}</div>
          </div>
        </main>
      </main>
    </>
  );
}

import { useTranslation } from "react-i18next";
export default function Logo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-[#2D2D2D] mt-[100px] py-12 bg-[#2D2D2D]">d</div>
      <div className="mt-[-20px] tracking-wider font-extrabold  flex justify-center bg-[#2D2D2D] text-[48px] ">
        {t("titleLogoHomepage")}
      </div>
      <main className=" bg-[url('/src/assets/blackwave.svg')] bg-no-repeat h-[600px] bg-center mt-[-40px] "></main>
    </>
  );
}

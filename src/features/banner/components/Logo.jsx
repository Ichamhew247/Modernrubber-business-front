import { useTranslation } from "react-i18next";
export default function Logo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="xl:text-[#2D2D2D] text-[#2D2D2D] xs:h-48  md:h-56 sm:h-56  xl:h-40 bg-[#2D2D2D]">
        d
      </div>
      <div
        className=" text-center
        flex  justify-center 
        mt-[-60px] xl:pb-3  
      xl:mt-[-60px] 
      xs:text-[26px]  
      sm:text-[38px]  
      xl:text-[48px] lg:text-[48px] md:text-[48px]
      font-extrabold 
      tracking-wider 
      md:flex pb-0  md:pb-16 bg-[#2D2D2D] "
      >
        {t("titleLogoHomepage")}
      </div>
      <br />

      <main className=" xl:bg-[url('/src/assets/blackwave.svg')] bg-no-repeat h-[600px] bg-center xl:mt-[-40px]  "></main>
    </>
  );
}

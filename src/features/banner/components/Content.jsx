import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <>
      <hr className=" m-auto  text-white mt-[-50px] hidden xl:block lg:block md:block xs:pb-8 " />
      <div
        className="lg:mt-[-20px] 
       md:mt-[0px] xs:mt-7  sm:mt-[-70px] xs:flex xs:flex-col xs:gap-2 "
      >
        <div
          className="tracking-wider xs:bg-[#2D2D2D] 
        lg:mt-[-480px] md:bg-[#2D2D2D] xs:py-4  
        sm:w-full sm:p-4 sm:m-auto sm:mt-[-60px] 
        xs:mt-[-420px]  xs:text-[12px]
        md:mt-[-220px] xl:mt-[-70px] lg:text-[18px] sm:text-[20px] 
        md:text-[20px] text-center "
        >
          {t(
            "Modern Rubber and Supply specializes in machining and supplying industrial machinery components"
          )}
        </div>
        <div
          className="tracking-wider sm:m-auto
           xs:bg-[#2D2D2D]    xs:text-[12px] xs:mt-[-29px]
         sm:bg-[#2D2D2D] md:bg-[#2D2D2D]  md:mt-[-100px] 
         md:pb-[40px] md:pt-[0px] xl:mt-[-20px]  sm:mt-[-30px]  lg:mt-[-380px] 
          lg:bg-[#2D2D2D] sm:w-full sm:text-[20px] lg:text-[18px]  
        md:text-[20px] sm:text-center
           sm:pb-20 xs:py-1  text-center xs:pb-20"
        >
          {t("By expert technicians with over 20 years of experience.")}
        </div>
      </div>
    </>
  );
}

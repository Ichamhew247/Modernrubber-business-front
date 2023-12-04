import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <>
      <hr className=" m-auto  text-white mt-[-50px] hidden xl:block lg:block md:block xs:pb-8 " />
      {/* <br /> */}
      <div className="lg:mt-[-20px] md:mt-10 xs:mt-7 xs:flex xs:flex-col xs:gap-2 ">
        {/* <hr className="text-white xl:w-9" /> */}
        <div className="tracking-wider xs:bg-[#2D2D2D]  md:bg-[#2D2D2D] xs:py-4  sm:w-full sm:p-4 sm:m-auto sm:mt-[-60px] xs:mt-[-380px] md:mt-[-220px] xl:mt-[-70px] lg:text-[18px] sm:text-[20px] xs:text-[14px] md:text-[20px] text-center ">
          {t(
            "Modern Rubber and Supply specializes in machining and supplying industrial machinery components"
          )}
        </div>
        <div className="tracking-wider sm:m-auto xs:bg-[#2D2D2D] sm:bg-[#2D2D2D] xl:mt-[-20px] lg:mt-[-120px]   sm:w-full sm:text-[20px] lg:text-[18px]  xs:text-[14px] md:text-[20px] sm:text-center sm:pb-5 xs:py-1 xs:m-[-20px] text-center xs:pb-20">
          {t("By expert technicians with over 20 years of experience.")}
        </div>
      </div>
    </>
  );
}

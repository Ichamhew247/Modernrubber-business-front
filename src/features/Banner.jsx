import CircleImage from "./banner/components/CircleImage";
import Content from "./banner/components/Content";
import Logo from "./banner/components/Logo";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-[80px] ">
        <main className=" text-white xl:mt-8">
          <main className="  sm:text-center  md:bg-[#2B2B2B] xl:bg-transparent xl:h-[600px] bg-center  ">
            <Logo />
            <div className="xs:mt-[-220px] sm:mt-[-500px] sm:mb-[220px]  xl:mt-[-500px]  lg:mt-[-220px] md:mt-[-430px] sm:bg-[#2B2B2B] sm:flex sm:flex-col   xl:gap-4  ">
              <Content />
            </div>
          </main>

          <main className="lg:pb-32 xl:pb-0   ">
            <div
              className=" xs:mt-[-230px] sm:mt-[-280px]  md:mt-[-240px] lg:mt-[-360px]   
            xl:mt-[-240px] xs:gap-2 xl:gap-14 z-10 xl:flex 
            xl:justify-center lg:flex lg:justify-center md:flex-row 
            md:justify-center sm:flex sm:flex-wrap sm:justify-center 
            sm:gap-8  xl:flex-row  lg:flex-row md:flex   "
            >
              <CircleImage
                number="1"
                title={t("Custom-made products")}
                src="/src/assets/imageProduct/1.1.png"
              />
              <CircleImage
                number="2"
                title={t("Manufactured by expert")}
                src="/src/assets/imageProduct/3.1.png"
              />
              <CircleImage
                number="3"
                title={t("Guaranteed quality")}
                src="/src/assets/imageProduct/4.1.png"
              />
            </div>
          </main>
        </main>
      </div>
    </>
  );
}

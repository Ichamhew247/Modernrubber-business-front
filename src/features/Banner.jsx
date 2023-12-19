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
            <div
              className="xs:mt-[-220px] sm:mt-[-500px] 
            sm:mb-[220px]  xs:mb-[-290px]  xl:mt-[-500px]  
            lg:mt-[-220px] md:mt-[-430px] lg:bg-transparent
             sm:bg-[#2B2B2B]  sm:flex sm:flex-col   xl:gap-4  "
            >
              <Content />
            </div>
          </main>

          <main className="lg:pb-32 xl:pb-0  ">
            <div
              className="lg:bg-[#2D2D2D]    xl:bg-transparent
               xs:mt-[-230px] sm:mt-[-140px]  md:mt-[-180px] lg:mt-[-590px]
               lg:pb-[140px]  xs:flex-col xs:flex  xs:gap-8
            xl:mt-[-240px] xl:gap-14 z-10 xl:flex 
            xl:justify-center lg:flex lg:justify-center md:flex-row 
            md:justify-center sm:flex sm:flex-wrap sm:justify-center 
            sm:gap-10  xl:flex-row  lg:flex-row md:flex   "
            >
              <CircleImage
                number="1"
                title={t("Custom-made products")}
                src="https://res.cloudinary.com/dxj8d8zrd/image/upload/v1702135586/product_image/ol2m3brzni7rmclf0eqa.png"
                alt="1.1"
              />
              <CircleImage
                number="2"
                title={t("Manufactured by expert")}
                src="https://res.cloudinary.com/dxj8d8zrd/image/upload/v1702135864/product_image/igxregvuu95wdwuifsbq.png"
                alt="3.1"
              />
              <CircleImage
                number="2"
                title={t("Guaranteed quality")}
                src="https://res.cloudinary.com/dxj8d8zrd/image/upload/v1702255749/product_image/gslgzhzuqccsawmouu3b.png"
                alt="3.1"
              />
            </div>
          </main>
        </main>
      </div>
    </>
  );
}

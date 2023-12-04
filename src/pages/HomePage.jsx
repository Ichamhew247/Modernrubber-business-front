import Banner from "../features/Banner";
import Carousel from "../features/carousel/Carousel";
import Footer from "../layout/Footer";
import { carousels } from "../features/carousel/Data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Banner />
      </div>
      <div
        className="bg-[#3E3E3E] 
          flex flex-col items-center pt-20 
          pb-20 xs:mt-[-40px] lg:mt-[-160px] xl:mt-[10px]
         
      "
      >
        <Carousel imageCarousel={carousels} />
        <Link to="/allproduct">
          <button className="sm:mt-0 xs:mt-4 sm:mb-16 xs:mt-[-100px] md:mt-[20px] lg:mt-[10px]  xl:mt-[20px] x hover:bg-black mt-8 text-white tracking-wide text-center rounded-md p-4 w-[200px] xl:text-[18px] xs:text-[12px] xs:w-[140px] xl:w-[200px] h-[60px] bg-[#2C2C2C] transition-all duration-300">
            {t("View all products")}
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

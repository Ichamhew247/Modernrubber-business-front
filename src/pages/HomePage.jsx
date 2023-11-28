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
      <div className="bg-[#3E3E3E]  flex flex-col items-center pt-20 pb-20">
        <Carousel imageCarousel={carousels} />
        <Link to="/allproduct">
          <button className="hover:bg-black mt-8 text-white tracking-wide text-center rounded-md p-4 w-[200px] h-[60px] bg-[#2C2C2C] transition-all duration-300">
            {t("View all products")}
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

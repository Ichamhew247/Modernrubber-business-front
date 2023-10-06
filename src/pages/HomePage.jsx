import Banner from "../features/Banner";
import Carousel from "../features/carousel/Carousel";
import Footer from "../layout/Footer";
import { carousels } from "../features/carousel/Data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="mt-20">
        <Banner />
      </div>

      <div className=" flex flex-col items-center my-24 pt-8">
        <Carousel imageCarousel={carousels} />
        <Link to="/allproduct">
          <button className=" mt-3 text-white  text-center rounded-full w-[180px] h-[40px] bg-[#3a3022] transition-all duration-300">
            ดูสินค้าทั้งหมด
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

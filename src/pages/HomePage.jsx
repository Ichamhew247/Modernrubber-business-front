import Banner from "../features/Banner";
import Carousel from "../features/carousel/carousel";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { countries } from "../features/carousel/Data";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div className="z-50 fixed top-0 left-0 right-0 bg-opacity-70 pb-4 bg-[#ffffff] shadow-2xl ">
        <Header />
      </div>
      <div className="mt-20">
        <Banner />
      </div>

      <div className=" flex flex-col items-center my-24 pt-8">
        <Carousel mag={countries} />
        <Link to="/allproduct">
          <button className=" mt-3 text-white hover:bg-[#3f7d3b] text-center rounded-full w-[180px] h-[40px] bg-[#6ABD65]">
            ดูสินค้าทั้งหมด
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

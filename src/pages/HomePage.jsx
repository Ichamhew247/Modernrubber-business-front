import Banner from "../features/Banner";
import Carousel from "../features/carousel/carousel";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { countries } from "../features/carousel/Data";
export default function HomePage() {
  return (
    <>
      <div className="z-50 flex flex-col h-screen justify-between gap-10">
        <div>
          <Header />
          <Banner />
        </div>

        <div className=" flex flex-col items-center mt-24">
          <Carousel mag={countries} />
          <button className=" mt-3 text-white hover:bg-[#3f7d3b] text-center rounded-full w-[180px] h-[40px] bg-[#6ABD65]">
            ดูสินค้าทั้งหมด
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

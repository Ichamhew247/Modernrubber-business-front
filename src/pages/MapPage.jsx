import MapContainer from "../features/map/components/MapContainer";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLine } from "react-icons/fa";
import Header from "../layout/Header";
import SearchContainer from "../components/SearchContainer";
export default function MapPage() {
  return (
    <>
      <main className="flex flex-col justify-between gap-32">
        <div>
          <div className="z-50 fixed top-0 left-0 right-0 bg-opacity-70 pb-4 bg-[#ffffff] shadow-2xl">
            <Header />
          </div>
          <div className="flex flex-col  items-center  mt-52">
            <div className="text-2xl font-medium">ติดต่อโรงงาน</div>
            <div className="text-xl font-light">
              เวลาทำการ จันทร์ - เสาร์ 8.00 - 17.00{" "}
            </div>
          </div>
        </div>
        {/* ////// */}
        <div>
          <div className="flex justify-center">
            <div className="z-10 flex   bg-[#c69653] w-[1200px] h-[500px]  ">
              <MapContainer />
              <div className="flex flex-col gap-6   text-white  bg-[#3A3022] p-9 ">
                <main className="flex gap-6">
                  <FiMapPin className="text-lg mt-5" />
                  <p className="mt-5">
                    507 หมู่บ้านโมเดิร์นเฮ้าส์ ซอยเอกชัย 46 แขวงคลองบางพราน{" "}
                    <br /> เขตบางบอน กรุงเทพ 10150
                  </p>
                </main>
                <main className="flex gap-6">
                  <FaPhone className="text-lg mt-5" />
                  <p className="mt-5">02-898-2250, 081-692-2780</p>
                </main>
                <main className="flex gap-6">
                  <GrMail className="text-lg mt-5" />
                  <p className="mt-5">modernrubber1@hotmail.com</p>
                </main>
                <main className="flex gap-6">
                  <FaLine className="text-lg mt-5" />
                  <p className="mt-5">@modernrubber1</p>
                </main>
                <main className="ml-10 mt-6 text-xs w-28">
                  <img src="/src/assets/line.png " />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* //// */}
        <div>
          <div className="flex flex-col items-center bg-[#F5EEEA] py-10 m">
            <div className="font-bold text-lg">
              หากต้องการข้อมูลเพิ่มเติม สามารถกรอกอีเมลหรือเบอร์โทร
              เพื่อให้เราติดต่อกลับท่านได้
            </div>
            <SearchContainer placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์">
              <button className="text-xl bg-[#7E7E7E] p-8 text-white w-40 h-12 flex items-center justify-center">
                ส่ง
              </button>
            </SearchContainer>
          </div>
        </div>
      </main>
    </>
  );
}

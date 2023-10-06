import MapContainer from "../../../features/map/components/MapContainer";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLine } from "react-icons/fa";
export default function Map() {
  return (
    <>
      <div>
        <div className="flex flex-col  items-center  mt-44">
          <div className="text-2xl font-medium">ติดต่อโรงงาน</div>
          <div className="text-xl font-light">
            เวลาทำการ จันทร์ - เสาร์ 8.00 - 17.00
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="z-10 flex   bg-[#c69653] w-[1200px] h-[500px]  ">
            <MapContainer />
            <div className="flex flex-col gap-6   text-white  bg-[#3A3022] p-9 ">
              <main className="flex gap-6">
                <FiMapPin className="text-lg mt-5" />
                <p className="mt-5">
                  507 หมู่บ้านโมเดิร์นเฮ้าส์ ซอยเอกชัย 46 แขวงคลองบางพราน <br />{" "}
                  เขตบางบอน กรุงเทพ 10150
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
    </>
  );
}

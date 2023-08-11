import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLine } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="flex  gap-[91px]  w-full h-[160px]  bg-[#3A3022] text-white  ">
          <main className="LOGO ml-[160px] flex flex-col items-center ">
            <div className=" mt-4">
              <div className=" w-16 rounded-[100%] h-10 border border-[#6ABD65] bg-white"></div>
              <div className="font-body  mt-[-36px] ml-3.5 text-2xl text-[#6ABD65]">
                M
              </div>
            </div>
            <div className="mt-3  ">โมเดิร์นรับเบอร์ แอน ซัพพลาย</div>
          </main>
          <main className="ADDRESS flex gap-4  ">
            <div>
              <FiMapPin className="text-xl  mt-6" />
            </div>
            <div className="flex flex-col mt-4 text-xs">
              <p>
                507 หมู่บ้านโมเดิร์นเฮ้าส์ ซอยเอกชัย 46 <br />
                แขวงคลองบางพราน เขตบางบอน <br />
                กรุงเทพ 10150
              </p>
              <button
                className=" mt-3 text-white hover:bg-[rgb(0,0,0)] text-center rounded-full w=[140px] h-[30px] bg-[rgb(23,19,14)]"
                role="button"
              >
                ดูแผนที่
              </button>
            </div>
          </main>

          <main className="CALL gap-10 flex flex-col text-xs ">
            <div className="flex gap-4">
              <FaPhone className="text-base mt-5" />
              <p className="mt-5">02-898-2250, 081-692-2780</p>
            </div>
            <div className="flex gap-4">
              <GrMail className="text-base mt-[-2px]" />
              <p className="mt-[-5px]">modernrubber1@hotmail.com</p>
            </div>
          </main>

          <main className="LINE flex gap-4 mt-5  ">
            <FaLine className="text-xl mt-[-2px]" />
            <p className="text-xs">@modernrubber1</p>
          </main>
          <main className="LINE mt-6 text-xs w-20 ">
            <img src="/src/assets/line.png " />
          </main>
        </div>
        <div>
          <hr className="border-stone-400  border-0.5 mt-[-20px] w-[1200px] m-auto " />
        </div>
      </div>
    </>
  );
}

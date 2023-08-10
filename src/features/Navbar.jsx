import { Link } from "react-router-dom";
import LoginContainer from "./auth/components/LoginContainer";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 pb-4 bg-[#F2FBF3] shadow-2xl">
        <div className="z-50">
          <div className=" flex justify-between items-center mt-6  ">
            <div className="flex gap-[38px]  ml-[160px] text-[18px] ">
              <Link to="/homepage">
                <button className="hover:text-[#6ABD65] hover:underline">
                  หน้าหลัก
                </button>
              </Link>
              <button className="hover:text-[#6ABD65] hover:underline">
                สินค้าทั้งหมด
              </button>
              <button className="hover:text-[#6ABD65] hover:underline">
                คุณสมบัติยาง
              </button>
            </div>
            <div className=" ml-[-86px] ">
              <div className="  w-36 rounded-[100%] h-20 border border-[#6ABD65] bg-white"></div>
              <div className="font-body text-center m-[-68px] ml-[-74px] text-6xl text-[#6ABD65]">
                M
              </div>
            </div>
            <div className="flex gap-[38px]  mr-[160px] text-[18px]  ">
              <button className="hover:text-[#6ABD65] hover:underline">
                ติดต่อเรา
              </button>
              <LoginContainer />
              <Link to="/work">
                <img
                  src="/src/assets/me.jpg"
                  className=" rounded-full w-11 h-11"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import LoginContainer from "./auth/components/LoginContainer";
import DropDown from "../layout/DropDown";

export default function Navbar() {
  return (
    <>
      <div className="z-50 fixed top-0 left-0 right-0 bg-opacity-70 pb-4 bg-[#ffffff] shadow-2xl">
        <div className="text-[#3a3022] flex justify-between items-center mt-2  ">
          <div className="flex gap-[38px]  ml-[160px] text-[18px] ">
            <Link to="/">
              <button className="hover:text-[#6ABD65] hover:bg-gray-100 px-4 py-4  rounded-sm transition-all duration-300">
                หน้าหลัก
              </button>
            </Link>
            <Link to="/allproduct">
              <button className="hover:text-[#6ABD65] hover:bg-gray-100 px-4 py-4  rounded-sm transition-all duration-300">
                สินค้าทั้งหมด
              </button>
            </Link>
            <button className="hover:text-[#6ABD65] hover:bg-gray-100 px-4 py-4  rounded-sm transition-all duration-300">
              คุณสมบัติยาง
            </button>
          </div>
          <div className=" ml-[-86px] ">
            <div className="  w-36 rounded-[100%] h-20 border border-[#6ABD65] bg-white"></div>
            <div className="font-body text-center m-[-68px] ml-[-74px] text-6xl text-[#6ABD65]">
              M
            </div>
          </div>
          <div className="flex items-center gap-[38px]  mr-[160px] text-[18px]  ">
            <Link to="/map">
              <button className="hover:text-[#6ABD65] hover:bg-gray-100 px-4 py-4  rounded-sm transition-all duration-300">
                ติดต่อเรา
              </button>
            </Link>
            <LoginContainer />

            <div className="profilePicture">
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

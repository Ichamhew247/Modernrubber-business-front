import { Link } from "react-router-dom";
import LoginContainer from "./auth/components/LoginContainer";
import DropDown from "../layout/DropDown";

export default function Navbar() {
  return (
    <>
      <div className=" flex justify-between items-center mt-6  ">
        <div className="flex gap-[38px]  ml-[160px] text-[18px] ">
          <Link to="/">
            <button className="hover:text-[#6ABD65] hover:underline">
              หน้าหลัก
            </button>
          </Link>
          <Link to="/allproduct">
            <button className="hover:text-[#6ABD65] hover:underline">
              สินค้าทั้งหมด
            </button>
          </Link>
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
        <div className="flex items-center gap-[38px]  mr-[160px] text-[18px]  ">
          <Link to="/map">
            <button className="hover:text-[#6ABD65] hover:underline">
              ติดต่อเรา
            </button>
          </Link>
          <LoginContainer />

          <div className="profilePicture">
            <DropDown />
          </div>
        </div>
      </div>
    </>
  );
}

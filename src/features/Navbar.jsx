// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginContainer from "./auth/components/LoginContainer";
import DropDown from "../layout/DropDown";
import LoginContainer from "./auth/components/LoginContainer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import logoblack from "../assets/logoblack.png";
import LanguageToggle from "../pages/LanguageToggle";
export default function Navbar() {
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <div className="flex justify-center no-print z-50 fixed top-0 left-0 right-0  bg-white shadow-2xl">
        <img src={logoblack} className="w-80" />
        <div className="text-[#3a3022] flex justify-between items-center  ">
          <div className="flex gap-[38px]  ml-[160px] text-[18px] ">
            <Link to="/">
              <button className="hover:text-[#2B2B2B] hover:border-x-[#3E3E3E] border border-white  px-4 py-4 ">
                {t("Home")}
              </button>
            </Link>
            <Link to="/allproduct">
              <button className="hover:text-[#2B2B2B] hover:border-x-[#3E3E3E] border border-white  px-4 py-4 ">
                {t("Products")}
              </button>
            </Link>
            <Link to="/map">
              <button className="hover:text-[#2B2B2B] hover:border-x-[#3E3E3E] border border-white  px-4 py-4 ">
                {t("Contact Us")}
              </button>
            </Link>
            {!isAuthenticated && <LoginContainer />}
            <LanguageToggle />
            {isAuthenticated && (
              <div className="flex items-center hover:text-[#6ABD65] hover:bg-gray-100 px-4 rounded-sm transition-all duration-300">
                <DropDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

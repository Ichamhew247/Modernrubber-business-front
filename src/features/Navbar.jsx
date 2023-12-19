// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginContainer from "./auth/components/LoginContainer";
import DropDown from "../layout/DropDown";
import LoginContainer from "./auth/components/LoginContainer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import logoblack from "../assets/logoblack.png";
import LanguageToggle from "../pages/LanguageToggle";

console.log(logoblack);
export default function Navbar() {
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <div className="flex xs:flex-col xs:items-center  sm:flex-col  xl:flex-row xl:justify-between md:flex-col md:items-center xl:px-24 md:px-0 no-print z-50 fixed top-0 left-0 right-0  bg-white shadow-2xl">
        <div>
          <img
            src={logoblack}
            alt="logoblack"
            className="w-80 xl:w-80 md:w-96 "
          />
        </div>
        <div className="text-[#3a3022] flex justify-between items-center  ">
          <div
            className="flex xl:gap-[38px] xs:gap-[2px] sm:flex sm:justify-center sm:ml-[-0px]  xl:ml-[160px]
           xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[12px] xs:ml-[0px] "
          >
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
            {!isAuthenticated && (
              <>
                <div className="cursor-pointer   hover:text-[#2B2B2B] hover:border-x-[#3E3E3E] border border-white  px-4 py-4">
                  <LoginContainer />
                </div>
              </>
            )}
            <LanguageToggle />
            {isAuthenticated && (
              <div className="flex items-center  xl:justify-center xl:w-20 rounded-sm transition-all duration-300">
                <DropDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

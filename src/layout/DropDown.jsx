import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Avatar from "../components/Avatar";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { HiClipboardDocumentList } from "react-icons/Hi2";

import { useDispatch, useSelector } from "react-redux";
import {
  // login,
  logout,
  // selectRole,
  // selectUsername,
} from "../features/auth/slice/auth-slice";
export default function DropDown() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef();
  // const myName = useSelector(selectUsername);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await dispatch(login());
  //       dispatch(selectRole(response.data.role));
  //     } catch (error) {
  //       console.error("Error fetching login data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);
  return (
    <>
      {isAuthenticated && (
        <div className="relative " ref={dropDownEl}>
          <div role="button" onClick={() => setOpen(!open)}>
            <Avatar />
          </div>
        </div>
      )}
      {open && (
        <div
          className="flex flex-col  absolute w-80 
          xl:translate-y-4 xl:translate-x-20 
          lg:translate-y-32 lg:translate-x-[-90px]
          md:translate-y-[110px] md:translate-x-[40px]
          sm:translate-y-[100px] sm:translate-x-[100px]
          xs:translate-y-[100px] xs:translate-x-[200px]
        right-48 top-20 border rounded-xl p-2 bg-white text-[#2D2D2D] font-bold"
        >
          <div className=" px-2  text-xl">
            {/* <p className="">Hello, {myName}</p> */}
          </div>
          <hr className="border-1 border-[#3E3E3E] m-2" />
          <Link to="/work">
            <div
              className="flex 
            xl:gap-2
            lg:gap-3
            sm:gap-3
            xs:gap-3
            items-center px-2 hover:bg-[#2D2D2D] hover:text-white rounded-lg transition-all duration-100"
            >
              <div className="items-center">
                <HiClipboardDocumentList />
              </div>
              <button
                className="
              xl:text-base 
              lg:text-[16px]
              md:text-[16px]
              sm:text-[16px]
              xs:text-text-[16px]
              
              
              w-72 font-medium flex items-center gap-4   p-2 rounded-lg "
              >
                My Work Space
              </button>
            </div>
          </Link>

          <hr className="border-1 border-[#3E3E3E] m-2" />

          <div
            className="cursor-pointer   xl:text-base 
            lg:text-[16px]
            md:text-[16px]
            sm:text-[16px]
            xs:text-text-[16px] 
            flex items-center 
            p-2 hover:bg-[#2D2D2D] hover:text-white
             rounded-lg  font-normal transition-all duration-100"
            onClick={handleLogout}
          >
            <div
              className="rounded-full w-8 items-center
             xl:text-base 
             lg:text-[16px]
             md:text-[16px]
             sm:text-[16px]
             xs:text-text-[16px]"
            >
              <BiLogOut />
            </div>
            Log out
          </div>
        </div>
      )}
    </>
  );
}

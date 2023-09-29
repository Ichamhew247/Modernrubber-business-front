import { Link } from "react-router-dom";
// import { RightFromBracketIcon } from "../icons";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Avatar from "../components/Avatar";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { HiClipboardDocumentList } from "react-icons/Hi2";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef(); // จะ return ค่าเป็น object {current:10}//{current:()} เปลี่ยนเป็น {current" document.querySelector(".relative")}

  useSelector((state) => state.auth.user);

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

  const handleLogin = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="relative" ref={dropDownEl}>
        <div role="button" onClick={() => setOpen(!open)}>
          <Avatar />
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-1 absolute w-80 translate-y-4 right-20  border rounded-xl p-2 bg-white text-[#3f7d3b] font-bold    ">
          <Link to="/profile">
            <div className="flex items-center gap-4 hover:bg-[#6ABD65] hover:text-white p-2 rounded-lg ">
              <div>
                <div className="font-semibold text-xl">
                  Nattanicha Niyomchan
                </div>
              </div>
            </div>
          </Link>
          <Link to="/work">
            <div className="flex gap-1 items-center px-2 hover:bg-[#6ABD65] hover:text-white rounded-lg">
              <div className="    items-center">
                <HiClipboardDocumentList />
              </div>
              <button className="text-base w-72 font-medium flex items-center gap-4 hover:bg-[#6ABD65] hover:text-white p-2 rounded-lg transition-all duration-300">
                My Work Space
              </button>
            </div>
          </Link>

          <hr className="border border-gray-200 m-2" />
          <div
            className="flex items-center p-2 hover:bg-[#6ABD65] hover:text-white rounded-lg"
            role="button"
          >
            <div className="rounded-full w-8   items-center">
              <BiLogOut />
            </div>
            <span className="text-sm font-normal " onClick={handleLogin}>
              Log out
            </span>
          </div>
        </div>
      )}
    </>
  );
}

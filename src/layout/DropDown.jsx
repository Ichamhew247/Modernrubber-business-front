import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Avatar from "../components/Avatar";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { HiClipboardDocumentList } from "react-icons/Hi2";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";

export default function DropDown() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef();

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
    setOpen(false);
  };

  return (
    <>
      {isAuthenticated && (
        <div className="relative" ref={dropDownEl}>
          <div role="button" onClick={() => setOpen(!open)}>
            <Avatar />
          </div>
        </div>
      )}
      {open && (
        <div className="flex flex-col gap-1 absolute w-80 translate-y-4 right-56 top-20 border rounded-xl p-2 bg-white text-[#3f7d3b] font-bold">
          <Link to="/work">
            <div className="flex gap-1 items-center px-2 hover:bg-[#6ABD65] hover:text-white rounded-lg">
              <div className="items-center">
                <HiClipboardDocumentList />
              </div>
              <button className="text-base w-72 font-medium flex items-center gap-4 hover:bg-[#6ABD65] hover:text-white p-2 rounded-lg transition-all duration-300">
                My Work Space
              </button>
            </div>
          </Link>

          <hr className="border border-gray-200 m-2" />

          <div
            className="cursor-pointer flex items-center p-2 hover:bg-[#6ABD65] hover:text-white rounded-lg text-sm font-normal"
            onClick={handleLogin}
          >
            <div className="rounded-full w-8 items-center">
              <BiLogOut />
            </div>
            Log out
          </div>
        </div>
      )}
    </>
  );
}

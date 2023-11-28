import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
export default function SearchContainer({ placeholder, children, onChange }) {
  const [search, setSearch] = useState(false);
  const handleClick = () => {
    setSearch(true);
  };

  return (
    <>
      <div className="flex justify-center  items-center ">
        {!search && <IoMdSearch onClick={handleClick} className="searchIcon" />}
        {search && (
          <>
            <input
              type="text"
              onChange={onChange}
              className=" italic bg-[#F1F1F1] focus:ring-neutral-300 focus:border-neutral-500  w-54 h-11 border-none outline-none   px-3 py-4 rounded-sm  focus:ring-1 "
              placeholder={placeholder}
            />
            <div className="flex flex-col justify-evenly text-4xl">
              {children}
            </div>
          </>
        )}
      </div>
    </>
  );
}

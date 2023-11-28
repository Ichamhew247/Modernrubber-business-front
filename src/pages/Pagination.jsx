import { useState } from "react";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <div className="flex justify-center gap-6 mb-12"> */}
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`${
            number === currentPage
              ? "bg-black text-white "
              : "bg-[#3E3E3E] text-white hover:bg-black hover:text-white"
          } rounded-full cursor-pointer`}
        >
          <button
            className="join-item w-10 h-10 "
            onClick={() => {
              setCurrentPage(number);
              paginate(number);
            }}
            href="#"
          >
            {number}
          </button>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}

import { useState } from "react";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-6 mb-12">
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`${
            number === currentPage
              ? "bg-[#3a3022] text-white"
              : "bg-neutral-500 text-white hover:bg-[#3a3022] hover:text-white"
          } py-2 px-3 rounded cursor-pointer`}
        >
          <button
            className="join-item"
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
    </div>
  );
}

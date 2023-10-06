import { useState } from "react";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const [currentPage, setCurrentPage] = useState(1); // State สำหรับเก็บหน้าปัจจุบัน

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-6">
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`${
            number === currentPage
              ? "bg-slate-700 text-white"
              : "bg-slate-300 hover:bg-slate-700 hover:text-white"
          } py-2 px-3 rounded cursor-pointer`}
        >
          <button
            className="join-item"
            onClick={() => {
              setCurrentPage(number); // อัพเดตหน้าปัจจุบันเมื่อคลิกปุ่ม
              paginate(number); // เรียกฟังก์ชัน paginate
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

// export default function Pagination({ postPerPage, totalPosts, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <nav>
//       <ul>
//         {pageNumbers.map((number) => (
//           <li key={number} className="flex">
//             <a onClick={() => paginate(number)} href="#">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

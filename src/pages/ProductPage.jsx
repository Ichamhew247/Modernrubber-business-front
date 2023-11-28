import Footer from "../layout/Footer";
import { useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { imageAllProduct } from "../features/carousel/Data";
export default function AllProduct() {
  const [posts] = useState(imageAllProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div>
        <Post post={currentPosts} />
        <div className="flex justify-center mt-[-70px] w-full ">
          <div className="bg-white flex pt-9 pb-24 items-center justify-center w-[1290px]  gap-[28px]   ">
            <GoTriangleLeft />
            <Pagination
              postPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            <GoTriangleRight />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

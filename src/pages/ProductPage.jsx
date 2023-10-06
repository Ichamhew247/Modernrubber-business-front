import Footer from "../layout/Footer";

import { useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";
import { imageAllProduct } from "../features/carousel/Data";

export default function AllProduct() {
  const [posts] = useState(imageAllProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div>
        <div className="mt-36 my-8 flex justify-center text-3xl">
          ตัวอย่างสินค้า <br />
        </div>
        <Post post={currentPosts} />
        <div className="">
          <Pagination
            postPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

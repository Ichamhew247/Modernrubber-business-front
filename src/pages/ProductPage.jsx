import Footer from "../layout/Footer";
import Header from "../layout/Header";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";
import { imageAllProduct } from "../features/carousel/Data";

export default function AllProduct() {
  // const initialState = [
  //   {
  //     image:
  //       "https://res.cloudinary.com/dxj8d8zrd/image/upload/v1696538147/product_image/j20yohrhd7yfmies3byr.png",
  //     title: "mew",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/dxj8d8zrd/image/upload/v1696538147/product_image/j20yohrhd7yfmies3byr.png",
  //     title: "mew",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/dxj8d8zrd/image/upload/v1696538147/product_image/j20yohrhd7yfmies3byr.png",
  //     title: "mew",
  //   },
  // ];
  const [posts, setPosts] = useState(imageAllProduct);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     // setLoading(true);
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setPosts(res.data);
  //     console.log(res.data);
  //     // setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  /////Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div>
        <div className="z-50 fixed top-0 left-0 right-0 bg-opacity-70 pb-4 bg-[#ffffff] shadow-2xl">
          <Header />
        </div>
        <div className="mt-36 my-8 flex justify-center text-3xl">
          ตัวอย่างสินค้า <br />
        </div>
        <Post post={currentPosts} />
        <div className="pb-24">
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
// import Footer from "../layout/Footer";
// import Header from "../layout/Header";

// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import Post from "./Post";
// import Pagination from "./Pagination";

// export default function AllProduct() {
//   const [posts, setPosts] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage] = useState(5);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       // setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       console.log(res.data);
//       // setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   /////Get current posts
//   const indexOfLastPost = currentPage * postPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   //Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   return (
//     <>
//       <div>
//         <div className="z-50 fixed top-0 left-0 right-0 bg-opacity-70 pb-4 bg-[#ffffff] shadow-2xl">
//           <Header />
//         </div>
//         <div className="mt-36 my-8 flex justify-center text-3xl">
//           ตัวอย่างสินค้า <br />
//         </div>
//         <Post post={currentPosts} />
//         <Pagination
//           postPerPage={postPerPage}
//           totalPosts={posts.length}
//           paginate={paginate}
//         />
//       </div>

//       <Footer />
//     </>
//   );
// }

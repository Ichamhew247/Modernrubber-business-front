export default function Post({ post }) {
  return (
    <>
      <div className="flex gap-6 justify-center p-8 ">
        <div className="flex flex-wrap justify-center  gap-[24px] w-[1000px] mb-24 ">
          {post.map((post, index) => (
            <div key={index} className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img src={post.image} alt="Shoes" />
              </figure>
              <div className=" h-11">
                <p className="ml-8 p-2 text-lg"> {post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// export default function Post() {
//   return (
//     <>
// <div className="flex gap-6 justify-center p-8 ">
//   <div className="flex flex-wrap justify-center  gap-[24px] w-[1200px] mb-24 ">
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={one} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={two} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={three} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={four} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={five} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={six} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={seven} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={eight} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={nine} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={ten} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={eleven} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={twelve} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={thirteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={fourteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={fifteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={sixteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={seventeen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={eighteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//     <div className="card w-60 bg-base-100 shadow-xl">
//       <figure>
//         <img src={nineteen} alt="Shoes" />
//       </figure>
//       <div className=" h-11">
//         <p className="ml-8 p-2 text-lg">Lorem ipsum dolor</p>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   );
// }

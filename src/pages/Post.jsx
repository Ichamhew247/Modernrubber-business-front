export default function Post({ post }) {
  return (
    <>
      <div className="flex gap-6 justify-center">
        <div className="flex flex-wrap justify-center  gap-[24px] w-[1000px] mb-12 ">
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

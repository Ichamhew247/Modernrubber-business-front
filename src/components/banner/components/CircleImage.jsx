export default function CircleImage({ title, number, src }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 ">
        <img
          src={src}
          className="  w-[180px] rounded-full h-[180px] border border-[#6ABD65] bg-white"
        ></img>
        <div className="flex gap-2 items-center">
          <div className="bg-white w-10 h-10 rounded-full text-[#6ABD65] flex justify-center items-center">
            {number}
          </div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
}

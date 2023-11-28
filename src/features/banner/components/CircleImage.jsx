export default function CircleImage({ title, src }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 ">
        <img
          src={src}
          className="  w-[180px] rounded-full h-[180px] border border-[#2D2D2D] bg-white"
        ></img>
        <div className="flex gap-2 items-center">
          <div className="font-semibold tracking-wider">{title}</div>
        </div>
      </div>
    </div>
  );
}

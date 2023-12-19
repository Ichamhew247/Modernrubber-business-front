export default function CircleImage({ title, src }) {
  return (
    <div className=" md:mt-[-90px] xl:mt-[0px] x lg:mt-[0px] sm:mt-[0px] xs:mt-[0px] ">
      <div className="flex flex-col items-center gap-4 sm:gap-4  ">
        <img
          src={src}
          className=" lg:w-[160px] md:w-[160px] xs:w-[100px] sm:w-[120px] xl:w-[180px] xs:h-[100px] lg:h-[160px] md:h-[160px] sm:h-[120px] xl:h-[180px]  rounded-full  border border-[#2D2D2D] bg-white"
        ></img>
        <div className=" md:flex xl:flex md:gap-12 sm:px-4   md:px-4 xl:px-0">
          <div className="font-semibold tracking-wider text-center xs:text-[12px] sm:text-[16px] md:text-[16px] xl:text-[18px]  sm:text-center xl:text-center ">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

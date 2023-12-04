import { useTranslation } from "react-i18next";
import { IoBagCheckSharp } from "react-icons/io5";
export default function Post({ post }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col  mt-[-52px] justify-center w-full items-center  ">
        <div
          className="xl:mt-[144px] lg:mt-[260px] md:mt-[260px]  sm:mt-[238px] xs:mt-[240px] 
        py-14  flex-col bg-white text-[#2D2D2D]   
        w-[1290px] tracking-wider font-extrabold  
        flex justify-between gap-4  items-center 
        xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[48px] xs:text-[34px]"
        >
          <p>{t("Sample products")}</p>
          <hr className="w-[78%]  border border-[#2D2D2D]" />
          <p
            className=" xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[22px] xs:text-[16px] 
          flex gap-2 items-baseline"
          >
            <div>
              <IoBagCheckSharp />
            </div>
            {t("Not Listed")}
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center
          lg:w-[1200px] xl:w-[1290px] 
          bg-white gap-[24px]
           lg:mt-[-10px] xl:mt-[-10px] 
          md:mt-[-10px] sm:mt-[-10px] xs:mt-[-10px]
           px-14 mb-12 "
        >
          {/* <div className="bg-white w-[900px] flex m-auto mt-36 my-8 justify-center text-3xl"> */}
          {post.map((post, index) => (
            <div
              key={index}
              className="rounded-sm xs:w-28 sm:w-52 md:w-60 lg:w-60 xl:w-60 xs:h-[120px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[300px]   "
            >
              <div className=" flex bg-white justify-center">
                <img
                  className=" bg-white pb-16"
                  src={post.image}
                  alt="product"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

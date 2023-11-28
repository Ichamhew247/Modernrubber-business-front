import { useTranslation } from "react-i18next";
import { IoBagCheckSharp } from "react-icons/io5";
export default function Post({ post }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col mt-[-52px] justify-center w-full items-center  ">
        <div className="mt-36 py-14  flex-col bg-white text-[#2D2D2D]   w-[1290px] tracking-wider font-extrabold  flex justify-between gap-4  items-center text-[48px] ">
          <p>{t("Sample products")}</p>
          <hr className="w-[78%]  border border-[#2D2D2D]" />
          <p className="text-base flex gap-2 items-baseline">
            <div>
              <IoBagCheckSharp />
            </div>
            {t("Not Listed")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center bg-white  gap-[24px] w-[1290px] px-14 mb-12 ">
          {/* <div className="bg-white w-[900px] flex m-auto mt-36 my-8 justify-center text-3xl"> */}
          {post.map((post, index) => (
            <div key={index} className="rounded-sm w-60 h-[300px]   ">
              <div className=" flex bg-white justify-center">
                <img
                  className=" bg-white pb-16"
                  src={post.image}
                  alt="product"
                />
              </div>
              {/* <div className="flex mt-3 bg-orange-600  justify-center h-11"> */}
              {/* <p className="ml-3 text-lg"> {post.title}</p> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

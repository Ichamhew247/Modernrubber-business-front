import { ImBin2 } from "react-icons/im";
import RegisterInput from "./RegisterInput";

export default function EditProductForm() {
  return (
    <>
      <form className="flex flex-col gap-4 mb-5">
        <RegisterInput placeholder="ชื่อสินค้า*" />
        <RegisterInput placeholder="ชื่อสินค้าอื่น" />
        <RegisterInput placeholder="ราคาโดยประมาณ*" />
        <RegisterInput placeholder="รายละเอียดสินค้า" />
        <RegisterInput placeholder="ชนิดของสินค้า" />
        <RegisterInput placeholder="อัพโหลดรูปภาพ" />
        <img src="/src/assets/react.svg"></img>
        <button className="text-center rounded-full bg-[#6ABD65] text-white ">
          Confirm
        </button>
      </form>
      <span className="text-4xl flex justify-center ">
        <ImBin2 />
      </span>
    </>
  );
}

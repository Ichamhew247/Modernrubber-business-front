import RegisterInput from "../../auth/components/RegisterInput";

export default function AddProductForm() {
  return (
    <>
      <form className="flex flex-col gap-4 mb-5">
        <RegisterInput placeholder="ชื่อสินค้า*" />
        <RegisterInput placeholder="ชื่อสินค้าอื่น" />
        <RegisterInput placeholder="ราคาโดยประมาณ*" />
        <RegisterInput placeholder="รายละเอียดสินค้า" />
        <RegisterInput placeholder="ชนิดของสินค้า" />
        <RegisterInput placeholder="อัพโหลดรูปภาพ" />
        <button className="text-center rounded-full bg-[#6ABD65] text-white ">
          Confirm
        </button>
      </form>
    </>
  );
}

import ProductInput from "../ProductInput";

export default function EditProductForm() {
  return (
    <>
      <form className="flex flex-col gap-4 mb-5">
        <ProductInput placeholder="ชื่อสินค้า*" />
        <ProductInput placeholder="ชื่อสินค้าอื่น" />
        <ProductInput placeholder="ราคาโดยประมาณ*" />
        <ProductInput placeholder="รายละเอียดสินค้า" />
        <ProductInput placeholder="ชนิดของสินค้า" />
        <ProductInput placeholder="อัพโหลดรูปภาพ" />

        <button
          type="submit"
          className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
        >
          Confirm
        </button>
      </form>
    </>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductInput from "../../../CRUD/Products/components/ProductInput";
import { addProductAsync } from "../slice/product-slice";
export default function AddProductForm({ onClose }) {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productNameEtc, setProductNameEtc] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptProduct, setDescriptProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      addProductAsync({
        nameProduct: productName,
        nameProductEtc: productNameEtc,
        description: descriptProduct,
        type: typeProduct,
        price: priceProduct,
        image: imageProduct,
      })
    );
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 mb-5">
        <ProductInput
          placeholder="ชื่อสินค้า"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <ProductInput
          placeholder="ชื่อสินค้าอื่น ๆ"
          value={productNameEtc}
          onChange={(e) => setProductNameEtc(e.target.value)}
        />
        <ProductInput
          placeholder="ราคาโดยประมาณ*"
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
        <ProductInput
          placeholder="รายละเอียดสินค้า"
          value={descriptProduct}
          onChange={(e) => setDescriptProduct(e.target.value)}
        />
        <ProductInput
          placeholder="ชนิดของสินค้า"
          value={typeProduct}
          onChange={(e) => setTypeProduct(e.target.value)}
        />
        <ProductInput
          placeholder="อัพโหลดรูปภาพ"
          value={imageProduct}
          onChange={(e) => setImageProduct(e.target.value)}
        />

        <button
          type="submit"
          className="text-center rounded-full bg-[#6ABD65] text-white transition-all duration-300"
        >
          Confirm ADD Product
        </button>
      </form>
    </>
  );
}

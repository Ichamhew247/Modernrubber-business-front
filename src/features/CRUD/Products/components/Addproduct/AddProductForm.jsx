import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductInput from "../ProductInput";
import { addProductAsync } from "../../slice/product-slice";
export default function AddProductForm({ onClose }) {
  const dispatch = useDispatch();

  const [nameProduct, setNameProduct] = useState("");
  const [productNameEtc, setProductNameEtc] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptProduct, setDescriptProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(
        addProductAsync({
          nameProduct: nameProduct,
          nameProductEtc: productNameEtc,
          description: descriptProduct,
          type: typeProduct,
          price: priceProduct,
        })
      );
      console.log("Product added:", response);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 mb-5">
        <ProductInput
          placeholder="ชื่อสินค้า"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
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

        <button
          type="submit"
          className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

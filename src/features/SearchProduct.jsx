import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  getProductsAsync,
  // searchProductAsync,
} from "../features/CRUD/Products/slice/product-slice";
import { AiFillDelete } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";
import EditProduct from "./CRUD/Products/components/EditProduct/EditProduct";
import ProductTableInput from "./CRUD/productWorkSpaceTable/components/ProductTableInput";
import AddProduct from "./CRUD/Products/components/Addproduct/Addproduct";
import SearchContainer from "../components/SearchContainer";

export default function SearchProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleDeleteClick = (id) => {
    console.log("Delete ID:", id);
    dispatch(deleteProductAsync({ id: id }));
    console.log("Deee");
  };

  const filteredProducts = products.filter((product) => {
    const productFields = [
      product.nameProduct,
      product.nameProductEtc,
      product.description,
      product.type,
      product.price,
      // product.image,
    ];

    if (searchTerm) {
      return productFields.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  return (
    <>
      <main className="flex justify-between m-auto w-[980px] ">
        <div className="a py-2  cursor-pointer transition-all duration-300 rounded ">
          <AddProduct />
        </div>
        <div className="flex gap-2">
          <SearchContainer
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            c
          />
        </div>
      </main>
      <main className="flex flex-col m-auto w-[980px] ">
        <table className="bg-white table-fixed w-[980px]  mt-2 border-collapse border text-center">
          <thead className="bg-[#3a3022] font-medium text-white  ">
            <tr>
              <th className="font-medium w-12 h-12 ">ลำดับ</th>
              <th className="font-medium">ชื่อสินค้า</th>
              <th className="font-medium">ชื่อสินค้าอื่น ๆ </th>
              <th className="font-medium">รายละเอียดสินค้า</th>
              <th className="font-medium">ประเภทสินค้า</th>
              <th className="font-medium">ราคาสินค้า</th>
              <th className="font-medium">รูปภาพสินค้า</th>
              <th className="font-medium">การแก้ไข</th>
            </tr>
          </thead>
          <tbody className="border-b dark:border-neutral-500">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product.id}>
                  <td className="h-4">{index + 1}</td>
                  <ProductTableInput product={product.nameProduct} />
                  <ProductTableInput product={product.nameProductEtc} />
                  <ProductTableInput product={product.description} />
                  <ProductTableInput product={product.type} />
                  <ProductTableInput product={product.price} />
                  <ProductTableInput product={product.image} />
                  <td>
                    {isEditing ? (
                      <form
                        // onSubmit={handleEditFormSubmit}
                        className="flex gap-6  justify-center "
                      >
                        <div className="flex justify-end gap-4 py-2  cursor-pointer transition-all duration-300 rounded ">
                          <EditProduct />
                        </div>

                        <div
                          onClick={() => handleDeleteClick(product.id)}
                          className="cursor-pointer flex p-2  rounded-xl w-10 h-10 text-2xl  hover:bg-[#3A3022] transition-all duration-300"
                        >
                          <AiFillDelete className="deleteIcon " />
                        </div>
                      </form>
                    ) : (
                      <div
                        onClick={() => setIsEditing(true)}
                        className="cursor-pointer"
                      >
                        แก้ไข
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}

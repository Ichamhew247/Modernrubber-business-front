import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAsync,
  deleteProductAsync,
  // editProductAsync,
  // editProductAsync,
} from "../../../CRUD/Products/slice/product-slice";
// import EditForm from "./EditForm";
// import Modal from "../../../../components/Modal";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddProduct from "../../Products/components/Addproduct/Addproduct";
// import EditProductForm from "../../Products/components/EditProductForm";
import ProductTableInput from "./ProductTableInput";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import EditProduct from "../../Products/components/EditProduct/EditProduct";

export default function Table() {
  // const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [currentProducts, setCurrentProducts] = useState({});
  // const [currentProduct, setCurrentProduct] = useState({});
  ///////
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const handleDeleteClick = (id) => {
    console.log("Delete ID:", id);
    dispatch(deleteProductAsync({ id: id }));
    console.log("Deee");
  };

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // useEffect(() => {
  //   products.forEach((product) => {
  //     console.log(product.nameProduct);
  //   });
  // }, [products]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  /////////////////////////

  // const handleEditInputChange = (fieldName, fieldValue) => {
  //   setCurrentProducts({
  //     ...currentProducts,
  //     [fieldName]: fieldValue,
  //   });
  // };

  // const handleEditFormSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     editProductAsync({
  //       id: currentProduct.id,
  //       nameProduct: currentProducts.nameProduct,
  //       nameProductEtc: currentProducts.nameProductEtc,
  //       description: currentProducts.description,
  //       type: currentProducts.type,
  //       price: currentProducts.price,
  //       image: currentProducts.image,
  //     })
  //   );

  //   // ล้างข้อมูลที่แก้ไขและปิดโหมดการแก้ไข
  //   setCurrentProducts({});
  //   setIsEditing(false);
  // };

  // const handleEditClick = (product) => {
  //   setIsEditing(true);
  //   setCurrentProduct({
  //     id: product.id,
  //   });

  //   // ดึงค่าเดิมของสินค้าที่จะแก้ไข
  //   setCurrentProducts({
  //     nameProduct: product.nameProduct,
  //     nameProductEtc: product.nameProductEtc,
  //     description: product.description,
  //     type: product.type,
  //     price: product.price,
  //     image: product.image,
  //   });
  // };
  return (
    <>
      <main>
        <div className="flex justify-end gap-4 py-2  cursor-pointer transition-all duration-300 rounded ">
          <AddProduct />
        </div>

        <table className=" table-fixed w-[980px]  mt-2 border-collapse border text-center">
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
            {products ? (
              products.map((product, index) => (
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

                        {/* <div
                            onClick={() => {
                              handleEditClick(product);
                              setOpen(true);
                            }}
                            className="cursor-pointer flex p-2  rounded-xl w-10 h-10 text-2xl hover:bg-[#3A3022] transition-all duration-300"
                          >
                            <AiFillEdit className="editIcon" />
                          </div> */}
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

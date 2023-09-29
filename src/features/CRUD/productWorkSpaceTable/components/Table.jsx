import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  // editProductAsync,
  editProductAsyncFulfilled,
  getProductsAsync,
} from "../../../../features/CRUD/Products/slice/product-slice";
import ProductTableInput from "./ProductInputTable";
import EditForm from "./EditForm";
import Modal from "../../../../components/Modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Table() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const [nameProduct, setNameProduct] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProducts, setCurrentProducts] = useState({});
  const handleDeleteClick = (id) => {
    dispatch(deleteProductAsync({ id: id }));
    console.log("Deee");
  };

  const handleEditInputChange = (fieldName, fieldValue) => {
    setCurrentProducts({
      ...currentProducts,
      [fieldName]: fieldValue,
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editProductAsyncFulfilled({
        id: currentProduct.id,
        nameProduct: currentProducts.nameProduct,
        nameProductEtc: currentProducts.nameProductEtc,
        description: currentProducts.description,
        type: currentProducts.type,
        price: currentProducts.price,
        image: currentProducts.image,
      })
    );
    setCurrentProducts({});
    console.log("finish");
    setIsEditing(false);
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentProduct({
      id: product.id,
    });
    // ดึงค่าเดิม

    setCurrentProducts({
      ...currentProducts,
      nameProduct: product.nameProduct,
      nameProductEtc: product.nameProductEtc,
      description: product.description,
      type: product.type,
      price: product.price,
      image: product.image,
    });
  };

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <>
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
          {products.map((product, index) => (
            <tr key={index}>
              <td className="h-4">{index + 1}</td>
              <ProductTableInput product={product.nameProduct} />
              <ProductTableInput product={product.nameProductEtc} />
              <ProductTableInput product={product.description} />
              <ProductTableInput product={product.type} />
              <ProductTableInput product={product.price} />
              <ProductTableInput product={product.image} />

              <td>
                {isEditing ? (
                  <div className="flex gap-4">
                    <Modal
                      title="พิมพ์ข้อมูลแก้ไขใหม่"
                      width=""
                      open={open}
                      // onClose={() => setOpen(false)}
                      color="#3A3022"
                    >
                      <EditForm
                        currentProducts={currentProducts}
                        onFieldChange={handleEditInputChange}
                        onEditFormSubmit={handleEditFormSubmit}
                      />
                    </Modal>
                  </div>
                ) : (
                  <form className="flex gap-6  justify-center ">
                    <button
                      onClick={() => {
                        handleEditClick(product), setOpen(true);
                      }}
                      className=" flex p-2  rounded-xl w-10 h-10 text-2xl hover:bg-[#3A3022] transition-all duration-300"
                    >
                      <AiFillEdit className="editIcon" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(product.id)}
                      className="flex p-2  rounded-xl w-10 h-10 text-2xl  hover:bg-[#3A3022] transition-all duration-300"
                    >
                      <AiFillDelete className="deleteIcon " />
                    </button>
                  </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

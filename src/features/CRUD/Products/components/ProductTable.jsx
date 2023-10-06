import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  editProductAsync,
  getProductsAsync,
} from "../slice/product-slice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ProductTableInput from "../../productWorkSpaceTable/components/ProductTableInput";
import AddProduct from "./Addproduct/Addproduct";
import SearchContainer from "../../../../components/SearchContainer";
import Modal from "../../../../components/Modal";
import ProductInput from "./ProductInput";

export default function ProductTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentProducts, setCurrentProducts] = useState({});
  const [currentProduct, setCurrentProduct] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);
  const handleCloseModal = () => {
    setIsEditing(false);
    setOpen(false);
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentProduct({
      id: product.id,
    });

    setCurrentProducts({
      nameProduct: product.nameProduct,
      nameProductEtc: product.nameProductEtc,
      description: product.description,
      type: product.type,
      price: product.price,
    });
    console.log("currentProduct", currentProduct);
    console.log("currentProducts", currentProducts);
  };

  const handleEditProductChange = (e) => {
    setCurrentProducts({
      ...currentProducts,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editProductAsync({
        id: currentProduct.id,
        nameProduct: currentProducts.nameProduct,
        nameProductEtc: currentProducts.nameProductEtc,
        description: currentProducts.description,
        type: currentProducts.type,
        price: currentProducts.price,
      })
    );

    setIsEditing(false);
  };
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
      product.image,
    ];

    if (searchTerm) {
      return productFields.some((field) =>
        field ? field.toLowerCase().includes(searchTerm.toLowerCase()) : false
      );
    }
    return true;
  });

  return (
    <>
      {isEditing ? (
        <Modal
          title="Update Product"
          width="27"
          open={open}
          onClose={handleCloseModal}
          color="#3A3022"
        >
          <form
            onSubmit={handleEditProductSubmit}
            className="flex flex-col gap-4 mb-5"
          >
            <ProductInput
              type="text"
              name="nameProduct"
              placeholder="ชื่อสินค้า"
              value={currentProducts.nameProduct}
              onChange={handleEditProductChange}
            />
            <ProductInput
              type="text"
              name="nameProductEtc"
              placeholder="ชื่อสินค้าอื่น ๆ"
              value={currentProducts.nameProductEtc}
              onChange={handleEditProductChange}
            />
            <ProductInput
              type="text"
              name="description"
              placeholder="ราคาโดยประมาณ"
              value={currentProducts.description}
              onChange={handleEditProductChange}
            />
            <ProductInput
              type="text"
              name="type"
              placeholder="ประเภทสินค้า"
              value={currentProducts.type}
              onChange={handleEditProductChange}
            />
            <ProductInput
              type="text"
              name="price"
              placeholder="Edit price"
              value={currentProducts.price}
              onChange={handleEditProductChange}
            />
            <button
              type="submit"
              className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
            >
              Confirm
            </button>
          </form>
        </Modal>
      ) : null}

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

                  <td>
                    {isEditing ? (
                      <form className="flex gap-6   justify-center ">
                        <div
                          onClick={() => {
                            handleEditClick(product);
                            setOpen(true);
                          }}
                          className="flex justify-end gap-4 py-2   cursor-pointer transition-all duration-300 rounded "
                        >
                          <div
                            className="hover:bg-zinc-800 hover:text-white
                            items-baseline rounded flex gap-4 p-2 transition-all
                            duration-300  text-xl "
                          >
                            <AiFillEdit className="editIcon" />
                          </div>
                        </div>

                        <div
                          onClick={() => handleDeleteClick(product.id)}
                          className="cursor-pointer hover:bg-zinc-800 hover:text-white
                            items-center rounded flex gap-4 p-2 transition-all
                            duration-300  text-xl"
                        >
                          <AiFillDelete className="deleteIcon " />
                        </div>
                      </form>
                    ) : (
                      <div
                        onClick={() => {
                          setIsEditing(true);
                        }}
                        className="cursor-pointer p-2 rounded w-24  m-auto  text-sm hover:text-white   hover:bg-[#3A3022] transition-all duration-300"
                      >
                        แก้ไข
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
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

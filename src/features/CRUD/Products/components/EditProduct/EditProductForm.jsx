// // EditProductForm.jsx
// import { useDispatch } from "react-redux";
// import { editProductAsync } from "../../slice/product-slice";
// import ProductInput from "../ProductInput";
// import { useState } from "react";

// export default function EditProductForm({ onClose, product }) {
//   const dispatch = useDispatch();

//   const [currentProduct, setCurrentProduct] = useState(product);

//   const handleEditProduct = async (e) => {
//     e.preventDefault();

//     await dispatch(
//       editProductAsync({
//         id: currentProduct.id,
//         nameProduct: currentProduct.nameProduct,
//         nameProductEtc: currentProduct.nameProductEtc,
//         description: currentProduct.description,
//         type: currentProduct.type,
//         price: currentProduct.price,
//       })
//     );

//     onClose(); // ปิดโมดอลเมื่อแก้ไขเสร็จสิ้น
//   };

//   const handleEditInputChange = (e) => {
//     setCurrentProduct({
//       ...currentProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleEditProduct} className="flex flex-col gap-4 mb-5">
//         <ProductInput
//           name="nameProduct"
//           onChange={handleEditInputChange}
//           placeholder="ชื่อสินค้า*"
//           value={currentProduct.nameProduct}
//         />
//         <ProductInput
//           name="nameProductEtc"
//           onChange={handleEditInputChange}
//           placeholder="ชื่อสินค้าอื่น"
//           value={currentProduct.nameProductEtc}
//         />
//         <ProductInput
//           name="price"
//           onChange={handleEditInputChange}
//           placeholder="ราคาโดยประมาณ*"
//           value={currentProduct.price}
//         />
//         <ProductInput
//           name="description"
//           onChange={handleEditInputChange}
//           placeholder="รายละเอียดสินค้า"
//           value={currentProduct.description}
//         />
//         <ProductInput
//           name="type"
//           onChange={handleEditInputChange}
//           placeholder="ชนิดของสินค้า"
//           value={currentProduct.type}
//         />
//         <ProductInput placeholder="อัพโหลดรูปภาพ" />

//         <button
//           type="submit"
//           className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
//         >
//           Confirm
//         </button>
//       </form>
//     </>
//   );
// }

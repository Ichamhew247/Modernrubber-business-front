import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductInput from "../ProductInput";
import { addProductAsync } from "../../slice/product-slice";
// import Img from "../../../../../pages/Img";

export default function AddProductForm({ onClose }) {
  const dispatch = useDispatch();

  // Product details state
  const [nameProduct, setNameProduct] = useState("");
  const [nameProductEtc, setNameProductEtc] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptProduct, setDescriptProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");

  // Image upload state
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");

  // Preview uploaded image
  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  // Handle image selection
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    previewFiles(selectedFile);
  };

  // Handle image upload
  const handleUploadImage = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Make an API call to upload the image
      const response = await fetch(
        "http://localhost:9999/products/imageProduct",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        setUploadedImg(result.secure_url); // Update the uploadedImg state with the image URL
      } else {
        console.error("Failed to upload image");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  // Handle form submission
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await dispatch(
        addProductAsync({
          nameProduct,
          nameProductEtc,
          description: descriptProduct,
          type: typeProduct,
          price: priceProduct,
          productimage: uploadedImg,
        })
      );

      if (response) {
        console.log("Product added:", response);
        onClose();
      } else {
        console.error("Failed to add product");
      }
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
          value={nameProductEtc}
          onChange={(e) => setNameProductEtc(e.target.value)}
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

        {/* Image upload input */}
        <input
          type="file"
          id="fileInput"
          onChange={handleChange}
          accept="image/png, image/jpg, image/jfif"
        />

        {/* Preview uploaded image */}
        {image && <img className="w-28" src={image} alt="Preview" />}

        {/* Display the uploaded image URL */}
        {uploadedImg && <p>Uploaded Image URL: {uploadedImg}</p>}

        {/* Buttons */}
        <button
          type="button"
          onClick={handleUploadImage}
          className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
        >
          Upload Image
        </button>

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

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import ProductInput from "../ProductInput";
// import { addProductAsync } from "../../slice/product-slice";
// import Img from "../../../../../pages/Img";
// import UploadImage from "../../../../../pages/UploadImage";
// export default function AddProductForm({ onClose }) {
//   const [file, setFile] = useState("");
//   const [image, setImage] = useState("");
//   const [uploadedImg, setUploadedImg] = useState("");
//   function previewFiles(file) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     console.log(image);
//   }
//   const dispatch = useDispatch();

//   const [nameProduct, setNameProduct] = useState("");
//   const [productNameEtc, setProductNameEtc] = useState("");
//   const [priceProduct, setPriceProduct] = useState("");
//   const [descriptProduct, setDescriptProduct] = useState("");
//   const [typeProduct, setTypeProduct] = useState("");

//   const handleSubmitForm = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await dispatch(
//         addProductAsync({
//           nameProduct: nameProduct,
//           nameProductEtc: productNameEtc,
//           description: descriptProduct,
//           type: typeProduct,
//           price: priceProduct,
//           productimage: uploadedImg,
//         })
//       );
//       console.log("Product added:", response);
//       onClose();
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };
//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     setFile(file);
//     previewFiles(file);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 mb-5">
//         <ProductInput
//           placeholder="ชื่อสินค้า"
//           value={nameProduct}
//           onChange={(e) => setNameProduct(e.target.value)}
//         />
//         <ProductInput
//           placeholder="ชื่อสินค้าอื่น ๆ"
//           value={productNameEtc}
//           onChange={(e) => setProductNameEtc(e.target.value)}
//         />
//         <ProductInput
//           placeholder="ราคาโดยประมาณ*"
//           value={priceProduct}
//           onChange={(e) => setPriceProduct(e.target.value)}
//         />
//         <ProductInput
//           placeholder="รายละเอียดสินค้า"
//           value={descriptProduct}
//           onChange={(e) => setDescriptProduct(e.target.value)}
//         />
//         <ProductInput
//           placeholder="ชนิดของสินค้า"
//           value={typeProduct}
//           onChange={(e) => setTypeProduct(e.target.value)}
//         />
//         <input
//           type="file"
//           id="fileInput"
//           onChange={((e) => handleChange(e), setTypeProduct(e.target.value))}
//           accept="image/png, image/jpg, image/jfif"
//         />
//         <img className="w-28" src={image} alt="" />
//         <Img uploadedImg={uploadedImg} />
//         <button
//           type="submit"
//           className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
//         >
//           Add Product
//         </button>
//       </form>
//     </>
//   );
// }

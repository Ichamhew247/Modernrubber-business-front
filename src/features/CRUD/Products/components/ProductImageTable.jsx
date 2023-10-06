import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddProductImage from "./Addproduct/AddProductImage ";

export default function ProductImageTable() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/image")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className=" m-auto w-[980px]  ">
        <div className="flex justify-between w-[756px]">
          <div className="invisible">x</div>
          <div className=" flex justify-between w-28 py-2 cursor-pointer transition-all duration-300 rounded ">
            <AddProductImage />
          </div>
        </div>
        <table className=" border-gray-100  table-fit w-[740px] m-auto text-center bg-white">
          <thead className="bg-[#3a3022] font-medium text-white  ">
            <tr>
              <th className="font-medium w-24 h-12 ">ลำดับ</th>
              <th className="font-medium w-44">ชื่อภาพ</th>
              <th className="font-medium w-44">ภาพ</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{image.imageName}</td>

                <td className=" flex justify-center p-4  border-b-0 border-l-0">
                  <img
                    className="w-24 text-center  "
                    src={`http://localhost:9999/images/` + image.imageProfile}
                    alt={`Image ${index}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import SearchContainer from "../components/SearchContainer";
// import ProductInput from "../features/CRUD/Products/components/ProductInput";

// export default function FileUpload() {
//   const [file, setFile] = useState();
//   const [images, setImages] = useState([]);
//   const [imageName, setImageName] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:9999/image")
//       .then((res) => {
//         setImages(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleFile = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formdata = new FormData();
//       formdata.append("image", file);
//       formdata.append("imageName", imageName); // ใช้ค่า imageName ที่กำหนดไว้

//       const response = await axios.post(
//         "http://localhost:9999/upload",
//         formdata
//       );

//       if (response.data.message === "Success") {
//         console.log("Succeeded");
//         console.log(response.data);
//       } else {
//         console.log("Failed");
//       }

//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <main className="flex justify-between m-auto w-[980px] ">
//         <div className="a py-2  cursor-pointer transition-all duration-300 rounded ">
//           <form onClick={handleUpload} className="flex  flex-col">
//             <ProductInput
//               placeholder="ชื่อสินค้า"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//             />
//             <input
//               type="file"
//               onChange={handleFile}
//               className="hover:border-neutral-500   "
//             />

//             <button
//               type="submit"
//               className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
//             >
//               Upload
//             </button>
//           </form>
//         </div>
//       </main>
//       FileUpload
//       {/* <form onClick={handleUpload}>
//         <input type="file" onChange={handleFile} />
//         <input
//           type="text"
//           placeholder="ชื่อภาพ"
//           value={imageName}
//           onChange={(e) => setImageName(e.target.value)}
//         />
//         <button type="submit">Upload</button>
//       </form>
//       <br />
//       <table className="table-auto w-96">
//         <thead className="bg-[#3a3022] font-medium text-white  ">
//           <tr>
//             <th className="font-medium w-12 h-12 ">ลำดับ</th>
//             <th className="font-medium">ภาพ</th>
//             <th className="font-medium">ชื่อภาพ</th>
//           </tr>
//         </thead>
//         <tbody>
//           {images.map((image, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   className="w-12"
//                   src={`http://localhost:9999/images/` + image.imageProfile}
//                   alt={`Image ${index}`}
//                 />
//               </td>
//               <td>{image.imageName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//     </>
//   );
// }

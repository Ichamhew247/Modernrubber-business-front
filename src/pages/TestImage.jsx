import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductInput from "./ProductInput";
import ProtectedRoute from "../../../auth/components/ProtectedRoute";

export default function ProductImageTable() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState();
  const [imageName, setImageName] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("imageName", imageName);

      const response = await axios.post(
        "http://localhost:9999/upload",
        formdata
      );

      if (response.data.message === "Success") {
        console.log("Succeeded");
        console.log(response.data);
      } else {
        console.log("Failed");
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9999/images");
        setImages(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ProtectedRoute>
        <main className=" m-auto w-[980px]  ">
          <div className="m-auto flex justify-between w-[740px] ">
            <div className="invisible">x</div>
            <div className=" flex justify-between  w-fit py-2 cursor-pointer transition-all duration-300 rounded ">
              <form onSubmit={handleUpload} className="flex  flex-col pb-8">
                <ProductInput
                  placeholder="ชื่อสินค้า"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                />
                <input
                  type="file"
                  onChange={handleFile}
                  className="hover:border-neutral-500 border-none -mx-2  "
                />

                <button
                  type="submit"
                  className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
                >
                  Upload
                </button>
              </form>
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
                  <td className=" border-b-0 ">{index + 1}</td>
                  <td className=" border-b-0 ">{image.imageName}</td>

                  <td className=" flex justify-center p-4  border-b-0 border-l-0">
                    <img
                      className="w-24 text-center  "
                      src={`http://localhost:9999/images/` + image.imageProduct}
                      alt={`Image ${index}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </ProtectedRoute>
    </>
  );
}

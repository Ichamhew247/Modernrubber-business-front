import { useState } from "react";
import ProductInput from "../ProductInput";
import axios from "axios";
export default function AddProductImageForm() {
  const [file, setFile] = useState();
  const [imageName, setImageName] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("imageName", imageName); // ใช้ค่า imageName ที่กำหนดไว้

      const response = await axios.post(
        "http://localhost:9999/upload",
        formdata
      );

      if (response.data.message === "Success") {
        console.log("Succeeded");
        console.log(response.data);
        history.push("/work");
      } else {
        console.log("Failed");
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onClick={handleUpload} className="flex  flex-col pb-8">
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
    </>
  );
}

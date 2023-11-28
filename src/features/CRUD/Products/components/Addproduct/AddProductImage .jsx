import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Modal from "../../../../../components/Modal";
// import AddProductImageForm from "./AddProductImageForm";
import ProductInput from "../ProductInput";
import axios from "axios";
export default function AddProductImage() {
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
  const [open, setOpen] = useState(false);

  //   const handleCloseModal = () => {
  //     setOpen(false);
  //   };
  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="  p-2 hover:bg-zinc-800  hover:text-white transition-all duration-300 items-baseline rounded flex gap-4   "
      >
        <div>
          <HiCursorClick />
        </div>
        <div>เพิ่มภาพสินค้า</div>
      </div>
      <Modal
        title="Add Image Product"
        width="38"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        {/* <AddProductImageForm onClose={handleCloseModal} /> */}
        <form onSubmit={handleUpload} className="flex flex-col pb-8">
          <ProductInput
            placeholder="ชื่อภาพ"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
          <input
            type="file"
            onChange={handleFile}
            className="hover:border-neutral-500 border-none -mx-2"
          />
          <button
            type="submit"
            className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
          >
            Upload
          </button>
        </form>
      </Modal>
    </div>
  );
}

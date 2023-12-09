import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Modal from "../../../components/Modal";
// import AddProductImageForm from "./AddProductImageForm";
// import ProductInput from "../ProductInput";
import axios from "axios";
import LoginInput from "../Components/AddInput";
export default function AddProductImage() {
  const [file, setFile] = useState();
  const [imagePrice, setImagePrice] = useState("");
  const [imageDetail, setImageDetail] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  const [imageName, setImageName] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("imageName", imageName);
      formdata.append("imagePrice", imagePrice);
      formdata.append("imageDetail", imageDetail);
      formdata.append("imageCategory", imageCategory);

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

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="  p-2 hover:bg-zinc-800  hover:text-white transition-all duration-300 items-baseline rounded flex gap-4   "
      >
        <div>
          <HiCursorClick />
        </div>
        <div>Add Product</div>
      </div>
      <Modal
        title="Add New Product"
        width="38"
        open={open}
        onClose={() => setOpen(false)}
        color="#3A3022"
      >
        {/* <AddProductImageForm onClose={handleCloseModal} /> */}
        <form onSubmit={handleUpload} className="flex flex-col pb-8">
          <LoginInput
            placeholder="Product's name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
          <LoginInput
            placeholder="Price"
            value={imagePrice}
            onChange={(e) => setImagePrice(e.target.value)}
          />
          <LoginInput
            placeholder="Details"
            value={imageDetail}
            onChange={(e) => setImageDetail(e.target.value)}
          />
          <LoginInput
            placeholder="Type"
            value={imageCategory}
            onChange={(e) => setImageCategory(e.target.value)}
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

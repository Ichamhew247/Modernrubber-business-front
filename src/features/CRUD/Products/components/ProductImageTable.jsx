import axios from "axios";
import { useEffect, useState } from "react";
import ProductInput from "./ProductInput";
import ProtectedRoute from "../../../auth/components/ProtectedRoute";
import Modal from "../../../../components/Modal";
import SearchContainer from "../../../../components/SearchContainer";
import AddProductImage from "./Addproduct/AddProductImage ";
// import AddProductImage from "./Addproduct/AddProductImage ";
export default function ProductImageTable() {
  const [images, setImages] = useState([]);
  // const [file, setFile] = useState();
  // const [imageName, setImageName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentImages, setCurrentImages] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   try {
  //     const formdata = new FormData();
  //     formdata.append("image", file);
  //     formdata.append("imageName", imageName);

  //     const response = await axios.post(
  //       "http://localhost:9999/upload",
  //       formdata
  //     );

  //     if (response.data.message === "Success") {
  //       console.log("Succeeded");
  //       console.log(response.data);
  //     } else {
  //       console.log("Failed");
  //     }

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleEditClick = (image) => {
    setIsEditing(true);
    setCurrentImage({
      id: image.id,
    });

    setCurrentImages({
      imageName: image.imageName,
    });

    setOpen(true);
  };

  const handleEditImageChange = (e) => {
    setCurrentImages({
      ...currentImages,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditImageSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:9999/editImages/${currentImage.id}`,
        currentImages
      );

      if (response.data.message === "Update succeeded") {
        console.log("Edit succeeded");
        console.log(response.data);
        fetchImages();
      } else {
        console.log("Edit failed");
      }

      setIsEditing(false);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      console.log("Attempting to delete image with ID:", id);
      const response = await axios.delete(
        `http://localhost:9999/deleteImage/${id}`
      );
      console.log(response);
      //   fetchImages();
      if (response.data.message === "Image and data deleted successfully") {
        console.log("Delete succeeded");
        console.log(response.data);
        // Refresh images after delete
        fetchImages();
      } else {
        console.log("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:9999/images");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleCloseModal = () => {
    setIsEditing(false);
    setOpen(false);
  };

  return (
    <ProtectedRoute>
      {isEditing ? (
        <Modal
          title="Update Product"
          width="27"
          open={open}
          onClose={handleCloseModal}
          color="#3A3022"
        >
          <form
            onSubmit={handleEditImageSubmit}
            className="flex flex-col gap-4 mb-5"
          >
            <ProductInput
              type="text"
              name="imageName"
              placeholder="ชื่อรูปภาพ"
              value={currentImages.imageName}
              onChange={handleEditImageChange}
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
        <div className="flex gap-2">
          <SearchContainer
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
        </div>
        <div className="a py-2  cursor-pointer transition-all duration-300 rounded ">
          <AddProductImage />
        </div>
      </main>
      <main>
        <table className="border-gray-100 table-fit w-[740px] m-auto text-center bg-white">
          <thead className="bg-[#3a3022] font-medium text-white">
            <tr>
              <th className="font-medium w-24 h-12">ลำดับ</th>
              <th className="font-medium w-44">ชื่อภาพ</th>
              <th className="font-medium w-44">ภาพ</th>
              <th className="font-medium w-32">การแก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {images
              .filter((image) =>
                image.imageName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((image, index) => (
                <tr key={index}>
                  <td className="border-b-0">{index + 1}</td>
                  <td className="border-b-0">{image.imageName}</td>
                  <td className="flex justify-center p-4 border-b-0 border-l-0">
                    <img
                      className="w-24 text-center"
                      src={`http://localhost:9999/images/${image.imageProduct}`}
                      alt={`Image ${index}`}
                    />
                  </td>
                  <td>
                    {isEditing ? (
                      <form className="flex gap-6 justify-center">
                        <div
                          onClick={() => {
                            handleEditClick(image);
                          }}
                          className="cursor-pointer transition-all duration-300 rounded p-2 hover:bg-zinc-800 hover:text-white items-baseline flex gap-4 text-xl"
                        >
                          Edit
                        </div>
                        <div
                          onClick={() => handleDeleteClick(image.id)}
                          className="cursor-pointer transition-all duration-300 rounded p-2 hover:bg-zinc-800 hover:text-white items-center flex gap-4 text-xl"
                        >
                          Delete
                        </div>
                      </form>
                    ) : (
                      <div
                        onClick={() => {
                          setIsEditing(true);
                        }}
                        className="cursor-pointer p-2 rounded w-24 m-auto text-sm hover:text-white hover:bg-[#3A3022] transition-all duration-300"
                      >
                        Edit
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </ProtectedRoute>
  );
}

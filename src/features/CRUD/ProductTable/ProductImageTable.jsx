import axios from "axios";
import { useEffect, useState } from "react";
import AddInput from "../Components/AddInput";
// import ProtectedRoute from "../../../auth/components/ProtectedRoute";
import Modal from "../../../components/Modal";
import SearchContainer from "../../../components/SearchContainer";
import AddProductImage from "./AddProductImage ";
// import AddProductImage from "./Addproduct/AddProductImage ";
import { useTranslation } from "react-i18next";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
export default function ProductImageTable() {
  const { t } = useTranslation();
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
    <>
      {/* <ProtectedRoute> */}
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
            <AddInput
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
      <main className=" flex flex-col mb-96">
        <main className=" flex justify-between m-auto w-[980px] ">
          <div className="flex gap-2">
            <SearchContainer
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder=""
            />
          </div>
          <div className="text-white py-2  cursor-pointer transition-all duration-300 rounded ">
            <AddProductImage />
          </div>
        </main>
        <main>
          <table className="bg-white border-collapse w-[980px] table-fixed   mt-2 border text-center">
            <thead className="bg-[#2D2D2D] font-medium text-white  ">
              <tr>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Order")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Name of Product")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Price")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Details")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Category")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Image of Product")}
                </th>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  {t("Edit")}
                </th>
              </tr>
            </thead>
            <tbody>
              {images
                .filter((image) =>
                  image.imageName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((image, index) => (
                  <tr key={index}>
                    <td className="border-b-2 border-white">{index + 1}</td>
                    <td className="border-b-2 border-white">
                      {image.imageName}
                    </td>
                    <td className="border-b-2 border-white">ห</td>
                    <td className="border-b-2 border-white">ก</td>
                    <td className="border-b-2 border-white">อ</td>
                    <td className="border-b-2 border-white">
                      <img
                        className="w-24 text-center p-4"
                        src={`http://localhost:9999/images/${image.imageProduct}`}
                        alt={`Image ${index}`}
                      />
                    </td>
                    <td className="border-b-2 border-white">
                      {isEditing ? (
                        <form className="flex gap-6 justify-center">
                          <div
                            onClick={() => {
                              handleEditClick(image);
                            }}
                            className="cursor-pointer transition-all duration-300 rounded p-2 hover:bg-zinc-800 hover:text-white items-baseline flex gap-4 text-xs"
                          >
                            <div
                              className="hover:bg-zinc-800 hover:text-white
                          items-baseline rounded flex gap-4 p-2 transition-all
                          duration-300 text-xl "
                            >
                              <AiFillEdit className="editIcon" />
                            </div>
                          </div>
                          <div
                            onClick={() => handleDeleteClick(image.id)}
                            className="cursor-pointer hover:bg-zinc-800 hover:text-white
                            items-center rounded flex gap-4 p-2 transition-all
                            duration-300 text-xl"
                          >
                            <AiFillDelete className="deleteIcon" />
                          </div>
                        </form>
                      ) : (
                        <div
                          onClick={() => {
                            setIsEditing(true);
                          }}
                          className="hover:text-black text-[#3e3e3e]
                      items-baseline rounded flex gap-4 p-2 transition-all
                      duration-300 cursor-pointer text-xl justify-center"
                        >
                          <AiFillEdit />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      </main>
      {/* </ProtectedRoute> */}
    </>
  );
}

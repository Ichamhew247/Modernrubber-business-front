import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddProductImage from "./Addproduct/AddProductImage ";

export default function ProductImageTable() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/images")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className=" m-auto w-[980px]  ">
        <div className="m-auto flex justify-between w-[740px] ">
          <div className="invisible">x</div>
          <div className=" flex justify-between  w-fit py-2 cursor-pointer transition-all duration-300 rounded ">
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
    </>
  );
}

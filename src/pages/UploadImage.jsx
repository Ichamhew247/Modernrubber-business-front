import { useState } from "react";
import axios from "axios";
function UploadImage() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
    console.log(image);
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:9999/upload", {
      image: image,
    });
    try {
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Upload your photo here</label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => handleChange(e)}
            required
            accept="image/png, image/jpg, image/jfif"
          />
          <button className="cursor-pointer">submit</button>
        </form>
      </div>
      <img src={image} alt="" />
    </>
  );
}

export default UploadImage;

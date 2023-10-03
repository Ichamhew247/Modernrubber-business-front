import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/")
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("image", file);
    axios
      .post("http://localhost:9999/upload", formdata) // ใช้ URL ของ proxy server
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("Succeded");
          console.log(data);
        } else {
          console.log("Failed");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FileUpload
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {data.productImage ? (
        <img
          src={`http://localhost:9999/images/` + data.productImage}
          alt="mew"
        />
      ) : (
        "No picture now"
      )}
    </div>
  );
}

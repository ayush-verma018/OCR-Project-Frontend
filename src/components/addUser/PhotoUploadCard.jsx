import { useState } from "react";
import axios from "axios";

const PhotoUploadCard = (imgdata, setImgData) => {
  const [imageLink, setImageLink] = useState("");
  const extractHandler = () => {
    axios
      .post("/ocrdata", { link: imageLink })
      .then((res) => setImgData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex-vertical">
      <div className="flex gap-2">
        <input
          onChange={(e) => setImageLink(e.target.value)}
          type="text"
          placeholder="Enter the image URL"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={extractHandler}
          className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Extract
        </button>
      </div>

      <p className="text-gray-900 text-sm">
        Upload a photo for OCR processing.
      </p>

      <div>
        <h2 className="text-white text-2xl font-bold my-4">Extracted Data</h2>
        <div
          className={`bg-white p-2 rounded-xl ${
            imgdata === "" ? "h-32" : "h-auto"
          }`}
        >
          {JSON.stringify(imgdata.user) || ""}
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadCard;

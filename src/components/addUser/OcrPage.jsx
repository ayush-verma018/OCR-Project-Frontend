import { useEffect, useState } from "react";
import OcrDataForm from "./OcrDataForm";
import PhotoUploadCard from "./PhotoUploadCard";
import axios from "axios";

const OcrPage = () => {
  const [data, setData] = useState({});
  const [imageLink, setImageLink] = useState("");
  const [formData, setFormData] = useState({});
  const getFormData = () => {
    setFormData(data.user);
  };
  const extractHandler = () => {
    axios
      .post("/ocrdata", { link: imageLink })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <h1 className="text-blue-500 text-2xl font-bold text-center my-4">
        ID Card OCR
      </h1>
      <div className="flex gap-8 align-center my-4 mx-4">
        {/* Left side: Photo Upload Card */}
        <div className="w-1/2 p-4 bg-blue-400 rounded-md">
          <h2 className="text-2xl text-white font-bold mb-4">Photo Upload</h2>
          {/* <PhotoUploadCard imgdata={data} setImgData={setData} /> */}
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
              <h2 className="text-white text-2xl font-bold my-4">
                Extracted Data
              </h2>
              <div
                className={`bg-white p-2 rounded-xl ${
                  data === "" ? "h-32" : "h-auto"
                }`}
              >
                {JSON.stringify(data.user) || ""}
              </div>
              <button
                onClick={getFormData}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 rounded"
              >
                Get
              </button>
            </div>
          </div>
        </div>

        {/* Right side: OCR Form */}
        <div className="w-1/2 p-4 bg-blue-400 rounded-md">
          <h2 className="text-2xl text-white font-bold mb-4">
            ID Card OCR Form
          </h2>
          <OcrDataForm imgdata={formData} />
        </div>
      </div>
    </div>
  );
};

export default OcrPage;

import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const OcrDataForm = (imgdata) => {
  useEffect(() => {
    console.log(imgdata);
  }, [imgdata]);

  const navigate = useNavigate();

  //this will submit the form and update the data of the user according to the id and the data filled in input tabs
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("/create", imgdata.imgdata)
      .then(() => {
        toast.success("Saved Successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* Form */}
      <form className="max-w-md mx-auto" onSubmit={submitForm}>
        <div className="mb-2">
          <label
            htmlFor="idNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ID Number:
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={imgdata?.imgdata?.idNumber}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter ID Number"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="fname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={imgdata?.imgdata?.fname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter First Name"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="lname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={imgdata.imgdata.lname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="doBirth"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth:
          </label>
          <input
            type="text"
            id="doBirth"
            name="doBirth"
            value={imgdata.imgdata.doBirth}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Date of Birth"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="doIssue"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Issue:
          </label>
          <input
            type="text"
            id="doIssue"
            name="doIssue"
            value={imgdata.imgdata.doIssue}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Date of Issue"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="doExpiry"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Expiry:
          </label>
          <input
            type="text"
            id="doExpiry"
            name="doExpiry"
            value={imgdata.imgdata.doExpiry}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Date of Expiry"
          />
        </div>
        <div className="mb-2 flex justify-between">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
          <Link
            to={"/"}
            type="back"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OcrDataForm;

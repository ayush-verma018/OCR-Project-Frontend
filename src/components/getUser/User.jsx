import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  //Every time the site is rendered we will fetch all the data from the DB using getAll api link
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/getAll");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  //function to delete user data from db and reflect the same on UI
  const deleteUser = async (userId) => {
    await axios
      .delete(`/deleteUser/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.error(response.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-blue-500 text-2xl font-bold text-center my-4">
        User Information
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-300">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              S.No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              ID Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              First Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              Date of Birth
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              Date of Issue
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              Date of Expiry
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* rows are added using map function and all the users data from the db is shown in UI */}
          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.idNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.fname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.doBirth}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.doIssue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.doExpiry}
                  </td>
                  <td className="flex gap-1 px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/edit/${user._id}`}
                      className="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="flex gap-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-center">
        <Link
          to={"/add"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Add User
        </Link>
      </div>
    </div>
  );
};

export default User;

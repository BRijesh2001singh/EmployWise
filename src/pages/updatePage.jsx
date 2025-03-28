import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UpdatePage = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const location = useLocation();
  const { user_id } = location.state;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/users/${user_id}`);
      if (res.data) setUserData(res.data.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //update user
  const updateUser=async(e)=>{
      e.preventDefault();
    const res=await axios.put(`${baseUrl}api/users/${user_id}`,{
      first_name:userData.first_name,
      last_name:userData.last_name,
      email:userData.email
    });
    if(res.status===200){
        toast.success("User Data updated")
    }
    else toast.error("Failed to update user.")
}




//delete User
const deleteUser=async(e)=>{
    e.preventDefault();
    const check= window.confirm("You are about to delete the user data.");
    if(check){
  const res=await axios.delete(`${baseUrl}api/users/${user_id}`);
  if(res.status===204){
      toast.success("User deleted");
  }
  else toast.error("Failed to delete User data");
}
else toast.error("Failed to delete user data");
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Update User</h2>
        <div className="flex justify-center">
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        </div>
        <form className="mt-4" onSubmit={updateUser}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 m-1 rounded hover:bg-blue-600 transition"
          >
            Update User
          </button>
        
        </form>
        <button
            onClick={deleteUser}
            className="w-full bg-red-500 text-white p-2 m-1 rounded hover:bg-red-600 transition"
          >
            Delete User
          </button>
      </div>
    </div>
  );
};

export default UpdatePage;

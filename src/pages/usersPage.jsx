import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserCard from '../components/userCard';
import {ArrowBigRight,ArrowBigLeft,LogOut} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
  const baseUrl=import.meta.env.VITE_API_BASE_URL;
  const [error,setError]=useState(null);
  const [users,setUsers]=useState([]);
  const [filteredUser,setFilteredUser]=useState(users);
  const [pageN,setPageN]=useState(1);
  const [totalPage,setTotalPage]=useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();
  const fetchUsers=async()=>{
  try {
    setError(null);
      const res=await axios.get(`${baseUrl}api/users?page=${pageN}`);
      if(res){
        setUsers(res.data.data);
        setFilteredUser(res.data.data);
         setTotalPage(res.data.total_pages);
      }
  } catch (error) {
    setError(error);
  }
  }  
  useEffect(()=>{   
      fetchUsers();
     },[pageN])

const changePage=(page)=>{//pagination logic
   if(page===pageN||page<0||page>totalPage)return;
   setPageN(page);
}
//SEARCH USERS
const searchUser = (e) => {
  const term = e.target.value.toLowerCase();
  setSearchTerm(term);

  if (term === "") {
    setFilteredUser(users); // Reset to all users when search is empty
  } else {
    const filtered = users.filter(user =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(term)
    );
    setFilteredUser(filtered);
  }
};

//logout

const handleLogout=()=>{
  localStorage.clear("token");
  localStorage.clear("email");
  navigate("/")
}

     return (
    <div className='container mx-auto py-8 px-4'>
      <div className='ml-1 sm:ml-5 p-2 w-1xl'>
        <div className='flex flex-row justify-between'>
     <h1 className='text-lg sm:text-5xl font-serif'>User List</h1>
      <span onClick={handleLogout} className='cursor-pointer'><LogOut color='red'/>Logout</span>
           </div>
     <input   
     placeholder="Search users..."
          className='border border-gray-300 w-full h-9 rounded-lg outline-none focus:ring-2 focus:ring-gray-400 my-1 p-2'
          type='text'
          value={searchTerm}
          onChange={searchUser}
     />
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-2 p-2 sm:p-6">
      {filteredUser&&(filteredUser.map((user)=>(
        <UserCard key={user.id} userData={user}/>
      )))}
      </div>
      <span>{error}</span>
      <div className='w-full  flex flex-row justify-center items-center'>
        <button onClick={()=>changePage(pageN-1)}><ArrowBigLeft color='black'/></button>
        {
          Array.from({length:totalPage}).map((_,i)=>(
            <button className={`border-1  p-1.5  rounded cursor-pointer m-1 hover:scale-110 ${pageN===i+1?"bg-blue-500 text-white":"bg-gray-200"}`} 
            onClick={()=>changePage(i+1)}
            key={i}>{i+1}</button>
          ))
        }
        <button onClick={()=>changePage(pageN+1)}><ArrowBigRight color='black'/></button>
      </div>
    </div>
  )
}
export default UsersPage

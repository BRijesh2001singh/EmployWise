import React, { useEffect, useState } from 'react';
import { FilePen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const UserCard = ({userData}) => {
    const navigate=useNavigate();
    const [currUser,setCurrUser]=useState(null);
    useEffect(()=>{
        setCurrUser(localStorage.getItem("email"));
    },[])
    const handleEdit=(id)=>{ //handles edit form
            navigate("/edituser",{state:{user_id:id}})
    }
  return (
    <div className='flex flex-row justify-center items-end border-1 border-gray-400 w-full p-2 rounded-lg
    hover:shadow-lg'>
        <div>
    <img className='w-[150px] h-[150px] rounded-full' src={userData.avatar} alt="user avatar"/>
    <span className='ml-4'>{userData.first_name} {userData.last_name}</span>
    </div>
    {userData.email===currUser?<div className='rounded-full p-1 bg-blue-400 hover:scale-110' title='edit'>
       <FilePen color='white'onClick={()=>handleEdit(userData.id)}/>
        </div>:null}
  
    </div>
  )
}

export default UserCard

import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate=useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/users");
    }
  }, [navigate]); 
    const baseUrl=import.meta.env.VITE_API_BASE_URL;
    const [rememberMe,setRememberMe]=useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [error,setError]=useState(null);
    const handleChange=(e)=>{  //handles all states changes
      setError(null);
      const {name,value}=e.target;
      setFormData((prev)=>({
        ...prev,[name]:value
      }))
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
      try {
           const res=await axios.post(`${baseUrl}api/login`,{
              email:formData.email,
              password:formData.password
           })
           if(res){
            if(rememberMe){
              localStorage.setItem("token",res.data.token);
            }
            localStorage.setItem("email",formData.email);
            navigate("/users")
           }
      } catch (error) {
        setError(error);
      }
    }

  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>
      <div className='w-1/2 sm:w-1/3  h-full flex flex-col justify-center items-start'>
        <img className='w-full md:w-1/8' src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg" alt="logo"/>
      <h1 className='text-3xl sd:text-2xl font-serif my-2'>Login in to your account</h1>
      <form onSubmit={handleLogin} className='flex flex-col justify-center items-start '>
        <label className='md:text-lg sd:base my-2'>Email</label>
        <input className='border-1 border-gray-300 p-1 rounded w-full md:w-[300px] lg:w-[400px]' type="email" name="email" value={formData.email} onChange={handleChange}/>
        <label  className='text-lg sd:base my-2'>Password</label>
        <input className='border-1 border-gray-300 p-1 rounded w-full md:w-[300px] lg:w-[400px]' type='password' name="password" value={formData.password} onChange={handleChange}/>
        {error&&<span className='text-1xl text-red-500'>Login Failed</span>}
        <div className='p-1'>
        <input type='checkbox' value={rememberMe} onChange={(e)=>setRememberMe(e.target.checked)}/>
        <label className="text-sm font-sans mx-2" htmlFor="rememberMe">Remember me</label>
        </div>
        <button type='submit' className='text-1xl cursor-pointer bg-blue-800 text-white p-1 my-2 rounded' >SignIn</button>
      </form>
      </div>
      <div className="hidden sm:flex w-1/2 h-full flex-col justify-center items-center">
  <img 
    className="w-full h-full object-cover" 
    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=2000&q=80" 
    alt="loginbg"
  />
</div>
    </div>
  )
}

export default LoginPage

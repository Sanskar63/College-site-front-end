import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        navigate("/");
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='border border-black px-10 py-3 bg-teal-400 font-bold ' onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout

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
      <button className='border border-black' onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout

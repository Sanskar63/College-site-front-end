import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const student = localStorage.getItem('studentId');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!student){
      navigate("/login");
    }
  },[]);
  
  return (
    <div className='w-[100%] h-auto bg-slate-400 py-[10vw] flex justify-evenly px-[20vw]'>

      <Link to="/course" className="w-[32vw] sm:w-[25vw] h-[10vw] my-10 mr-3 flex items-center justify-center rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 ">
          Course
        </h1>
      </Link>


      <Link to="/hostel" className="w-[32vw] sm:w-[25vw] h-[10vw] my-10 flex items-center justify-center rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 ">
          Hostel
        </h1>
      </Link>

    </div>
  )
}

export default Register

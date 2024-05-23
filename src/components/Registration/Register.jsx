import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-[100%] h-auto bg-slate-400 py-[10vw] flex justify-evenly px-[20vw]'>

    <Link to="/course" className="w-[25vw] h-[10vw] mt-10 flex items-center justify-center rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h1 className="text-4xl font-bold text-center text-gray-800 ">
                Course
            </h1>
        </Link>
        <Link to="/hostel" className="w-[25vw] h-[10vw] mt-10 flex items-center justify-center rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h1 className="text-4xl font-bold text-center text-gray-800 ">
                Hostel
            </h1>
        </Link>
    
    </div>
  )
}

export default Register

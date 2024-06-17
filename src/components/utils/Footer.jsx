import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  const student =localStorage.getItem('studentId');

  return (
    <div className='relative'>
      <div className='w-[100%] h-[55vh] bg-slate-900 flex justify-evenly pt-[5%] sm:items-center' >

        <div className='w-[50vw] h-[50vh] flex flex-col  items-center'>
          <img src="/temp/IIITLogo.png" alt="" className='w-[10vw]' />
          <span className='font-bold text-white text-xs md:text-sm lg:text-xl text-center'> Indian Institute of Information Technology Una</span>
          <span className='font-semibold text-gray-500 text-xs md:text-sm text-center'> Vill. Saloh, Teh. Haroli, Distt. Una, HP-177209</span>
          <br />
          <br />
        </div>

        <div className="border-l border-white h-[46vh]"></div>

        <div className='w-[30vw] h-[50vh] flex flex-col '>
          <span className='font-bold text-xl lg:text-[2vw] mb-[1vw] text-white'>Quick Links</span>
          <Link to="/" className='text-white'>Home</Link>
          <Link to="/contacts" className='text-white'>Contacts</Link>
          <Link to="/announcement" className='text-white'>Announcements</Link>
          {student? (<Link to="/logout" className='text-white'>Logout</Link>): (<Link className='text-white' to="/login">Login</Link>)}
        </div>
{/* 
        <div className="border-l border-white h-[46vh]"></div>

        <div className='w-[25vw] h-[18vw]'>
          <span className='font-bold text-xl lg:text-[2vw] text-white'>Explore More</span>
        </div> */}

      </div>
      <div className='w-[100%] h-[3vw] absolute bottom-0 bg-gray-800 text-white flex items-center justify-center'>All Rights Reserved to @Sanskar</div>

    </div>
  )
}

export default Footer

import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-[100%] h-[32vw] sm:h-[25vw] bg-slate-900 flex justify-evenly items-center mt-5' >

        <div className='w-[30vw] h-[18vw]  flex flex-col  items-center'>
          <img src="/temp/IIITLogo.png" alt="" className='w-[10vw]' />
          <span className='font-bold text-white text-xs md:text-sm lg:text-xl'> Indian Institute of Information Technology Una</span>
          <span className='font-semibold text-gray-500 text-xs md:text-sm'> Vill. Saloh, Teh. Haroli, Distt. Una, HP-177209</span>
          <br />
          <br />
        </div>

        <div className="border-l border-white h-[17vw]"></div>

        <div className='w-[30vw] h-[18vw] flex flex-col '>
          <span className='font-bold text-xl lg:text-[2vw] mb-[1vw] text-white'>Quick Links</span>
          <span className='text-white'>Home</span>
        </div>

        <div className="border-l border-white h-[17vw]"></div>

        <div className='w-[30vw] h-[18vw]'>
          <span className='font-bold text-xl lg:text-[2vw] text-white'>Explore More</span>
        </div>

      </div>

      <div className='w-[100%] h-[3vw] bg-gray-800 text-white flex items-center justify-center'>All Rights Reserved to @Sanskar</div>
    </>
  )
}

export default Footer

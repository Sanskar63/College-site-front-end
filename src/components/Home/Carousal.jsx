import React from 'react'

function Carousal() {
    return (
        <div className='p-0 w-[100%] h-[60vw] sm:h-auto flex flex-col justify-center items-center relative '>
            <img src="/temp/IIITU.jpg" alt="" className='w-[100%] sm:w-[60%] border border-none -z-20' />
            <div className='w-[100%] h-[100%] bg-black opacity-20 absolute top-0 -z-10'></div>
        </div>
    )
}

export default Carousal;

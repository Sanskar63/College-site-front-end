import React from 'react'

function Carousal() {
    return (
        <div className='p-0 w-[100%] flex flex-col items-center relative '>
            <img src="/temp/IIITU.jpg" alt="" className='w-[60%] border border-none ' />
            <div className='w-[100%] h-[100%] bg-black opacity-20 absolute top-0'></div>
        </div>
    )
}

export default Carousal;

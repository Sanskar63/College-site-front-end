import React from 'react'

function AnnouncementCards(prop) {
    const createdAtDate = new Date(prop.createdAt);

    const d = createdAtDate.toDateString();
    return (
        <div className='flex justify-center w-[100%] my-[1%]'>
            {/* <div className='w-[.7vw] h-[.7vw] bg-black rounded-full mt-[1%]'></div> */}
            <div className='w-[95%] shadow-lg p-[1%] bg-slate-300 flex items-center rounded-bl-3xl rounded-r-3xl relative'>
            <span className='absolute top-2 right-5 text-gray-600 text-xs md:text-sm lg:text-base'>{d}</span>
                <span className='text-sm md:text-base lg:text-lg p-[0.5%] mt-5'> {prop.content} </span>
            </div>
        </div>

    )
}

export default AnnouncementCards

import React from 'react'

function Cards(prop) {
    return (
        <>
            {prop.imag.map((e, index) => (
                
                    <div className = 'w-[99vw] mt-[2vw] flex flex-col items-center' >
                        <div className='w-[96vw] h-[20vw] lg:h-[15vw] flex items-center border border-black rounded-lg bg-gray-400'>
                            <img key={index} src={`/temp/${e}`} alt="" className='w-[12vw] h-[12vw] border-2 border-white rounded-lg ml-[1vw]'/>
                            <p className='ml-[2vw]'>{prop.para[index]}</p>
                        </div>
                    </div >
                
                ))
            }
        </>
    )
}

export default Cards

import React from 'react';

function Cards(prop) {
    return (
        <>
            {prop.prop.map((e, index) => (

                <div key={index} className='w-[100%] mt-[2vw] flex flex-col items-center' >
                    <div className='bg-rgba-dark-brown h-[26vw] sm:h-[21vw] w-[96vw] rounded-lg pt-[1vw] flex justify-center'>

                        <div className='w-[94vw] h-[22vw] sm:h-[17vw] flex items-center rounded-lg bg-rgba-cream'>

                            <div className='w-[13.5vw] h-[13.5vw] flex items-center justify-center bg-rgba-dark-brown rounded-full ml-[1vw]'>
                                <img key={index} src={`/temp/${prop.prop[index].img}`} alt="" className='w-[12vw] h-[12vw] border-2 border-white rounded-full bg-rgba-brown' />
                            </div>

                            <div className='pl-[5%] h-[85%] w-[82%] relative'>
                                <span className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-4 border-b-rgba-dark-brown'>{prop.prop[index].head}</span>
                                <p className='pt-[2%] text-xs md:text-sm lg:text-lg'>{prop.prop[index].para}</p>
                                {/* Now div for links for social media */}
                                <div className=' w-[50%] h-[20%] absolute right-0 bottom-0'>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            ))
            }
        </>
    )
}

export default Cards

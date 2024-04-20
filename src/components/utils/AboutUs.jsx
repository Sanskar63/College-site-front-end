import React from 'react'
import Cards from './Cards'


function About() {
  return (
    <>
    {/* here div of massive college image and a paragraph on the college*/}
      <div className='mt-[1vw] p-0 w-[100%] flex flex-col items-center relative'>
        <img src="/temp/IIITU.jpg" alt="" className='w-[99vw] border border-none ' />
        <div className='w-[99vw] h-[53.5vw] bg-black opacity-40 absolute top-0'></div>

        <div className='w-[97vw] mt-[2vw]'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos sit, laudantium tempora doloribus corrupti ratione reprehenderit possimus, aliquam temporibus reiciendis accusantium sed eos porro expedita? Autem ea similique praesentium cupiditate perspiciatis voluptate, fuga quaerat numquam a, ratione quidem dignissimos. Repellendus natus quas harum dolores doloremque incidunt blanditiis magnam sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia debitis at, ut eaque tempore nostrum fugit voluptatibus officiis incidunt impedit? Error quia earum accusantium ducimus officiis, pariatur dicta impedit illum rerum suscipit repudiandae? Voluptate itaque suscipit tempora nulla? Repellendus tempore non necessitatibus delectus adipisci recusandae, ratione iste doloribus aperiam!
            </p>
        </div>
      </div>

      {/* here some cards inside marquee telling about the services and their uses */}
      <Cards imag={["IIITU.jpg", "IIITU.jpg"]} para={["Hello its me and its my first prop para", "This is second Para"]}/>
    </>
  )
}

export default About

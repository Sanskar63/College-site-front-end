import React from 'react'
import EventsAndNews from './EventsAndNews'

function Home() {
  return (
    <div>
      <div className='p-0 w-[100%] flex flex-col items-center relative'>
        <img src="/temp/IIITU.jpg" alt="" className='w-[99vw] border border-none ' />
        <div className='w-[99vw] h-[53.5vw] bg-black opacity-40 absolute top-0'></div>

        <div className='w-[97vw] mt-[2vw]'>
          <p>
            Indian Institute of Information Technology Una (IIIT, Una) is one of the Indian Institutes of Information Technology located at Vill. Saloh, Teh. Haroli, Distt. Una Himachal Pradesh-177209, Himachal Pradesh.. Established in 2014, it was recognized as an Institute of National Importance.IIIT Una is a joint venture of the Ministry of Human Resource Development, Government of India, the Govt. of Himachal Pradesh, with Industries in Public-Private Partnership model.The industries are H.P. Power Corporation and H.P. Power Transmission Corporation.
          </p>
        </div>
        <EventsAndNews />
        
        
      </div>
    </div>
  )
}

export default Home

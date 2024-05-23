import React from 'react';

function Card(prop) {
  const createdAtDate = new Date(prop.dateTime);

// Get the date
const date = createdAtDate.toDateString(); // "Thu Apr 21 2024"

// Get the time
const time = createdAtDate.toLocaleTimeString(); // "09:42:12 AM"

  return (
    <div className=" md:w-[30vw] lg:w-[23vw] h-auto rounded overflow-auto shadow-lg bg-white p-4">
      <div className='flex justify-between'>
        <h2 className="font-bold text-sm sm:text-lg md:text-xl mb-2">{prop.to}</h2>
        <h2 className='font-semibold text-primary-900'>{prop.status}</h2>
      </div>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base">{prop.content}</p>
      <p className="text-gray-400 text-xs mt-4">{date}</p>
    </div>
  );
}

export default Card;
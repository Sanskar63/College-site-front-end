import React from 'react';

function Card(prop) {
  return (
    <div className="max-w-sm h-auto rounded overflow-y-scroll shadow-lg bg-white p-4">
      <h2 className="font-bold text-sm sm:text-lg md:text-xl mb-2">{prop.title}</h2>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base">{prop.content}</p>
      {/* <p className="text-gray-400 text-xs mt-4">{dateTime}</p> */}
    </div>
  );
}

export default Card;
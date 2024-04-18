import React from 'react';

function Card({ title, content, dateTime }) {
  return (
    <div className="max-w-sm h-auto rounded overflow-y-scroll shadow-lg bg-white p-4">
      <h2 className="font-bold text-sm sm:text-lg md:text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base">{content}</p>
      <p className="text-gray-400 text-xs mt-4">{dateTime}</p>
    </div>
  );
}

export default Card;
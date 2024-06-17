// TeachCard.jsx
import React from 'react';

const TeachCard = ({ desig, name, email }) => {
  return (
    <div className="w-[24rem] m-[1vw] rounded overflow-hidden shadow-lg">
      {/* <img className="w-[10vw] m-auto bg-rgba-brown" src={`public/temp/${img}`} alt={name} /> */}
      <div className="px-6 py-4 bg-rgba-cream">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Designation: {desig}</p>        
        <p className="text-gray-700 text-base">Email: {email}</p>
      </div>
    </div>
  );
};

export default TeachCard;

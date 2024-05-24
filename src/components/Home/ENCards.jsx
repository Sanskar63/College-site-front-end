// src/ENCards.js
import React from 'react';

const ENCards = ({ image, heading, paragraph, date, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-[1%]">
      <img className="w-full" src={image} alt="News" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">
          {paragraph}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-500 text-sm">{date}</span>
        <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ENCards;


// you might be knowing that in  sites there are three cards shown lets say news cards and then it says get all news. when you open it then it opens page of all news cards and then when we click on one of the cards then it opens full news page. i have to implement this on my site, i can fetch all news from back-end and can show it in the page where all of the cards and all news of one card is show. the problem i am facing is that i don't know how can i show just first three of these all news cards to the first page.
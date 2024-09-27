// src/ENCards.js
import React from 'react';

const ENCards = ({ key, img, heading, content, date, link }) => {
  const createdAtDate = new Date(date);

  const d = createdAtDate.toDateString(); // "Thu Apr 21 2024"
  return (
    <div key={key} className="max-w-sm h-[65vh] rounded border shadow-lg m-[1%] bg-white relative ">
      <div className="flex justify-between items-center h-[5%]">
        <span className="text-gray-700 text-base absolute top-1 sm:top-0 right-[2%]">{d}</span>
      </div>
      {img ? <img className="h-[45%] w-[100%] mt-[2%] sm:mt-0" src={img} alt="News" /> : ""}
      <div className="px-6 py-4 overflow-y-scroll scrollbar-none hover:scrollbar-thin h-[49%]">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>

    </div>
  );
};

export default ENCards;


// you might be knowing that in  sites there are three cards shown lets say news cards and then it says get all news. when you open it then it opens page of all news cards and then when we click on one of the cards then it opens full news page. i have to implement this on my site, i can fetch all news from back-end and can show it in the page where all of the cards and all news of one card is show. the problem i am facing is that i don't know how can i show just first three of these all news cards to the first page.
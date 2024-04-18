import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
    const [cardData, setCardData] = useState({
        titles: [],
        contents: [],
        dateTimes: []
    });

    useEffect(() => {
        // Fetch data from backend and update state
        // For demonstration purposes, assuming data is fetched from an API
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/application/getApplications');
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    });




return (
    <div className="flex justify-center items-center h-auto mt-[4vw] bg-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[3vw] mx-[2vw]">
            {cardData.titles.map((title, index) => (
                <Card
                    key={index}
                    title={title}
                    content={cardData.contents[index]}
                    dateTime={cardData.dateTimes[index]}
                />
            ))}
        </div>
    </div>
);
}

export default App;

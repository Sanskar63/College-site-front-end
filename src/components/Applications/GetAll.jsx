import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function GetApplication() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');


    const [cardData, setCardData] = useState({
        titles: [],
        contents: [],
        dateTimes: []
    });

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/application/getApplications',
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}` 
                        }
                    }
                );
                console.log(response)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        { accessToken ? fetchData() : navigate("/login") }

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

export default GetApplication;

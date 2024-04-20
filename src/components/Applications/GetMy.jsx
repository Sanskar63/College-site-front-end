import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function GetMy() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    // State variable to store the response data
    const [myApplications, setMyApplications] = useState([]);

    useEffect(() => {
        console.warn("useEffect called")
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/api/v1/application/getMyApplications',
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
                // Update the state variable with the response data
                setMyApplications(response.data.data.myApplications);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data only on component mount
        if (accessToken) {
            fetchData();
        } else {
            navigate("/login");
        }
    }, []); // Empty dependency array to fetch data only once on component mount

    console.log(myApplications);



    return (
        <>

            <div className="relative flex justify-center items-center h-auto bg-gray-200">
                {console.warn("return called")}
                <button type="button" onClick={() => (navigate("/write"))} className="w-[10%] absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Write
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[3vw] mx-[2vw]">
                    {myApplications.map((item, index) => (
                        <Card
                            key={index}
                            title="Title"
                            content={item.content}
                        // dateTime={item.createdAt}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}

export default GetMy;

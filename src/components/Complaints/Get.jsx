import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../utils/Card';
import { useNavigate } from 'react-router-dom';
import { url } from '../utils/constant';

function GetMyComplaints() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    // State variable to store the response data
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${url}/complaint/getMyComplaints`,
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
                // console.log(response.data.data.myComplaints)
                setComplaints(response.data.data.myComplaints);

            } catch (error) {
                console.error('Error fetching data in try catch ---->:', error);
            }
        };

        if (accessToken) {
            fetchData();
        } else {
            navigate("/login");
        }
    }, []); // Empty dependency array to fetch data only once on component mount

    // console.log(complaints);



    return (
        <>

            <div className="relative flex justify-center items-center h-auto bg-gray-200">

                <button type="button" onClick={() => (navigate("/writeComplaints"))} className="lg:w-[10%] absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Complain
                </button>
                {complaints.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[3vw] mx-[2vw]">
                    {complaints.map((item, index) => (
                        <Card
                            key={index}
                            to={item.to}
                            status={item.status}
                            content={item.content}
                            dateTime={item.createdAt}
                        />
                    ))}
                </div>
            ) : (
                <h1 className="text-center text-4xl my-16 font-bold">No Complaints</h1>
            )}
            </div>

        </>
    );
}

export default GetMyComplaints;

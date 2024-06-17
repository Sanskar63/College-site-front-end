import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ENCards from '../Home/ENCards';
import { url } from '../utils/constant';
import { ShimmerPostList, ShimmerPostItem } from "react-shimmer-effects";

function AllEvents() {
    const [loading, setLoading] = useState(true);

    const [events, setEvents] = useState([]);
    useEffect(() => {
        window.scrollTo(0,0);
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${url}/events/getAll`);
                const sortedEvents = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setEvents(sortedEvents);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <div className="container mx-auto my-8">
                <h1 className="text-2xl scroll lg:text-3xl font-bold ml-4">All Events</h1>
                <div className="w-[15%] sm:w-[10%] h-1 sm:h-1.5 bg-black rounded-full mb-[2%] ml-6 sm:ml-4"></div>

                {loading ? (
                    <div className="flex justify-center items-center flex-wrap">
                        <div className='w-[85vw] md:w-[35vw] lg:w-[25vw] m-1'>
                            <ShimmerPostItem card title text />
                        </div>
                        <div className='w-[85vw] md:w-[35vw] lg:w-[25vw] m-1'>
                            <ShimmerPostItem card title text />
                        </div>
                        <div className='w-[85vw] md:w-[35vw] lg:w-[25vw] m-1'>
                            <ShimmerPostItem card title text />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center lg:justify-normal items-center flex-wrap">
                        {events.map((item) => (
                            <ENCards key={item.id} {...item} />
                        ))}
                    </div>
                )}


            </div>
        </div >
    )
}

export default AllEvents

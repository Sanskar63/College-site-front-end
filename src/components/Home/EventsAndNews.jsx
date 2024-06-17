import React, { useState, useEffect } from 'react'
import ENCards from './ENCards'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utils/constant';
import { ShimmerPostList, ShimmerPostItem } from "react-shimmer-effects";

function EventsAndNews() {

    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);
    const [nloading, setNLoading] = useState(true);
    const [eloading, setELoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${url}/news/getAll`);
                const sortedNews = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNews(sortedNews);
                setNLoading(false);
                // console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${url}/events/getAll`);
                const sortedEvents = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setEvents(sortedEvents);
                setELoading(false);
            } catch (error) {
                console.error('Error fetching Events:', error);
            }
        };

        fetchNews();
        fetchEvents();
    }, []);


    return (


        <div >
            <div className="container mx-auto my-8 ">
                <h1 className="ml-5 sm:text-xl scroll lg:text-3xl font-bold ">Latest News</h1>
                <div className="ml-5 w-[15%] sm:w-[10%] h-1 sm:h-1.5 bg-black rounded-full mb-[2%]"></div>

                {nloading ? (
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
                ) :
                    (
                        <div className="flex justify-center lg:justify-normal items-center flex-wrap">

                            {news.slice(0, 3).map((item) => (
                                <ENCards key={item.id} {...item} />
                            ))}

                        </div>
                    )
                }

                <div className="mt-8 text-center">
                    <Link to="/all-news" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get All News
                    </Link>
                </div>
            </div>

            <div className="container mx-auto my-8">
                <h1 className="ml-5 sm:text-xl scroll lg:text-3xl font-bold">Latest Events</h1>
                <div className="ml-5 w-[15%] sm:w-[10%] h-1 sm:h-1.5 bg-black rounded-full mb-[2%]"></div>

                {eloading ? (
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
                </div>) : (
                    <div className="flex justify-center lg:justify-normal items-center flex-wrap">
                        {events.slice(0, 3).map((item) => (
                            <ENCards key={item.id} {...item} />
                        ))}
                    </div>
                )}


                <div className="mt-8 text-center">
                    <Link to="/all-events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get All Events
                    </Link>
                </div>

            </div>


        </div>

    )
}

export default EventsAndNews

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ENCards from '../Home/ENCards';
import { url } from '../utils/constant';

function AllNews() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${url}/news/getAll`);
                const sortedNews = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNews(sortedNews);
                // console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);
    return (
        <div>
            <div className="container mx-auto my-8">
                <h1 className="text-2xl scroll lg:text-3xl font-bold ml-4">All News</h1>
                <div className="w-[15%] sm:w-[10%] h-1 sm:h-1.5 bg-black rounded-full mb-[2%] ml-6 sm:ml-4"></div>
                <div className="flex justify-center lg:justify-normal items-center flex-wrap">
                    {news.map((item) => (
                        <ENCards key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllNews

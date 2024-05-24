import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ENCards from './ENCards';


function Home() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);


  return (
    <div>
      <div className='p-0 w-[100%] flex flex-col items-center relative'>
        <img src="/temp/IIITU.jpg" alt="" className='w-[99vw] border border-none ' />
        <div className='w-[99vw] h-[53.5vw] bg-black opacity-40 absolute top-0'></div>

        <div className='w-[97vw] mt-[2vw]'>
          <p>
            Indian Institute of Information Technology Una (IIIT, Una) is one of the Indian Institutes of Information Technology located at Vill. Saloh, Teh. Haroli, Distt. Una Himachal Pradesh-177209, Himachal Pradesh.. Established in 2014, it was recognized as an Institute of National Importance.IIIT Una is a joint venture of the Ministry of Human Resource Development, Government of India, the Govt. of Himachal Pradesh, with Industries in Public-Private Partnership model.The industries are H.P. Power Corporation and H.P. Power Transmission Corporation.
          </p>
        </div>

      </div>


      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Latest News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.slice(0, 3).map((item) => (
            <ENCards key={item.id} {...item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/all-news" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get All News
          </Link>
        </div>
      </div>


    </div>
  )
}

export default Home

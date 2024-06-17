import React, { useEffect, useState } from 'react'
import AnnouncementCards from './AnnouncementCards'
import axios from 'axios';
import { url } from './constant';
import { ShimmerText } from "react-shimmer-effects";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnoucements = async () => {
      try {
        const response = await axios.get(`${url}/annoucements/get`);
        console.log(response.data.data);
        const sortedData = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Get the current date
        const now = new Date();
        const dayOfWeek = now.getDay(); // Day of the week (0-6)
        const startOfWeek = new Date(now.setDate(now.getDate() - dayOfWeek));
        startOfWeek.setHours(0, 0, 0, 0); // Start of the week

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999); // End of the week

        // Filter announcements for the current week
        const weeklyAnnouncements = sortedData.filter(announcement => {
          const announcementDate = new Date(announcement.createdAt);
          return announcementDate >= startOfWeek && announcementDate <= endOfWeek;
        });

        const allAnnouncements = sortedData.filter(announcement => {
          const announcementDate = new Date(announcement.createdAt);
          return announcementDate < startOfWeek
        });

        setAnnouncements(weeklyAnnouncements);
        setAll(allAnnouncements);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Announcements:', error);
      }
    };
    fetchAnnoucements();
  }, []);

  return (
    <div className='w-[100%] my-[2%]'>
      <h1 className='text-4xl font-bold ml-[2%] underline'>This Week's Announcements</h1>
      {loading ? (
        <div className='flex flex-col items-center justify-center'>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>
        </div>
      ) : (
        announcements.map((item) => (
          <AnnouncementCards key={item._id} {...item} />
        ))
      )}

      <h1 className='text-4xl font-bold ml-[2%] mt-10 underline'> All Previous Announcements</h1>
      {loading ? (
        <div className='flex flex-col items-center justify-center'>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>

          <div className='w-[95%] m-[2%]'>
            <ShimmerText line={5} gap={10} />
          </div>
        </div>
      ) : (
        all.map((item) => (
          <AnnouncementCards key={item._id} {...item} />
        ))
      )}

    </div>
  )
}

export default Announcement
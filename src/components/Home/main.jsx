import React, { useEffect } from 'react'
import TogetherWeGrow from './lines';
import Carousal from './Carousal';
import EventsAndNews from './EventsAndNews';


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Carousal />
      <TogetherWeGrow />
      <EventsAndNews />

    </div>
  )
}

export default Home

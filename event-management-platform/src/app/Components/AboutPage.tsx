import React from 'react'
import Hero from './Hero/Hero';
import Trending from './Trending/Trending';
// import EventCategories from './EventCategories/EventCategories';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <Trending />
        {/* <EventCategories /> */}
    </div>
  );
};

export default AboutPage;
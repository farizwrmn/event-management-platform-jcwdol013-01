import React from 'react'
import Hero from './Hero/Hero';
import Trending from './Trending/Trending';
import EventC from './EventCategories/EventC';
// import EventCategories from './EventCategories/EventCategories';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <Trending />
        <EventC />
    </div>
  );
};

export default AboutPage;
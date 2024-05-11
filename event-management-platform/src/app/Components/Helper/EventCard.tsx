import React from 'react'

interface Props {
    title:string;
    image:string;
    Event:string;
    Visitor:string;
    height:string;
}

const EventCard = ({ title, image, Event, Visitor, height}: Props) => {
    const cardBackground ={
        backgroundImage:"url(${image})"
    };
  return (
    <div className={`relative flex items-start justify-end flex-col 
    bg-cover bg-center ${height}`} style={cardBackground}>
        EventCard
    </div>
  );
};

export default EventCard;
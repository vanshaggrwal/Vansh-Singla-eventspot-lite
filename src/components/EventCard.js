import React from 'react';

const EventCard = ({ event, onClick }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.date} | {event.location}</p>
            <p>{event.description}</p>
            <button onClick={() => onClick(event)}>Learn More</button>
        </div>
    );
};

export default EventCard;
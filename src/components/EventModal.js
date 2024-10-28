import React from 'react';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={event.image} alt={event.name} />
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

export default EventModal;
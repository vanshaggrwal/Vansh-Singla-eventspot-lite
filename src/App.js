import React, { useState, useEffect } from 'react';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import SearchBar from './components/SearchBar';
import eventsData from './assets/events.json';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/styles.css';

const App = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        setEvents(eventsData);
        setFilteredEvents(eventsData);
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(filtered);
    };

    const openModal = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="app">
            <header className="header">
                <h1>EventSpot Lite</h1>
                <Navbar />
                <SearchBar onSearch={handleSearch} />
                
            </header>
            <main className="event-list">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} onClick={openModal} />
                ))}
                 
            </main>
            <EventModal event={selectedEvent} onClose={closeModal} />
            <Footer/>
        </div>
    );
};

export default App;
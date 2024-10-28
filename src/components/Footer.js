
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} EventSpot Lite. All rights reserved.</p>
                <div className="footer-divider"></div> {/* Custom divider */}
                <ul className="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
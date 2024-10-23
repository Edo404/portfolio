import React, { useState } from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
        <nav className="navbar">
            <img 
                src="src/assets/Personal.png" // Replace with your image URL
                alt="Edoardo" 
                className="picture-header" 
            />
            <ul className={`nav-items ${isOpen ? 'active' : ''}`}>
                <li className="tags"><a href="#">Home</a></li>
                <li className="tags"><a href="#">About Me</a></li>
                <li className="tags"><a href="#">Projects</a></li>
                <li className="tags"><a href="#">Contact Me</a></li>
            </ul>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="hamburger-line line1"></div>
                <div className="hamburger-line line2"></div>
                <div className="hamburger-line line3"></div>
            </div>
        </nav>
        </header>
    );
};

export default Header;

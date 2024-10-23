import React, { useState } from 'react';
import './AboutMe.css'; // Import your CSS file for styling

const AboutMe = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleButtonClick = () => {
        // Open the image in the same window, centered
        setIsImageOpen(true);
    };

    const handleCloseImage = () => {
        // Close the image when clicking outside of it
        setIsImageOpen(false);
    };

    return (
        <section className="about-me">
            <h2 className="about-me-title">About Me</h2>
            <p className="about-me-description">
                Hello! I'm Edoardo, a passionate web developer dedicated to creating engaging and user-friendly websites. 
                With a strong background in modern technologies and a keen eye for design, I strive to bring ideas to life 
                through clean, efficient code and beautiful interfaces. In my spare time, I enjoy exploring new technologies 
                and working on personal projects that challenge my skills.
            </p>
            <button className="button-about" onClick={handleButtonClick}>Open CV</button>

            {/* Conditionally render the image when isImageOpen is true */}
            {isImageOpen && (
                <div className="image-overlay" onClick={handleCloseImage}>
                    <img src="src/assets/EDOARDOGAMURRINI.png" alt="CV" className="popup-image" />
                </div>
            )}
        </section>
    );
};

export default AboutMe;

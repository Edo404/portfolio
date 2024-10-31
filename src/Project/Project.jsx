import React from 'react';
import './Project.css'; // Import a CSS file for styling

const Project = ({ imageSrc, text }) => {
    return (
        <section className="project">
        <img src={imageSrc} alt="Project icon" className="project-image" />
        <div className="project-text">
            {text}
        </div>
        </section>
    );
};

export default Project;

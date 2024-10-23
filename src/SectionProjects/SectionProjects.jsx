import React from 'react';
import './SectionProjects.css'; // Import your CSS file for styling

const SectionProjects = () => {
    const cards = [
        { title: "Project 1", description: "Description for Project 1" },
        { title: "Project 2", description: "Description for Project 2" },
        { title: "Project 3", description: "Description for Project 3" },
        { title: "Project 4", description: "Description for Project 4" },
        { title: "Project 5", description: "Description for Project 5" },
    ];

    return (
        <section className="section-projects">
            <h2 className="section-title">Projects</h2>
            <div className="grid-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionProjects;

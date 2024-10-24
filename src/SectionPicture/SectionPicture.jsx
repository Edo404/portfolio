import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SectionPicture.css'; // Import your CSS file for styling

const SectionPicture = () => {
    const navigate = useNavigate(); // Create the navigate function

    const handleProjectsClick = () => {
        navigate('/projects'); // Redirect to the SectionProjects component
    };

    const handleContactMeClick = () => {
        navigate('/contactMe'); // Redirect to the SectionProjects component
    };

    return (
        <section className="section-picture">
            <div className="text-container">
                <h1 className="greeting">Hey there! I'm Edoardo</h1>
                <p className="greeting-p">
                    I enjoy creating websites, ones that suit your desires and needs using the latest technologies and cleanest design.
                </p>
                <div className="button-container">
                    <button className="button-projects" onClick={handleProjectsClick}>
                        Projects
                    </button>
                    <button className="button-contact" onClick={handleContactMeClick}>Contact me</button>
                </div>
            </div>
            <div className="image-container">
                <img 
                    src="src/assets/Personal.png" // Replace with your image URL
                    alt="Edoardo" 
                    className="picture" 
                />
            </div>
        </section>
    );
};

export default SectionPicture;

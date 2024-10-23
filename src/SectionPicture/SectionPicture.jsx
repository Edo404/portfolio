import React from 'react';
import './SectionPicture.css'; // Import your CSS file for styling
//import Picture from "src/assets/Personal.png"

const SectionPicture = () => {
    return (
        <section className="section-picture">
            <div className="text-container">
                <h1 className="greeting">Hey there! I'm Edoardo</h1>
                <p className="greeting-p">I enjoy creating websites, ones that suit your desires and needs using latest technologies and cleanest design.</p>
            </div>
            <div className="image-container">
                <img 
                src="src/assets/Personal.png" // Replace with your image URL
                alt="Edoardo" 
                className="picture" 
                />
            </div>
        </section>
    )
};

export default SectionPicture;

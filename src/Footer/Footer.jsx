import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {

    function handleGithub(){
        window.open('https://github.com/Edo404', '_blank')
    }

    function handleLinkedin(){
        window.open('https://www.linkedin.com/in/edoardo-gamurrini/', '_blank')
    }

    function handleReddit(){
        window.open('https://www.reddit.com/user/Capable_Studio1602/', '_blank')
    }

    return (
        <footer className="footer">
            <div className="footer-icons">
                <i className="icon fab fa-github" onClick={handleGithub}></i>
                <i className="icon fab fa-linkedin" onClick={handleLinkedin}></i>
                <i className="icon fab fa-reddit" onClick={handleReddit}></i>
            </div>
        </footer>
    );
};

export default Footer;

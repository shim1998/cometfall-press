import React from 'react';
import './index.css'

// Social Media Links JSON
const socialLinks = {
    bluesky: "https://bsky.app/profile/cometfallpress.bsky.social",
    instagram: "https://www.instagram.com/cometfallpress/",
    linkedIn: "https://www.linkedin.com/company/cometfallpress/",
    twitter: "https://twitter.com/CometfallPress",
    facebook: "https://www.facebook.com/profile.php?id=61572637307560"
};

function Footer() {
    return (
        <footer className="bg-dark text-light text-center p-4 mt-10">
            <div className="container mx-auto">
                <p className="text-sm md:text-base">
                    © {new Date().getFullYear()} Cometfall Press. All Rights Reserved.
                </p>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#" className="hover:text-magenta">Home</a></li>
                        <li><a href="#" className="hover:text-magenta">About</a></li>
                        <li><a href="#" className="hover:text-magenta">Contact</a></li>
                    </ul>
                </nav>
                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-light hover:text-magenta">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-light hover:text-magenta">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-light hover:text-magenta">
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                    <a href={socialLinks.bluesky} target="_blank" rel="noopener noreferrer" className="text-light hover:text-magenta">
                        <i className="fas fa-cloud text-xl"></i> {/* Placeholder for Bluesky */}
                    </a>
                    <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="text-light hover:text-magenta">
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

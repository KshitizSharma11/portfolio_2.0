import React, { useState } from 'react';
import Resume from '../assets/Resume.pdf';

function Navbar(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar-container bg-gray-800 py-2 px-4 md:px-6 flex justify-between items-center fixed top-0 w-full z-10">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            <div className="md:hidden">
                <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <ul
                className={`md:flex space-y-2 md:space-y-0 md:space-x-4 text-lg tracking-wider font-bold text-white ${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } md:block`}
            >
              <li><a href="#about">About</a></li>
                <li><a href="#skillset">Skillset</a></li>
                <li><a href="#workexp">Work Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href={Resume} target="_blank">Resume</a></li>
                <li><a href="https://k-blogs.vercel.app/" target="_blank">My-Blog</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </div>
    );
}

export default Navbar;

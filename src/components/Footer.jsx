import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center items-center space-x-4">
                <a
                    href="https://www.instagram.com/ghatna_2601/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/ghatna-koshti-697755234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/ghatna-koshti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:ghatnakoshti@gmail.com"
                    className="text-2xl hover:text-blue-500"
                >
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

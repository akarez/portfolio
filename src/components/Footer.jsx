import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGoogleScholar, FaFlaskVial } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='flex flex-col items-center bg-black py-20'>
            <div className='flex space-x-6 mb-4'>
                <a href='mailto:ahmed1@usf.edu' target='_blank' rel='noopener noreferrer' className='text-gray-100 hover:text-white transition'>
                    <FaEnvelope size={26} />
                </a>
                <a href='https://www.linkedin.com/in/samir-ahmed1' target='_blank' rel='noopener noreferrer' className='text-gray-100 hover:text-white transition'>
                    <FaLinkedin size={26} />
                </a>
                <a href='https://github.com/akarez' target='_blank' rel='noopener noreferrer' className='text-gray-100 hover:text-white transition'>
                    <FaGithub size={26} />
                </a>
                <a href='https://scholar.google.com/citations?user=Imc7ntsAAAAJ' target='_blank' rel='noopener noreferrer' className='text-gray-100 hover:text-white transition'>
                    <FaGoogleScholar size={26} />
                </a>
                <a href='https://cse.usf.edu/~rkaram/researchfocus.html' target='_blank' rel='noopener noreferrer' className='text-gray-100 hover:text-white transition'>
                    <FaFlaskVial size={26} />
                </a>

            </div>
            <div className='text-gray-100 text-center mt-4'>
                © {new Date().getFullYear()} Samir Ahmed. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
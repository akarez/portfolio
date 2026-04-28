import { FaEnvelope, FaLinkedin, FaGithub, FaGoogleScholar, FaFlaskVial } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex flex-col items-center md:flex-row md:justify-between bg-black py-20 px-8 gap-4 md:gap-0 dark:border-t dark:border-zinc-800">
      <div className="flex space-x-5 md:order-2">
        <a href="mailto:mail@akarez.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition">
          <FaEnvelope size={20} />
        </a>
        <a href="https://www.linkedin.com/in/samir-ahmed1" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/akarez" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition">
          <FaGithub size={20} />
        </a>
        <a href="https://scholar.google.com/citations?user=Imc7ntsAAAAJ" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition">
          <FaGoogleScholar size={20} />
        </a>
        <a href="https://cse.usf.edu/~rkaram/researchfocus.html" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition">
          <FaFlaskVial size={20} />
        </a>
      </div>
      <p className="text-gray-100 text-sm md:order-1">
        © {new Date().getFullYear()} Samir Ahmed. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;

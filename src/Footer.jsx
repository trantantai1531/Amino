import { FaGithub, FaRocket } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-3 px-2 text-center transition-colors duration-300 ${
        darkMode ? "bg-[rgb(16,25,46)] text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
        <a
          href="https://github.com/trantantai1531/Amino"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 transition duration-300 ${
            darkMode ? "text-blue-400 hover:text-white" : "text-blue-600 hover:text-black"
          }`}
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

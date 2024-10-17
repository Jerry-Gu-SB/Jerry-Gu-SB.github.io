import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 text-white p-5 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex space-x-5 mb-4">
          <a
            href="https://www.linkedin.com/in/jerry-gu-uva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./images/linkedin.png")}
              alt="LinkedIn"
              className="w-16 h-16"
            />
          </a>
          <a
            href="https://github.com/Jerry-Gu-SB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./images/github.png")}
              alt="GitHub"
              className="w-16 h-16"
            />
          </a>
          <a
            href={require("./misc-files/Jerry_Gu_resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./images/resume.png")}
              alt="Resume"
              className="w-16 h-16"
            />
          </a>
          <a
            href="mailto:jerrysonggu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Me"
          >
            <img
              src={require("./images/email.webp")}
              alt="Email"
              className="w-16 h-16"
            />
          </a>
        </div>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Jerry Gu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

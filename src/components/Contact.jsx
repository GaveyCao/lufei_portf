import React from 'react';
import linkedInIcon from '../assets/linkedin.png'; 
import emailIcon from '../assets/mail.png'; 
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="inset-x-0 bottom-0 py-5">
      <div className="flex justify-center items-center gap-4 mb-4">
        <a href="https://www.linkedin.com/in/lufei-wang-8458a527a/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="mailto:lichangus@outlook.com">
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-center text-sm">
        Powered by Chang Li / <a href="mailto:lichangus@outlook.com">lichangus@outlook.com</a> / (415) 640-2051
      </p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
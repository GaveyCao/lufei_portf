import React from 'react';
import { SectionWrapper } from "../hoc";
import pic1 from '../assets/portfolios/Pic2-1.png';
import pic2 from '../assets/portfolios/Pic2-2.png';
import pic3 from '../assets/portfolios/Pic2-3.png';
import pic4 from '../assets/portfolios/Pic2-4.png';
import pic5 from '../assets/portfolios/Pic2-5.png';
import pic6 from '../assets/portfolios/Pic2-6.png';
import pic7 from '../assets/portfolios/Pic2-7.png';
import pic8 from '../assets/portfolios/Pic2-8.png';
import pic9 from '../assets/portfolios/Pic2-9.png';
import pic10 from '../assets/portfolios/Pic2-10.png';

// Mock portfolio images
const portfolioImages = [
  { src: pic1, alt: 'Portfoilo2' },
  { src: pic2, alt: 'Portfoilo2' },
  { src: pic3, alt: 'Portfoilo2' },
  { src: pic4, alt: 'Portfoilo2' },
  { src: pic5, alt: 'Portfoilo2' },
  { src: pic6, alt: 'Portfoilo2' },
  { src: pic7, alt: 'Portfoilo2' },
  { src: pic8, alt: 'Portfoilo2' },
  { src: pic9, alt: 'Portfoilo2' },
  { src: pic10, alt: 'Portfoilo2' },
];

const Portfolio02 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
        {portfolioImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio02, "portfolio");


import React from 'react';
import { SectionWrapper } from "../hoc";
import picture1 from '../assets/portfolios/Picture1.jpg';
import picture2 from '../assets/portfolios/Picture2.jpg';

// Mock portfolio images
const portfolioImages = [
  { src: picture1, alt: 'Description of Image 1' },
  { src: picture2, alt: 'Description of Image 2' },
  // Add more images as needed
];

const Portfolio01 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {portfolioImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio01, "portfolio");


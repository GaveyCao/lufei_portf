import React from 'react';

const getRandomPosition = () => `${Math.floor(Math.random() * 100)}%`;

const DynamicGradientBackground = ({ children }) => {
  // Colors for the spots
  const colors = [
    // 'rgba(0, 0, 255, 0.8)', // Blue
    'rgba(0, 128, 128, 0.8)', // Green (Teal)
    'rgba(128, 0, 128, 0.8)', // Purple
  ];

  // Generate a single string for the background that includes all radial gradients
  const backgroundStyle = colors.map(color => 
    `radial-gradient(circle at ${getRandomPosition()} ${getRandomPosition()}, ${color} 0%, transparent 50%)`
  ).join(', ');

  const gradientStyle = {
    background: `${backgroundStyle}, black`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div style={gradientStyle} >
      {children}
    </div>
  );
};

export default DynamicGradientBackground;

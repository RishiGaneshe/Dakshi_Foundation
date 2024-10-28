import React, { useEffect, useState } from 'react';

const backgrounds = [
  'https://i.ibb.co/5WVKCqr/Herobg1.jpg',
  'https://i.ibb.co/mXnhnfJ/Herobg2.jpg', 
  'https://i.ibb.co/Bw7W5Xs/Herobg3.jpg'
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval); // Proper cleanup
  }, []);  // Empty array to run once

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex]})`,
        height: '95vh',
      }}
    >
      <div className="absolute inset-0"></div> {/* Blur effect */}
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
      <div className="container mx-auto px-6 md:px-10 py-24 flex items-center h-full text-white relative z-10">
        <div className="font-poppins w-full md:w-[750px] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">With Dakshi Foundation,</h1>
          <p className="mt-5 text-lg md:text-xl lg:text-3xl md:w-[550px]">
            We aim to empower communities through education, healthcare, and sustainable development.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="about" className="inline-block bg-white text-red-800 px-6 py-3 rounded text-sm md:text-base lg:text-lg hover:bg-gray-200">
              Know More
            </a>
            <a href="donate" className="inline-block bg-white text-red-800 px-6 py-3 rounded text-sm md:text-base lg:text-lg hover:bg-gray-200">
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

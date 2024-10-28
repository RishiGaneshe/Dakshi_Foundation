import React from 'react';

const FounderMessage = () => {
  return (
    <section className="py-12 flex justify-center">
      <div className="bg-gray-200 rounded-lg p-8 shadow-lg max-w-6xl flex flex-col md:flex-row items-center">
        {/* Founder Image */}
        <div className="px-5 mb-6 md:mb-0 md:mr-8">
          <img 
            src="https://i.ibb.co/WkMf7pt/Rohit-Chouhan-Director-Founder.jpg" 
            alt="Founder" 
            className="w-36 rounded-xl object-cover" 
          />
        </div>
        
        {/* Founder's Message */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-gray-700 text-lg mb-4">
            "At Dakshi, we believe that every individual, regardless of their background, has the potential to contribute meaningfully to society. Our mission is to provide the tools, resources, and support to empower communities, fostering growth that is both sustainable and impactful."
          </p>
          {/* Founder's Name */}
          <p className="text-gray-600 text-sm font-semibold mt-4">
            - Rohit Chouhan, Founder @dakshifoundation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;

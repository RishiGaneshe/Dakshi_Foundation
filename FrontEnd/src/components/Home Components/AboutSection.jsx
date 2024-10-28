import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-2 py-16 text-center">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">Why Us ?</h2>
      
      <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-black-600 m-auto p-5 sm:p-5 text-left">
        Dakshi Foundation is a non-profit organization dedicated to improving the lives of underprivileged communities across the globe. We believe in the power of education, healthcare, and sustainable development to create lasting change.
      </p>
      
      <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-black-600 m-auto p-5 sm:p-5 text-left">
        Our mission is to empower individuals and communities through various programs and initiatives designed to address critical social and economic challenges. We are committed to creating a world where everyone has the opportunity to thrive and reach their full potential.
      </p>
      
      <a href="about" className="mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded text-base sm:text-lg md:text-xl">
        Learn More
      </a>
    </section>
  );
}

export default AboutSection;

import React from 'react';

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold">Our Initiatives</h2>
      <p className="mt-4 text-gray-600">Explore our initiatives to make a difference...</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold">Education for All</h3>
          <p>We believe education is the foundation for a better future...</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold">Healthcare Access</h3>
          <p>Ensuring healthcare for underprivileged communities...</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold">Women's Empowerment</h3>
          <p>Empowering women through skill development and opportunities...</p>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;

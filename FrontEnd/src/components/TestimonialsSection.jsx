import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold">What People Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600">"Rise India Foundation has transformed our community..."</p>
          <p className="mt-4 font-bold">- John Doe</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600">"We are grateful for their support in healthcare."</p>
          <p className="mt-4 font-bold">- Jane Smith</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600">"The educational initiatives are commendable."</p>
          <p className="mt-4 font-bold">- Alex Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

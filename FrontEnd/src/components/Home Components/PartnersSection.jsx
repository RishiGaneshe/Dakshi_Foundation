import React from 'react';

const PartnersSection = () => {
  return (
    <section id="partners" className="p-8 text-center items-center min-h-[500px]">
      <h2 className="mt-4 mb-20 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">Our Partners</h2>

      <div className="container mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 justify-center items-center">
        {/* Partner Image 1 */}
        <img
          src="https://i.ibb.co/zrLzPwL/onestep.jpg"
          alt="One Step"
          className="w-32 object-cover rounded-lg mx-auto"
        />

        {/* Partner Image 2 */}
        <img
          src="https://i.ibb.co/59c95Dg/nyast.jpg"
          alt="Nyast"
          className="w-32 object-cover rounded-lg mx-auto"
        />

        {/* Partner Image 3 */}
        <img
          src="https://i.ibb.co/n3HN52g/sangmitra.jpg"
          alt="Sangmitra"
          className="w-32 object-cover rounded-lg mx-auto"
        />

        {/* Partner Image 4 */}
        <img
          src="https://i.ibb.co/gT3Pj7k/parivartak-support.jpg"
          alt="Pdsf"
          className="w-32 object-cover rounded-lg mx-auto"
        />

        {/* Partner Image 5 */}
        <img
          src="https://i.ibb.co/DwqCm3K/Screenshot-2024-10-16-132912.png"
          alt="Deep Photography"
          className="w-32 object-cover rounded-lg mx-auto"
        />

        {/* Partner Image 6 */}
        <img
          src="https://i.ibb.co/zmq8Vbk/ujjwalbhoomi.png"
          alt="Project Partners"
          className="w-32 object-cover rounded-lg mx-auto"
        />
        
      </div>
    </section>
  );
};

export default PartnersSection;
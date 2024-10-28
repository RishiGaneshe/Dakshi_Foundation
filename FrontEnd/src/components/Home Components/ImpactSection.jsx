import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact" className="p-16 text-center items-center bg-red-600">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-white font-bold">Our Impact</h2>
      <p className="mt-4 text-gray-200 max-w-6xl mx-auto">
        Discover the tangible impact we've made and the lives we've transformed through our unwavering commitment at dakshi Foundation. With the collective efforts of our dedicated team, generous supporters, and resilient communities, we have achieved remarkable milestones.
      </p>

      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Impact Card 1 */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <img
            src="https://i.ibb.co/RPk1mkf/impact1.jpg"
            alt="Lives Improved"
            className="w-30 h-30 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold mt-4">500+</h3>
          <p>Lives Improved</p>
        </div>

        {/* Impact Card 2 */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <img
            src="
https://i.ibb.co/f8F1HTY/impact2.jpg"
            alt="Projects Completed"
            className="w-full h-30 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold mt-4">300+</h3>
          <p>Projects Completed</p>
        </div>

        {/* Impact Card 3 */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <img
            src="https://i.ibb.co/tKK69GQ/impact3.jpg"
            alt="Communities Served"
            className="w-full h-30 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold mt-4">100+</h3>
          <p>Communities Served</p>
        </div>

        {/* Impact Card 4 */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <img
            src="https://i.ibb.co/Bqhr3wm/impact4.jpg"
            alt="Increase in Education"
            className="w-full h-30 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold mt-4">80%</h3>
          <p>Increase in Education</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

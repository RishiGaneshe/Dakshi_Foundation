import React from "react";

const RuralDev = () => {

  const images = [
    "https://i.ibb.co/4Y5wygD/IMG-202410293-230759956.jpg",
    "https://i.ibb.co/xLTWhhj/IMG-20241019-WA0018.jpg",
    "https://i.ibb.co/MkvfwhG/IMG-20241019-WA0023.jpg",
    "https://i.ibb.co/2WTgVFP/IMG-20241019-WA0032.jpg",
    "https://i.ibb.co/4pZqJ00/IMG-20241019-WA0043.jpg"
  ];

  return (
    <div className="sm:mb-8 lg:bg-white lg:h-full">
      <div className="sm:lg:grid lg:grid-cols-5 md:grid-cols-none lg:bg-white lg:h-full mt-5">
        {/* Card content */}
        <div className="px-4 sm:px-8 sm:py-8 max-w-full sm:max-w-md m-auto lg:col-span-2 mt-8 mb-8 sm:mt-16 sm:mb-16 lg:w-full lg:mb-8 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-amber-900 font-bold">
            Rural Development
          </h2>
          <img
            className="h-40 sm:h-48 w-full object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src="https://i.ibb.co/bgcN0TS/ruraldev.jpg"
            alt="Children in a classroom learning"
          />
          <h1 className="font-bold text-lg sm:text-2xl mt-4">
            Fostering Sustainable Growth
          </h1>
          <p className="text-md sm:text-lg text-gray-600 text-justify pt-3">
            At Dakshi Foundation Innovation for Change, our primary goal is to
            foster sustainable development in rural India. Through our dedicated
            efforts and community-driven approach, we are working towards
            creating a positive impact on rural communities by empowering
            individuals, enhancing livelihoods, and promoting long-term growth.
          </p>
        </div>

        {/* Full-width image on larger screens */}
        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            src="https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg"
            alt="Students attending a class"
          />
        </div>
      </div>

      {/* Card content */}
      <div className="py-6 sm:px-8 sm:py-2 max-w-full sm:max-w-md mx-5 lg:py-6 lg:max-w-7xl lg:mt-8 mb-8">
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-amber-900">
          Key Focus Areas
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Livelihood Enhancement:</strong> Programs on skill
            development, entrepreneurship, and income-generating activities to
            empower rural communities economically.
          </li>
          <li className="pt-2">
            <strong>Environmental Sustainability:</strong> Initiatives promoting
            sustainable agriculture, water conservation, renewable energy, and
            waste management.
          </li>
          <li className="pt-2">
            <strong>Community Engagement:</strong> Participatory approaches
            engaging local communities in decision-making and sustainable
            development.
          </li>
          <li className="pt-2">
            <strong>Education and Healthcare:</strong> Improving access to
            quality education, healthcare services, and infrastructure in rural
            areas.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-amber-900">
          Achievements
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Women Empowerment:</strong> Economic empowerment through
            skill training, micro-enterprises, and support for women-led
            initiatives.
          </li>
          <li className="pt-2">
            <strong>Sustainable Agriculture:</strong> Promotion of organic
            farming, water-efficient irrigation, and agroforestry models.
          </li>
          <li className="pt-2">
            <strong>Renewable Energy:</strong> Solar energy projects and
            renewable energy awareness campaigns for rural households.
          </li>
          <li className="pt-2">
            <strong>Waste Management:</strong> Initiatives for waste
            segregation, recycling, and composting to promote a cleaner
            environment.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-amber-900">
          Future Directions
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Resource Mobilization:</strong> Strengthening funding
            mechanisms to scale up impact and reach more rural communities.
          </li>
          <li className="pt-2">
            <strong>Technology Integration:</strong> Investing in digital
            solutions for more efficient rural development interventions.
          </li>
          <li className="pt-2">
            <strong>Policy Advocacy:</strong> Advocating for pro-rural
            development policies and collaborating with government agencies.
          </li>
        </ul>
      </div>

      <div className="p-5 overflow-x-auto whitespace-nowrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative inline-block m-2 overflow-hidden transition-opacity duration-300"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-60 w-80 object-cover transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuralDev;

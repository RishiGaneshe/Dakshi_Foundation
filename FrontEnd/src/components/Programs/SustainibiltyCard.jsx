import React from "react";

const SustainabilityCard = () => {

  const images = [
    "https://i.ibb.co/WPwmmSh/IMG-202410293-230936482.jpg",
    "https://i.ibb.co/khYxrH6/IMG-20241019-WA0013.jpg",
    "https://i.ibb.co/wRxJ19H/IMG-20241019-WA0014.jpg",
    "https://i.ibb.co/tbNnKVk/IMG-20241019-WA0015.jpg",
    "https://i.ibb.co/RNqWkwG/IMG-20241019-WA0030-1.jpg",
    "https://i.ibb.co/HHf6Bqp/IMG-20241019-WA0035.jpg"

  ];


  return (
    <div className="sm:mb-8 lg:bg-white lg:h-full">
      <div className="lg:grid lg:grid-cols-5 lg:bg-white lg:h-full mt-5">
        {/* Card content */}
        <div className="px-4 sm:px-8 sm:py-8 max-w-full sm:max-w-md m-auto lg:col-span-2 mt-8 mb-8 sm:mt-16 sm:mb-16 lg:w-full lg:mb-8 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-green-600 font-bold">
            Sustainability
          </h2>
          <img
            className="h-40 sm:h-48 w-full object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src="https://i.ibb.co/18CWM3D/Sustainibility.jpg"
            alt="Sustainability Initiatives"
          />
          <h1 className="font-bold text-lg sm:text-2xl mt-4">
            Driving Green Innovations for a Better Future
          </h1>
          <p className="text-md sm:text-lg text-gray-600 text-justify pt-3">
            Sustainability lies at the heart of Dakshi Foundation’s mission. Our
            efforts are focused on promoting environmental conservation,
            renewable energy adoption, and sustainable agricultural practices to
            create a cleaner, greener future.
          </p>
        </div>

        {/* Full-width image on larger screens */}
        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/18CWM3D/Sustainibility.jpg"
            alt="Green fields and solar panels"
          />
        </div>
      </div>

      {/* Focus Areas */}
      <div className="py-6 sm:px-8 sm:py-2 max-w-full sm:max-w-md mx-5 lg:py-6 lg:max-w-7xl lg:mt-8 mb-8">
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-green-600">
          Key Focus Areas
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Renewable Energy:</strong> Promoting the use of solar, wind,
            and other renewable sources to reduce dependence on fossil fuels.
          </li>
          <li className="pt-2">
            <strong>Water Conservation:</strong> Implementing rainwater
            harvesting and water-saving techniques in communities.
          </li>
          <li className="pt-2">
            <strong>Waste Management:</strong> Encouraging recycling,
            composting, and waste reduction strategies for sustainable living.
          </li>
          <li className="pt-2">
            <strong>Climate Action:</strong> Advocating for policies and
            practices that mitigate climate change and reduce carbon footprints.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-green-600">
          Achievements
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Solar Energy Installations:</strong> Installed solar panels
            in 100+ rural homes, providing clean, renewable energy.
          </li>
          <li className="pt-2">
            <strong>Water Conservation:</strong> Implemented water-saving
            techniques that have reduced water consumption by 30%.
          </li>
          <li className="pt-2">
            <strong>Waste Reduction:</strong> Launched successful waste
            management programs in 20+ villages, reducing landfill waste.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-green-600">
          Future Directions
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Renewable Expansion:</strong> Scale solar and wind energy
            projects to power an additional 200+ rural homes.
          </li>
          <li className="pt-2">
            <strong>Climate Resilience:</strong> Strengthening initiatives that
            help rural communities adapt to climate change.
          </li>
          <li className="pt-2">
            <strong>Sustainability Education:</strong> Launching workshops and
            campaigns to promote eco-friendly lifestyles.
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
              className="h-60 w-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityCard;

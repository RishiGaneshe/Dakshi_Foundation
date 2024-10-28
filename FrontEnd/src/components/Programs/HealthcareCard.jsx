import React from "react";

const HealthcareCard = () => {

  const images = [
    "https://i.ibb.co/NC3NCPx/7977955d-7079-4830-86f9-ceb7e573dc00.jpg",
    "https://i.ibb.co/VJZ5XqX/IMG-20241019-WA0033.jpg",
    "https://i.ibb.co/g9Spg9F/IMG-20241019-WA0029.jpg",
    "https://i.ibb.co/k3chSPP/IMG-20241019-WA0031.jpg",
    "https://i.ibb.co/V9Y5bpK/7dea372f-c7ee-464c-97de-ecc4f8ad011f.jpg",
    "https://i.ibb.co/Qvdtrg1/13448365203-877fbeac55-o.jpg",
  ];

  return (
    <div className="sm:mb-8 lg:bg-white lg:h-full">
      <div className="lg:grid lg:grid-cols-5 lg:bg-white lg:h-full mt-5">
        {/* Card content */}
        <div className="px-4 sm:px-8 sm:py-8 max-w-full sm:max-w-md m-auto lg:col-span-2 mt-8 mb-8 sm:mt-16 sm:mb-16 lg:w-full lg:mb-8 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-bold">
            Healthcare
          </h2>
          <img
            className="h-40 sm:h-48 w-full object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src="https://i.ibb.co/Qp9xNrD/Healthcare.jpg"
            alt="Healthcare services in rural areas"
          />
          <h1 className="font-bold text-lg sm:text-2xl mt-4">
            Providing Access to Quality Healthcare
          </h1>
          <p className="text-md sm:text-lg text-gray-600 text-justify pt-3">
            Access to quality healthcare is a fundamental right. We are
            committed to delivering healthcare services to underserved
            communities by setting up health camps, promoting hygiene, and
            providing basic medical facilities.
          </p>
        </div>

        {/* Full-width image on larger screens */}
        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/Qp9xNrD/Healthcare.jpg"
            alt="Healthcare support for rural people"
          />
        </div>
      </div>

      {/* Focus Areas */}
      <div className="py-6 sm:px-8 sm:py-2 max-w-full sm:max-w-md mx-5 lg:py-6 lg:max-w-7xl lg:mt-8 mb-8">
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-blue-600">
          Key Focus Areas
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Primary Healthcare Access:</strong> Setting up mobile health
            camps and clinics in remote areas.
          </li>
          <li className="pt-2">
            <strong>Mental Health Awareness:</strong> Raising awareness and
            providing support for mental health issues.
          </li>
          <li className="pt-2">
            <strong>Maternal and Child Health:</strong> Focusing on reducing
            maternal and infant mortality rates through better care.
          </li>
          <li className="pt-2">
            <strong>Nutrition Programs:</strong> Providing nutritional support
            for children and pregnant women.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-blue-600">
          Achievements
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Health Camps:</strong> Conducted 500+ health camps serving
            thousands of patients.
          </li>
          <li className="pt-2">
            <strong>Child Health:</strong> Reduced infant mortality rates in
            targeted rural areas by 20%.
          </li>
          <li className="pt-2">
            <strong>Mental Health Support:</strong> Launched mental health
            programs in 30 villages, supporting over 500 individuals.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-blue-600">
          Future Directions
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Telemedicine:</strong> Introducing telemedicine services to
            reach remote communities more effectively.
          </li>
          <li className="pt-2">
            <strong>Preventive Care:</strong> Expanding awareness programs
            focused on preventive healthcare and hygiene.
          </li>
          <li className="pt-2">
            <strong>Public Health Education:</strong> Increasing public health
            education efforts to address prevalent diseases and malnutrition.
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

export default HealthcareCard;

import React from "react";

const EducationCard = () => {
  const images = [
    "https://i.ibb.co/mhbTQWL/IMG-20241019-WA0008.jpg",
    "https://i.ibb.co/mcxSck8/IMG-20241019-WA0011.jpg",
    "https://i.ibb.co/zZHbV1g/IMG-20241019-WA0045.jpg",
    "https://i.ibb.co/7bfYfy3/IMG-20241019-WA0017.jpg",
    "https://i.ibb.co/zNJQjcn/IMG-20241019-WA0024.jpg",
    "https://i.ibb.co/x764v2B/IMG-20241019-WA0027.jpg",
  ];

  return (
    <div className="sm:mb-8 lg:bg-white lg:h-full">
      <div className="lg:grid lg:grid-cols-5 lg:bg-white lg:h-full mt-5">
        {/* Card content */}
        <div className="px-4 sm:px-8 sm:py-8 max-w-full sm:max-w-md m-auto lg:col-span-2 mt-8 mb-8 sm:mt-16 sm:mb-16 lg:w-full lg:mb-8 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg">
        <img
            className="h-40 sm:h-48 w-full object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src="https://i.ibb.co/chjYvcN/Education.jpg"
            alt="Healthcare services in rural areas"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">
            Education
          </h2>
          <h1 className="font-bold text-lg sm:text-2xl mt-4">
            Empowering Minds for a Better Tomorrow
          </h1>
          <p className="text-md sm:text-lg text-gray-600 text-justify pt-3">
            Education is the key to unlocking opportunities. At Dakshi
            Foundation, we are committed to improving access to quality
            education in underserved communities. We believe in holistic
            development, nurturing students' academic, emotional, and social
            growth.
          </p>
        </div>

        {/* Full-width image on larger screens */}
        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/chjYvcN/Education.jpg"
            alt="Students in a classroom"
          />
        </div>
      </div>

      {/* Focus Areas */}
      <div className="py-6 sm:px-8 sm:py-2 max-w-full sm:max-w-md mx-5 lg:py-6 lg:max-w-7xl lg:mt-8 mb-8">
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-red-600">
          Key Focus Areas
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Access to Education:</strong> Bridging the gap in rural
            education by setting up schools and community learning centers.
          </li>
          <li className="pt-2">
            <strong>Teacher Training:</strong> Providing comprehensive training
            programs for educators to enhance teaching methods and student
            engagement.
          </li>
          <li className="pt-2">
            <strong>Technology Integration:</strong> Introducing digital tools
            and e-learning platforms to enhance classroom learning.
          </li>
          <li className="pt-2">
            <strong>Holistic Development:</strong> Focusing on overall
            development by incorporating extracurricular activities and
            life-skills training.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-red-600">
          Achievements
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>School Enrollment:</strong> Successfully enrolled 10,000+
            students in rural and semi-urban areas.
          </li>
          <li className="pt-2">
            <strong>Digital Learning:</strong> Introduced e-learning programs in
            50+ rural schools, helping students embrace technology.
          </li>
          <li className="pt-2">
            <strong>Scholarship Programs:</strong> Provided scholarships to over
            500 students from economically disadvantaged backgrounds.
          </li>
        </ul>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-red-600">
          Future Directions
        </h3>
        <ul className="list-disc pl-4 text-md sm:text-lg text-gray-600">
          <li className="pt-2">
            <strong>Expansion of Digital Education:</strong> We aim to extend
            e-learning resources to an additional 100 schools in remote areas.
          </li>
          <li className="pt-2">
            <strong>Curriculum Innovation:</strong> Integrating STEM education
            and innovative teaching models to enhance student learning outcomes.
          </li>
          <li className="pt-2">
            <strong>Global Partnerships:</strong> Collaborating with
            international education bodies to improve local education systems.
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

export default EducationCard;

import React, { useState } from "react";
import ProgramHero from "../components/Programs/ProgramHero";
import EducationCards from "../components/Programs/EducationCard";
import SustainibiltyCard from "../components/Programs/SustainibiltyCard";
import HealthcareCards from "../components/Programs/HealthcareCard";
import DonateHero from "../components/Getinvolved/Donate/Donatehero";
import RuralDev from "../components/Programs/RuralDev";

const Programs = () => {
  // State to keep track of the selected program
  const [selectedProgram, setSelectedProgram] = useState("education");

  // Handler to update the selected program
  const handleSelectionChange = (program) => {
    setSelectedProgram(program);
  };

  return (
    <div>
      <ProgramHero />

      {/* Responsive Navigation buttons to select a card, with background color change for the active one */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center mx-auto max-w-3xl p-5">
        <button
          className={`p-2 rounded-lg ${
            selectedProgram === "education"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleSelectionChange("education")}
        >
          Education
        </button>
        <button
          className={`p-2 rounded-lg ${
            selectedProgram === "sustainability"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleSelectionChange("sustainability")}
        >
          Sustainability
        </button>
        <button
          className={`p-2 rounded-lg ${
            selectedProgram === "healthcare"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleSelectionChange("healthcare")}
        >
          Healthcare
        </button>
        <button
          className={`p-2 rounded-lg ${
            selectedProgram === "ruralDevelopment"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleSelectionChange("ruralDevelopment")}
        >
          Rural Devel..
        </button>
      </div>

      {/* Conditionally render the selected card */}
      <div className="">
        {selectedProgram === "education" && <EducationCards />}
        {selectedProgram === "sustainability" && <SustainibiltyCard />}
        {selectedProgram === "healthcare" && <HealthcareCards />}
        {selectedProgram === "ruralDevelopment" && <RuralDev />}
      </div>
        <DonateHero />
    </div>
  );
};

export default Programs;

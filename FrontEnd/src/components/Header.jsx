import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Dropdown state for "Programs"
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false); // Dropdown state for "Get Involved"

  // Function to stop propagation of events inside dropdown
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const scrollToPartnerForm = () => {
    const donateSection = document.getElementById('partner-form');
    if (donateSection) {
        donateSection.scrollIntoView({ behavior: 'smooth' });
    }
};

  // Function to close dropdown and menu when an item is clicked
  const handleDropdownItemClick = () => {
    setIsProgramsOpen(false);
    setIsInvolvedOpen(false);
    setIsOpen(false); // Close the mobile menu as well
  };

  return (
    <header className="sticky top-0 z-20 shadow h-25 backdrop-blur-5 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <a href=" /">
            <img
              src='https://i.postimg.cc/9FGZ1ddN/IMG-20240907-WA0001.jpg'
              alt="Dakshi Foundation Logo"
              className="h-16"
            />
          </a>
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-red-600 focus:outline-none transition-colors duration-300"
          >
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Navigation Menu (Hidden on small screens, shown on medium and larger screens) */}
        <nav className="hidden md:flex items-center space-x-8 justify-center font-bold font-poppins">
          <Link to="/" className="text-gray-600 hover:text-red-800 transition-colors duration-300" onClick={handleDropdownItemClick}>Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>About</Link>

          {/* Programs Dropdown */}
          <div className="relative group" onClick={handleDropdownClick}>
            <button
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              Programs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isProgramsOpen && (
              <div className="absolute bg-white shadow-lg mt-2 space-y-2 p-2 rounded-lg" onClick={handleDropdownClick}>
                <Link to="/program" className="block text-gray-600 text-left hover:text-red-600" onClick={handleDropdownItemClick}>Education</Link>
                <Link to="/program" className="block text-gray-600 text-left hover:text-red-600" onClick={handleDropdownItemClick}>Healthcare</Link>
                <Link to="/program" className="block text-gray-600 text-left hover:text-red-600" onClick={handleDropdownItemClick}>Sustainability</Link>
                <Link to="/program" className="block text-gray-600 text-left hover:text-red-600" onClick={handleDropdownItemClick}>Rural Dev..</Link>
              </div>
            )}
          </div>

          {/* Get Involved Dropdown */}
          <div className="relative group" onClick={handleDropdownClick}>
            <button
              onClick={() => setIsInvolvedOpen(!isInvolvedOpen)}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              Get Involved
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isInvolvedOpen && (
              <div className="absolute bg-white shadow-lg mt-2 space-y-2 p-2 rounded-lg" onClick={handleDropdownClick}>
                <Link to="/volunteer" className="block text-gray-600 text-left hover:text-red-600 " onClick={handleDropdownItemClick}>Volunteer</Link>
                <Link to="/partner" className="block text-gray-600 text-left hover:text-red-600" onClick={{handleDropdownItemClick,scrollToPartnerForm}}>Partner</Link>
                <Link to="/donate" className="block text-gray-600 text-left hover:text-red-600" onClick={handleDropdownItemClick}>Donate</Link>
              </div>
            )}
          </div>

          {/* Donate Button (Hidden on small screens) */}
          <Link to="/donate" className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Donate</Link>
        </nav>
      </div>

      {/* Mobile Menu (Visible when open on small screens) */}
      <nav
        className={`md:hidden flex flex-col space-y-2 mt-2 items-center transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 max-h-screen pb-4' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        <Link to="/" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Home</Link>
        <Link to="/about" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>About</Link>

        {/* Programs Dropdown for Mobile */}
        <div>
          <button
            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            className="flex items-center text-gray-600 font-bold hover:text-red-600 transition-colors duration-300"
          >
            Programs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isProgramsOpen && (
            <div className="flex flex-col mt-2 space-y-2" onClick={handleDropdownClick}>
              <Link to="/program" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Education</Link>
              <Link to="/program" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Healthcare</Link>
              <Link to="/program" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Sustainability</Link>
            </div>
          )}
        </div>

        {/* Get Involved Dropdown for Mobile */}
        <div>
          <button
            onClick={() => setIsInvolvedOpen(!isInvolvedOpen)}
            className="flex items-center text-gray-600 font-bold hover:text-red-600 transition-colors duration-300"
          >
            Get Involved
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isInvolvedOpen && (
            <div className="flex flex-col mt-2 space-y-2" onClick={handleDropdownClick}>
              <Link to="/volunteer" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Volunteer</Link>
              <Link to="/partner" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Partner</Link>
              <Link to="/donate" className="text-gray-600 font-bold hover:text-red-600 transition-colors duration-300" onClick={handleDropdownItemClick}>Donate</Link>
            </div>
          )}
        </div>

        {/* Donate Button */}
        <Link to="/donate" className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300" onClick={handleDropdownItemClick}>Donate</Link>
      </nav>
    </header>
  );
};

export default Header;

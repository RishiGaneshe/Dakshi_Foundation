import React from 'react';

const Donatehero = () => {
    const scrollToDonateForm = () => {
        const donateSection = document.getElementById('donate-form');
        if (donateSection) {
            donateSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
                className="relative bg-cover bg-center h-80 flex items-center justify-center" 
                style={{ backgroundImage: `url('https://i.ibb.co/th3GFwn/Donatebg.jpg')`}}
            >

            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                    Support Dakshi Foundation
                </h1>
                <p className="text-xs md:text-xl text-white mt-4 text-center">
                    Your generosity helps us uplift communities, create lasting change, and make a difference.
                </p>
                <div className="flex justify-center mt-6">
                    <button 
                        className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition"
                        onClick={scrollToDonateForm}
                    >
                        <a href="donate">Donate Now</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Donatehero;

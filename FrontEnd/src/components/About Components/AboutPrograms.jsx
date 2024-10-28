import React from 'react';

const AboutPrograms = () => {
    return (
        <div className="bg-red-600" >
            <h2 className="my-4 pt-10 text-3xl sm:text-4xl md:text-5xl text-white font-bold px-5 text-center">Our Thumb Rules</h2>
            <section className=" py-5">
                <div className="container mx-auto px-4">
                    <h2 className="mt-4 text-lg sm:text-3xl md:text-4xl text-white font-bold px-5 italic">Impact</h2>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 m-auto px-5 sm:px-5 text-left italic">
                        Dakshi Foundation has a proven track record of making a real difference in the lives of thousands of people. We provided healthcare services and implemented sustainable development projects in communities across India.
                    </p>
                </div>
            </section>

            <section className=" bg-red-500 container mx-auto px-4 py-5">
            <h2 className="mt-4 text-lg sm:text-3xl md:text-4xl text-white font-bold px-5 text-right italic">Transparency</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 m-auto px-5 sm:px-5 text-right italic">
                    We are committed to transparency and accountability in all our operations. We believe in being open and honest with our donors and the communities we serve about how their contributions are used to create positive change.
                </p>
            </section>

            <section className="py-10">
                <div className="container mx-auto px-4">
                    <h2 className="mt-4 text-lg sm:text-3xl md:text-4xl text-white font-bold px-5 italic">Partnerships</h2>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 m-auto px-5 sm:px-5 text-left">
                        We are proud to work with a network of dedicated partners, including local NGOs, government agencies, and private businesses, to achieve our shared goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPrograms;

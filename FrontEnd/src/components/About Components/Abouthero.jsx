import React from 'react';

const Abouthero = () => {
    return (
        <div>
            <section 
                className="relative bg-cover bg-center h-96 flex items-center justify-center" 
                style={{ backgroundImage: `url('https://i.ibb.co/7QbQqsG/Aboutherobg.jpg')`}}
            >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container mx-auto px-4 py-20 relative z-10 text-white text-center">
                    <p className="mt-4 text-lg md:text-3xl">We Believe Together, we can make a difference.</p>
                    <h1 className="text-4xl md:text-6xl font-bold mt-5">Empowering Lives, Creating Change</h1>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold px-5">About Dakshi Foundation</h2>
                <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-black-600 m-auto p-5 sm:p-5 text-left">
                    Dakshi Foundation is a non-profit organization dedicated to improving the lives of underprivileged communities across the globe. We believe in the power of education, healthcare, and sustainable development to create lasting change. Our mission is to empower individuals and communities through various programs and initiatives designed to address critical social and economic challenges.
                </p>
                <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-black-600 m-auto p-5 sm:p-5 text-left">
                    We are committed to creating a world where everyone has the opportunity to thrive and reach their full potential. Our approach is holistic, focusing on integrating education, health services, and sustainable development practices to uplift communities.
                </p>
            </section>
        </div>
    );
};

export default Abouthero;

import React from 'react'

const VolunteerHero = () => {
    return (
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('https://i.ibb.co/zfspKrW/Volunteerbg.jpg')`}}>
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Join Hands with Dakshi Foundation
                </h1>
                <p className="text-sm md:text-2xl text-white mt-4 text-center">
                Be a part of us and help in creating positive change and uplifting communities across the nation. </p>
            </div>
        </section>
    )
}

export default VolunteerHero

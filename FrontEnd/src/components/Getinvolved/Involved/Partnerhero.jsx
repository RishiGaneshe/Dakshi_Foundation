import React from 'react'

const PartnerHero = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center h-96 my-14" style={{ backgroundImage: `url('https://i.ibb.co/TP9QGB2/Partnerbg.jpg')`}}>
                <div className="absolute inset-0 bg-black opacity-85"></div>
                <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Wish To Become a Partner ?
                </h1>
                <p className="text-sm md:text-2xl text-white mt-4 text-center">
                Join our Partner Program  to improvement in their livelihoods through various activities. </p>
                </div>
            </section>
        </div>
    )
}

export default PartnerHero
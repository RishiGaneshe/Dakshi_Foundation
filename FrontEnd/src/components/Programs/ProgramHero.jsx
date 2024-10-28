import React from "react";
const ProgramHero = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/R4Yw1tG/programhero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Our Various Programmes
          </h1>
          <p className="text-sm md:text-2xl text-white mt-4 text-center">
            Empowering communities through education, healthcare, and
            development initiatives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProgramHero;

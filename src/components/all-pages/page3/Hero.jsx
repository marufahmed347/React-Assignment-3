import React from "react";

const HeroSection = () => {
  return (
    <>
    <hr className="my-2 text-[#DCDCDC]" />

    <div className="bg-white min-h-screen font-sans mb-5 md:mb-10">
      <div className="text-[16px] font-semibold text-[#232323] px-6 md:px-12 lg:px-22 py-2">
        Home / Bellaitalia
      </div>

      <div className="relative">
        <div className="relative w-full h-[400px] md:h-[552px]">
          <img
            src="hero.png"
            alt="Bella Italia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
            <div className="text-white max-w-[610px] px-6 md:px-12 lg:px-22">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 md:mb-4">Bella italia</h1>

              <div className="flex items-center mb-3 md:mb-5 text-sm sm:text-base">
                <img className="w-28" src="star.png" alt="" />
                <span className="ml-3">5.0 (834 reviews)</span>
              </div>

              <div className="mb-5 md:mb-10 ">
              <p className="text-sm sm:text-base">
              The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
              </p>
              <p className="text-sm sm:text-base">
              The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
              </p>
              </div>

              <div className="flex items-center text-sm mb-3 md:mb-6">
                <img className="mr-2 w-4" src="location.png" alt="" />
                Singapour, Bishan-Ang Mo Kio Park
              </div>

              <div className="flex items-center text-sm">
                <img className="mr-2 w-4" src="time.png" alt="" />
                7/7, 08:00 - 22:00
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px]">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg bg-white overflow-hidden flex items-center justify-center">
            <img
              src="herol.png"
              alt="Bella Italia Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;

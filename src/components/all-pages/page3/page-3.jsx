import React, { useState, useEffect } from "react";
import HeroSection from "./Hero";
import MiniCard from "./MiniCard";
import FooterSection from "./Footer";
import PhotoGallery from "./Photos";
import ContactCard from "./Information";
import OverallRating from "./Rating";
import Reviews from "./CardRow";

function Page3() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let showInterval;
    let hideTimeout;

    const showAndHideMenu = () => {
      setShowMenu(true);
      hideTimeout = setTimeout(() => {
        setShowMenu(false);
      }, 120000);
    };

    
    const initialTimeout = setTimeout(() => {
      showAndHideMenu();

      
      showInterval = setInterval(showAndHideMenu, 150000);
    }, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(showInterval);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <PhotoGallery />
      <ContactCard />
      <OverallRating />
      <Reviews />
      <MiniCard />
      <FooterSection />

      {showMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-10">
          <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl bg-white p-4 rounded-lg">
            
            <div className="absolute top-2 right-2 lg:top-0 lg:-right-12 z-50">
              <button
                onClick={() => setShowMenu(false)}
                className="text-white text-3xl font-bold hover:text-red-400 transition"
              >
                <img
                  src="into3.png"
                  alt="Close"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </button>
            </div>

            <div className="overflow-hidden">
              <img
                src="/menu.png"
                alt="Menu Bella Italia"
                className="w-full h-auto object-contain max-h-[70vh] sm:max-h-[80vh]"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg text-[#232323] sm:text-xl font-semibold mb-2 sm:mb-5">
                  Menu Bella Italia
                </h2>
                <button
                  href="/menu.png"
                  className="flex text-[#1677BD] px-4 py-2 border border-[#1677BD] rounded-full transition text-sm sm:text-base items-center gap-3 mx-auto"
                >
                  <img src="d.png" className="size-5" alt="" />
                  Download this menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page3;

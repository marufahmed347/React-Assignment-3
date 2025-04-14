import React, { useState, useEffect } from "react";

const restaurants = [
  {
    name: "The melt",
    images: ["mini1.png", "card12.png", "card11.png", "card10.png"],
    rating: "3.5",
    reviews: 334,
  },
  {
    name: "Lokma",
    images: ["mini2.png", "card10.png", "card9.png", "card8.png","card1.png", "card2.png", "card3.png"],
    rating: "5.0",
    reviews: 253,
  },
  {
    name: "The snug",
    images: ["mini3.png", "card11.png", "card12.png",],
    rating: "4.5",
    reviews: 654,
  }
];

const MiniCard = () => {
  return (
    <>
    <div className="px-5 lg:pr-30 max-w-6xl py-3 mb-5 md:mb-10 lg:py-5 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-6 text-start">Also discover...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="overflow-hidden relative bg-[#F8F8F8] rounded-lg">
            <ImageSlider images={restaurant.images} />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#232323]">{restaurant.name}</h3>
              <p className="text-[#8F8F8F] text-sm mt-1">
                The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
              </p>
              <div className="mt-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-500 ${i < Math.round(restaurant.rating) ? 'opacity-100' : 'opacity-30'}`}>⭐</span>
                ))}
                <span className="ml-2 font-medium">{restaurant.rating}</span>
                <span className="ml-2 text-[#8F8F8F] text-sm">({restaurant.reviews} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <hr className="my-5 text-[#DCDCDC]" />
    </>
  );
};

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
      <img
        src={images[currentImageIndex]}
        alt="slider"
        className="w-full h-full rounded-lg object-cover transition-opacity duration-500"
      />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer ${i === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentImageIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MiniCard;

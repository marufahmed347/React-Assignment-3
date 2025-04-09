import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const restaurants = [
  {
    name: "Bella Italia",
    images: ["card1.png", "card12.png", "card11.png", "card10.png"],
    rating: "4.8",
    reviews: 34,
  },
  {
    name: "Little Shucker",
    images: ["card2.png", "card10.png", "card9.png", "card8.png"],
    rating: "5.0",
    reviews: 253,
  },
  {
    name: "Marafuku Ramen",
    images: ["card3.png", "card11.png", "card12.png",],
    rating: "3.5",
    reviews: 87,
  },
  {
    name: "Bottega",
    images: ["card4.png", "card9.png", "card10.png", "card11.png"],
    rating: "5.0",
    reviews: 876,
  },
  {
    name: "Arabia Nights",
    images: ["card5.png", "card4.png", "card3.png", "card2.png"],
    rating: "3.5",
    reviews: 334,
  },
  {
    name: "Lokma",
    images: ["card6.png", "card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card7.png",],
    rating: "5.0",
    reviews: 253,
  },
  {
    name: "The Snug",
    images: ["card7.png", "card2.png"],
    rating: "4.5",
    reviews: 654,
  },
  {
    name: "Starbelly",
    images: ["card8.png", "card10.png", "card9.png", "card7.png"],
    rating: "5.0",
    reviews: 876,
  },
  {
    name: "Iori",
    images: ["card9.png", "card4.png", "card3.png", "card2.png"],
    rating: "3.5",
    reviews: 334,
  },
  {
    name: "Ngalley",
    images: ["card10.png", "card7.png", "card6.png", "card5.png", "card4.png", "card3.png",],
    rating: "5.0",
    reviews: 253,
  },
  {
    name: "diogonal",
    images: ["card11.png", "card8.png", "card9.png"],
    rating: "4.5",
    reviews: 654,
  },
  {
    name: "Kitoko",
    images: ["card12.png", "card3.png", "card4.png", "card5.png"],
    rating: "5.0",
    reviews: 876,
  },
];


const CardSection = () => {
  return (
    <>
    <div className="px-5 lg:px-10 py-3 lg:py-5 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4 text-start">The latest trends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

    <div className="lg:pb-10 px-5 lg:px-10 pb-5 lg:pt-5 pt-3">
      <p className="text-2xl text-[#1E1E1E] text-center pb-3">Discover more cool restaurants</p>
      <button  className="px-8 py-2 bg-[#1677BD] text-white rounded-full cursor-pointer block mx-auto">Show more</button>
    </div>
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

export default CardSection;

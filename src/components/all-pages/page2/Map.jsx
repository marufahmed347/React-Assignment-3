import React, { useState, useEffect } from "react";

const restaurants = [
  {
    name: "The Snug",
    rating: 4.8,
    reviews: 450,
    images: ["m1.png", "m7.png", "m6.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Bottega",
    rating: 5.0,
    reviews: 105,
    images: ["m2.png", "m5.png", "m4.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Little Shucker",
    rating: 4.9,
    reviews: 380,
    images: ["m3.png", "m2.png", "m1.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "The Snug",
    rating: 4.8,
    reviews: 450,
    images: ["m1.png", "m7.png", "m6.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Bottega",
    rating: 5.0,
    reviews: 105,
    images: ["m2.png", "m5.png", "m4.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Little Shucker",
    rating: 4.9,
    reviews: 380,
    images: ["m3.png", "m2.png", "m1.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Little Shucker",
    rating: 4.9,
    reviews: 380,
    images: ["m3.png", "m2.png", "m1.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
];

const RestaurantCard = ({ restaurant }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % restaurant.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [restaurant.images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex gap-2 py-5 border-b border-gray-200 items-center">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={restaurant.images[currentImage]}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Image Dots - Positioned below the image */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
          {restaurant.images.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">{restaurant.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{restaurant.description}</p>
        <div className="flex items-center text-yellow-500 mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.round(restaurant.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
          ))}
          <span className="ml-2 text-gray-600 text-sm">{restaurant.rating} ({restaurant.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-5 lg:px-10 lg:pl-22 bg-white">
        <p className="text-sm text-gray-600 mb-2"><span className="text-blue-500 cursor-pointer">Home</span> / All restaurants</p>
        <div className="flex justify-between items-center mb-4 relative">
          <h1 className="text-2xl font-bold">Best Restaurants in Singapore</h1>
          <button 
            className="flex items-center px-4 py-2 rounded-full bg-[#5E5E5E] text-white"
            onClick={() => setShowSortOptions(!showSortOptions)}
          >
            <span className="mr-2"><img src="s.png" alt="" /></span> Sort
          </button>
          {showSortOptions && (
            <div className="absolute right-0 top-16 xl:top-14 bg-white shadow-lg rounded-lg w-48 border border-gray-300">
              <div className="flex relative">
                <div className="p-4">
                    <p className="hover:bg-gray-100 p-2 cursor-pointer text-[#2146C7]">All feedbacks</p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer text-gray-700">Highest rated</p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer text-gray-700">Oldest rated</p>
                </div>
                <div className="px-1 pt-2">
                  <button onClick={() => setShowSortOptions(false)} className="text-gray-600 text-xl">
                    <img src="into2.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
        <button className="mt-5 md:mt-10 px-4 py-2 bg-[#1677BD] text-white rounded-full w-full md:w-auto mb-5 md:mb-20">Show More</button>
      </div>

      <div className="w-full md:w-1/2 h-auto">
        <img src="map.png" alt="" />
      </div>
    </div>
  );
};

export default RestaurantList;

import React, { useState, useEffect } from "react";

const restaurantsData = [
  {
    name: "The Snug",
    rating: 2.8,
    reviews: 654,
    images: ["m1.png", "m7.png", "m6.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Bottega",
    rating: 4.9,
    reviews: 1654,
    images: ["m2.png", "m5.png", "m4.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Little Shucker",
    rating: 3.5,
    reviews: 553,
    images: ["m3.png", "m2.png", "m1.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Lokma",
    rating: 4.5,
    reviews: 654,
    images: ["m1.png", "m7.png", "m6.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Starbelly",
    rating: 4.7,
    reviews: 654,
    images: ["m2.png", "m5.png", "m4.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "The melt",
    rating: 4.5,
    reviews: 654,
    images: ["m3.png", "m2.png", "m1.png"],
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Arabia Nights",
    rating: 4.4,
    reviews: 654,
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
        <div className="flex items-center mt-1 md:mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={restaurant.name + i} className={i < Math.round(restaurant.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
          ))}
          <span className="ml-2 font-medium text-[#232323]">{restaurant.rating}</span>
          <span className="ml-2 text-[#8F8F8F] text-sm">({restaurant.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOption, setSortOption] = useState("All feedbacks");

  const getSortedRestaurants = () => {
    if (sortOption === "Highest rated") {
      return [...restaurantsData].sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Oldest rated") {
      return [...restaurantsData].sort((a, b) => a.rating - b.rating);
    }
    return restaurantsData;
  };

  const sortedRestaurants = getSortedRestaurants();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-5 lg:px-10 lg:pl-22">
        <p className="text-[16px] font-semibold text-[#232323] mb-2"><span>Home</span> / All restaurants</p>
        <div className="flex justify-between items-center mb-4 relative">
          <h1 className="text-2xl font-bold text-[#1E1E1E]">best restaurants in Singapore</h1>
          <button 
            className="flex items-center px-4 py-2 rounded-full bg-[#5E5E5E] text-white"
            onClick={() => setShowSortOptions(!showSortOptions)}
          >
            <span className="mr-2"><img src="s.png" alt="sort icon" /></span> Sort
          </button>
          {showSortOptions && (
            <div className="absolute right-0 top-16 bg-white shadow-lg rounded-lg w-48 border border-[#E6E6E6] z-10">
              <div className="flex relative">
                <div className="p-4">
                  <p onClick={() => { setSortOption("All feedbacks"); setShowSortOptions(false); }}
                    className={`hover:bg-gray-100 p-2 cursor-pointer ${sortOption === "All feedbacks" ? "text-[#2146C7]" : "text-gray-700"}`}>All feedbacks</p>
                    
                  <p onClick={() => { setSortOption("Highest rated"); setShowSortOptions(false); }}
                    className={`hover:bg-gray-100 p-2 cursor-pointer ${sortOption === "Highest rated" ? "text-[#2146C7]" : "text-gray-700"}`}> Highest rated</p>

                  <p onClick={() => { setSortOption("Oldest rated"); setShowSortOptions(false); }}
                    className={`hover:bg-gray-100 p-2 cursor-pointer ${sortOption === "Oldest rated" ? "text-[#2146C7]" : "text-gray-700"}`}>Oldest rated</p>
                </div>
                <div className="px-1 pt-2">
                  <button onClick={() => setShowSortOptions(false)} className="text-gray-600 text-xl">
                    <img src="into2.png" alt="close" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {sortedRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}

        <button className="mt-5 md:mt-10 px-4 py-2 bg-[#1677BD] text-white rounded-full w-full md:w-auto mb-5 md:mb-20">
          Show More
        </button>
      </div>

      <div className="w-full md:w-1/2 h-auto">
        <img src="map.png" alt="map" />
      </div>
    </div>
  );
};

export default RestaurantList;

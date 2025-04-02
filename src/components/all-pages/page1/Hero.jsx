import { useState, useEffect } from "react";

const restaurants = [
  [
    {
      name: "Bottega",
      images: ["img1.png", "img4.png", "img3.png", "img2.png"],
      rating: "5.0",
      reviews: 876,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img2.png", "img3.png", "img4.png", "img1.png"],
      rating: "5.0",
      reviews: 876,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img3.png", "img4.png", "img3.png", "img1.png"],
      rating: "5.0",
      reviews: 876,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img4.png", "img1.png", "img2.png", "img3.png"],
      rating: "5.0",
      reviews: 876,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    }
  ],
  [
    {
      name: "Bottega",
      images: ["img4.png", "img1.png", "img2.png", "img3.png"],
      rating: "5.0",
      reviews: 654,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img3.png", "img4.png", "img1.png", "img2.png"],
      rating: "5.0",
      reviews: 732,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img2.png", "img3.png", "img4.png", "img1.png"],
      rating: "5.0",
      reviews: 590,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      name: "Bottega",
      images: ["img1.png", "img4.png", "img3.png", "img2.png"],
      rating: "5.0",
      reviews: 821,
      description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    }
  ]
];

export default function HeroArea() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + restaurants.length) % restaurants.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % restaurants.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % restaurants[currentIndex][0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="px-5 lg:px-10 py-5 lg:py-10">
      <div className="bg-blue-600 p-6 rounded-lg text-white relative w-full mx-auto">
      <h2 className="lg:text-3xl text-2xl font-semibold mb-5 text-start px-2 md:px-6">Find the best restaurant ratings below</h2>
      <div className="relative flex items-center justify-center w-full">
        <button
          className="absolute left-[-22px] md:left-[-8px] top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevSlide}
        >
          <img className="size-15" src="left.png" alt="" />
        </button>
        <div className="w-full px-2 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {restaurants[currentIndex].map((restaurant, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden relative">
                <div className="relative">
                  <img src={restaurant.images[imageIndex]} alt={restaurant.name} className="w-full h-40 object-cover transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {restaurant.images.map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === imageIndex ? "bg-white" : "bg-gray-400"}`}
                        onClick={() => setImageIndex(i)}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-[#232323] font-bold">{restaurant.name}</h3>
                  <p className="text-sm text-[#8F8F8F]">{restaurant.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-2 font-medium">{restaurant.rating}</span>
                    <span className="ml-2 text-[#8F8F8F] text-sm">({restaurant.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-[-22px] md:right-[-8px] top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <img className="size-15" src="right.png" alt="" />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {restaurants.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

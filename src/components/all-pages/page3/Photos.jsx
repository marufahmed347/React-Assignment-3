import React, { useState } from 'react';

const images = [
  'pic1.png',
  'pic2.png',
  'pic4.png',
  'pic3.png',
  'pic5.png',
  'pic1.png',
  'pic2.png',
];

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index = 0) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 relative">
      <div className="mb-6 max-w-[510px]">
        <h2 className="text-2xl font-bold text-gray-800">
          Discover our magnificent place in photos
        </h2>
        <p className="text-sm text-gray-600 mt-1">
        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={images[0]}
            alt="Main Area"
            className="w-full h-full object-cover rounded-l-2xl"
          />
          <button
            onClick={() => openModal(0)}
            className="absolute bottom-4 left-4 flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 text-sm shadow-md"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            View all photos ({images.length})
          </button>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-4 lg:mt-0">
          {images.slice(1, 5).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Photo ${i + 2}`}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openModal(i + 1)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center px-5 bg-black/50 ">
          <div className="bg-white p-5 max-w-4xl w-full shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3"
            >
              <img src="into3.png" className='w-8 h-8 md:w-10 md:h-10 '  alt="" />
            </button>

            <div className="relative">
              <img
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                className="w-full max-h-[60vh] object-cover"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
                <button
                  onClick={prevImage}
                  className=""
                >
                  <img src="left.png" className='w-9 h-9' alt="" />
                </button>

                <div className="flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  className=""
                >
                  <img src="right.png" className='w-9 h-9' alt="" />
                </button>
              </div>

              <div className="absolute top-3 left-3 bg-white text-xs font-medium px-2 py-1 rounded-full shadow">
                {currentImage + 1}/{images.length}
              </div>
            </div>

            <div className="flex overflow-x-auto mt-5 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`h-20 w-28 object-cover rounded-lg cursor-pointer ${
                    index === currentImage ? 'ring-2 ring-black' : ''
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;

import React, { useState } from "react";

const reviews = [
  {
    name: "Wei Jie",
    location: "Singapore, Little India",
    date: "29/11/2023",
    rating: 4,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Mei Ling",
    location: "Singapore, Orchard boulevard",
    date: "09/05/2023",
    rating: 5,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Wei Xiong",
    location: "Singapore, Takashimaya",
    date: "01/05/2023",
    rating: 5,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Ming Wei",
    location: "Singapore, Little india",
    date: "31/04/2023",
    rating: 4,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Xin Yi",
    location: "Singapore, Zen rooms",
    date: "29/11/2023",
    rating: 3,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Zhi Hao",
    location: "Singapore, Boon Keng",
    date: "09/05/2023",
    rating: 2,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Li Hua",
    location: "Singapore, DLLM loklok",
    date: "01/05/2023",
    rating: 1,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Si Ying",
    location: "Singapore, Bedemeer",
    date: "31/04/2023",
    rating: 5,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
  {
    name: "Wei Ting",
    location: "Singapore, Toa Payoh",
    date: "31/04/2023",
    rating: 2,
    review:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
  },
];

const ReviewCard = ({ name, location, date, rating, review }) => (
  <div className="bg-gray-100 rounded-xl p-4 flex gap-4 items-start shadow-sm w-full">
    <div className="bg-white p-3 rounded-full mt-1">
      <img src="user.png" alt="" />
    </div>
    <div className="w-full">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{location}</p>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-4 h-4 ${i < rating ? '' : 'text-gray-300'}`}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 0 0-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 0 0-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 0 0-.364-1.118L2.075 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 0 0 .95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <p className="text-sm text-gray-700 max-w-[511px] leading-relaxed">{review}</p>
    </div>
  </div>
);

const SortPopup = ({ onSelect, onClose }) => {
  return (
    <div className="absolute bg-white border border-[#E6E6E6] rounded-lg shadow-lg top-20 left-8 z-10">

      <div className="flex relative">

      <div className="p-4">
        <div className="cursor-pointer p-2" onClick={() => onSelect('all')}>All feedbacks</div>
        <div className="cursor-pointer p-2" onClick={() => onSelect('highest')}>Highest rated</div>
        <div className="cursor-pointer p-2" onClick={() => onSelect('lowest')}>Oldest rated</div>
      </div>

      <div className="px-2 pt-2">
      <button onClick={onClose} className="text-gray-600 text-2xl font-bold">
          <img src="into2.png" alt="" />
      </button>
      </div>
      
      </div>
    </div>
  );
};

const FilterPopup = ({ onSelect, onClose }) => {
  const handleSelect = (rating) => {
    onSelect(rating);
    onClose();
  };

  return (
    <div className="absolute bg-white border border-[#E6E6E6]  rounded-lg shadow-lg top-20 left-4 lg:-left-14 z-10">
      
      <div className="flex relative">

        <div className="space-y-2 p-4">
      <h4 className="font-bold text-lg text-center">filter by rating</h4>
        {[5, 4, 3, 2, 1].map((star) => (
          <div
            key={star}
            className="flex items-center cursor-pointer"
            onClick={() => handleSelect(star)}
          >
            <span className="text-lg font-semibold w-6">{star}</span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 mx-0.5 ${i < star ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 0 0-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 0 0-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 0 0-.364-1.118L2.075 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 0 0 .95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pl-5 pr-2 pt-2">
      <button onClick={onClose}>
          <img src="into2.png" alt="" />
        </button>
      </div>

      </div>

    </div>
  );
};

const Reviews = () => {
  const [filterRating, setFilterRating] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortType, setSortType] = useState('all');

  let filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  if (sortType === 'highest') {
    filteredReviews = [...filteredReviews].sort((a, b) => b.rating - a.rating);
  } else if (sortType === 'lowest') {
    filteredReviews = [...filteredReviews].sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="max-w-6xl mx-auto px-5 lg:pr-30 py-8 space-y-6 relative">
      <div className="flex justify-start mb-6">
        <div className="flex gap-2">
          <button
            className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
          </button>
          <button
            className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
            onClick={() => setShowSort(!showSort)}
          >
            Sort
          </button>
        </div>
      </div>
      {showFilter && (
        <FilterPopup onSelect={setFilterRating} onClose={() => setShowFilter(false)} />
      )}
      {showSort && (
        <SortPopup
          onSelect={(type) => {
            setSortType(type);
            setShowSort(false);
          }}
          onClose={() => setShowSort(false)}
        />
      )}
      <div className="space-y-4">
        {filteredReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <div className="lg:pb-10 px-5 lg:px-10 pb-5 lg:pt-5 pt-3">
      <button  className="px-8 py-2 bg-[#1677BD] text-white rounded-full cursor-pointer block mx-auto">Show more reviews</button>
    </div>
    </div>
  );
};

export default Reviews;

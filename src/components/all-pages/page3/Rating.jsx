import React from "react";

const ratings = [
  { label: "5 stars", value: 100 },
  { label: "0 star", value: 60 },
  { label: "0 star", value: 40 },
  { label: "0 star", value: 20 },
  { label: "0 star", value: 10 },
];

const totalReviews = 834;

export default function OverallRating() {
  return (
    <div className="max-w-6xl w-full mx-auto bg-white p-4 md:p-6 rounded-md">
      <div className="border-t mb-6 lg:mb-10 text-[#DCDCDC]" />
      <div className="flex flex-col md:flex-row gap-5 md:items-start">
        
        <div className="md:w-[300px]">
          <div className="flex items-center my-auto gap-5 mb-5">
            <div className="text-yellow-500">
              <img src="starb.png" alt="" />
            </div>
            <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Overall rating</h2>
            <p className="text-lg text-gray-500">{totalReviews} Reviews</p>
            </div>
          </div>
          

          <div className="flex lg:justify-center">
            <img src="star.png" alt="" />
          </div>
        </div>

        <div className="md:w-[549px] w-full space-y-2">
          {ratings.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-14 text-sm text-gray-700">{item.label}</div>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-500 h-full rounded"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t mt-6 lg:mt-10 text-[#DCDCDC]" />
    </div>
  );
}

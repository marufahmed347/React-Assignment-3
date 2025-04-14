import React from "react";

const FeedBack = () => {
  return (
    <div className="bg-[#F2F2F2] md:my-10 my-5 px-4 py-6 flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-5xl w-full">
        <div className="flex-1 p-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </h2>
          <p className="text-[#5E5E5E] mb-12">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>
          <button className="bg-[#1E1E1E] text-white px-3 md:px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
            Explore MyFeedback business
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="restaurantsimg.png"
            alt="Business Setup"
            className="rounded-lg w-full max-w-md md:max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

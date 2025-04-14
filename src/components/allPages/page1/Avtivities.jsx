import React from "react";

export default function Avtivities() {

    const activities = [
      {
        name: "Leslie Sakho",
        location: "Canada, Toronto",
        date: "09/11/2023",
        para1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        para2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        images: ["a1.png", "a2.png", "a3.png"],
      },
      {
        name: "Chris Macari",
        location: "Singapore",
        date: "14/09/2023",
        para1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        para2:"The lorem ipsum is, in printing.",
        images: ["a4.png", "a5.png", "a6.png"],
      },
      {
        name: "Jojo Alba",
        location: "Kuala Lumpur",
        date: "28/09/2023",
        para1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        para2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        images: ["a7.png", "a8.png", "a9.png"],
      },
    ];

    return (
      <>
      <div className="pl-5 lg:pl-10 lg:py-10 py-5">
        <h2 className="text-2xl font-bold mb-6 text-[#1E1E1E]">Recents avtivities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="p-4 rounded-xl bg-[#F8F8F8] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-100 rounded-full">
                    <img src="user.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#232323]">{activity.name}</h3>
                    <p className="text-[#8A8A8A] text-sm">{activity.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                  <span className="text-[#343434] text-sm">{activity.date}</span>
                </div>
                <p className="text-[#5E5E5E] text-sm mb-3">{activity.para1}</p>
                <p className="text-[#5E5E5E] text-sm mb-5">{activity.para2}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-2 overflow-hidden">
                  {activity.images.map((img, i) => (
                    <img key={i} src={img} alt="activity" className="w-22 md:w-24 lg:w-30" />
                  ))}
                </div>
              </div>
              <a href="#" className="text-[#232323] font-medium mt-2 inline-block underline">Discover</a>
              {index === activities.length - 1 && (
                <div className="absolute top-1/2 right-[5px] transform -translate-y-1/2 text-gray-500 cursor-pointer text-2xl">
                  <img className="w-16 h-16" src="right.png" alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="my-5 text-[#DCDCDC]" />
      </>
    );
  }
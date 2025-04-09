import React from "react";

const ContactCard = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-between items-start px-5 py-5 md:py-10 max-w-6xl w-full mx-auto gap-10">
      
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl md:text-3xl pb-4 font-semibold text-[#1E1E1E]">More informations</h2>

        <div className="flex items-center gap-4">
          <img src="r.png" alt="" />
          <a href="#" className="underline text-lg text-[#232323] font-medium">See the menu</a>
        </div>

        <div className="flex items-center gap-4">
          <img src="p.png" alt="" />
          <span className="text-lg text-[#232323]">+84 87 37 29 01</span>
        </div>

        <div className="flex items-center gap-4">
          <img src="l.png" alt="" />
          <span className="text-lg text-[#232323]">Singapore, Bishan</span>
        </div>

        <div className="flex items-center gap-4">
          <img src="t.png" alt="" />
          <span className="text-lg text-[#232323]">7j/7, 08:00 - 22:00</span>
        </div>

        <div className="flex items-center gap-4">
            <img src="f.png" alt="" />
            <p className="text-lg underline text-[#232323]">www.bellaitalia.com</p>
          
        </div>

        <div className="flex gap-5 pt-2">
          <img src="fb.png" alt="" />
          <img src="i.png" alt="" />
          <img src="tik.png" alt="" />
          <img src="w.png" alt="" />
        </div>
      </div>

      <div className="flex-1 w-full">
        <img src="map2.png" alt="" />
      </div>
    </div>
    </>
  );
};

export default ContactCard;

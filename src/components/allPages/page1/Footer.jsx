import React, { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("Singapore");

  return (
    <footer className="pb-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm px-5 mx-auto">
        <div className="mx-auto text-center md:text-start">
          <h3 className="font-extrabold text-[#1E1E1E] text-[16px] md:text-[20px]">About</h3>
          <ul className="mt-2 space-y-1 text-[#5E5E5E]">
            <li><a href="#" className="hover:underline">About MyFeedback</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>
        <div className="mx-auto text-center md:text-start">
          <h3 className="font-extrabold text-[#1E1E1E] text-[16px] md:text-[20px]">MyFeedback</h3>
          <ul className="mt-2 space-y-1 text-[#5E5E5E]">
            <li><a href="#" className="hover:underline">MyFeedback for business</a></li>
            <li><a href="#" className="hover:underline">Collections</a></li>
            <li><a href="#" className="hover:underline">Talk</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">MyFeedback blog</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
          </ul>
        </div>
        <div className="space-y-5 mx-auto text-center md:text-start">
          <div>
          <h3 className="font-extrabold text-[#1E1E1E] text-[16px] md:text-[20px]">Languages</h3>
          <select 
            className="mt-1 p-1 text-[#5E5E5E]" 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          </div>

          <div>
          <h3 className="font-extrabold text-[#1E1E1E] text-[16px] md:text-[20px]">Countries</h3>
          <select 
            className="mt-1 p-1 text-[#5E5E5E]" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Singapore</option>
            <option>USA</option>
            <option>India</option>
          </select>
          </div>
        </div>
        
      </div>
      <div className="mt-10 text-sm text-[#1E1E1E] font-semibold text-center">
        Copyright ©Septembre{new Date().getFullYear()} myfeedback, designed by scott
      </div>
    </footer>
  );
};

export default Footer;

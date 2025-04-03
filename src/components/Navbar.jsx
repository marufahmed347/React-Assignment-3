import React, { useEffect, useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    if (isExpanded) {
      document.body.style.backgroundColor = "rgba(16, 16, 16, 0.12)";
    } else {
      document.body.style.backgroundColor = "#ffffff"; 
    }
    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [isExpanded]);


  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const staticSuggestions = [
    { name: "Kakune restau", location: "Paris" },
    { name: "Kakunexy delux", location: "Rome" },
    { name: "Kakune", location: "New York" },
    { name: "Kikune", location: "Dakar Plateau"}
  ];

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setSuggestions(
        staticSuggestions.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <nav className="mt-2 lg:mt-5">
        <div className="px-4 lg:px-10">
          <div className="flex justify-between items-center py-4 gap-4 lg:gap-0">
            {/* Logo */}
            <div>
              <img className="w-full h-auto cursor-pointer" src="/logo.png" alt="" />
            </div>

            {/* middle */}

            <div className={`flex items-center bg-white rounded-full w-full max-w-lg border border-[#ADADAD] hover:border-[#1677BD] relative transition-all duration-300 ${isExpanded ? 'w-full max-w-2xl' : 'w-full max-w-lg'}`}
            onClick={() => setIsExpanded(true)}
            >
              <input
                type="text"
                placeholder="restaurant, hotel, service...."
                className="w-full px-2 lg:px-4 py-1 lg:py-2 outline-none text-gray-700 rounded-full"
                value={query}
                onChange={handleQueryChange}
                onFocus={() => setShowSuggestions(true)}
              />

            {showSuggestions && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50 max-h-40 overflow-auto">
                {suggestions.length > 0 ? (
                  suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 border-b-2 border-b-[#969696] last:border-b-0"
                      onClick={() => {
                        setQuery(item.name);
                        setLocation(item.location);
                        setShowSuggestions(false);
                      }}
                    >
                      <img src="c.png" alt="Icon" className="w-10 h-10 mr-3" /> 
                      {item.name}, {item.location}...
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400">No suggestions</li>
                )}
              </ul>
            )}
            

              <span className="border-l border-gray-300 h-6 mx-2"></span>
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  placeholder="Singapour..."
                  className="w-full px-2 lg:px-4 py-1 lg:py-2 pr-12 outline-none text-gray-700 rounded-full"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="absolute right-1 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                  setQuery("");
                  setLocation("");
                  setShowSuggestions(false);
                }}
                >
                  {isExpanded ? <img className="size-6 lg:size-8" src="into.png" alt="" /> : <img className="size-6 lg:size-8" src="search.png" alt="" />}
                </button>
              </div>
            </div>

            {/* last */}

            <div className="hidden lg:flex gap-4">
              <img className="size-6 my-auto cursor-pointer" src="o.png" alt="" />
              <button className="cursor-pointer bg-[#1E1E1E] text-[15px] font-regular text-white px-4 py-2 rounded-full">
                MyFeedback for business
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

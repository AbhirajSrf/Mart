import { CiSearch } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef(null);
  const popupRef = useRef(null); // New ref for popup

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the wrapper and the popup
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setShowPopup(false);
      }
    };

    const handleEscKey = (event) => {
      console.log("Key pressed:", event.key); // Debug: Check if Escape is detected
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
      {/* Search Input */}
      <div
        className="relative p-4 w-full max-w-md flex items-center"
        ref={wrapperRef}
      >
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowPopup(true)}
            placeholder="Search"
            className="w-full bg-gray-200 rounded p-2 pr-10 focus:outline-none"
          />
          <CiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPopup(true)}
          />
        </div>
      </div>

      {/* Centered Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="bg-white w-[500px] h-100 rounded-xl shadow-lg border border-gray-300"
            ref={popupRef} // Attach the popup ref here
          >
            <div className="p-6 text-gray-700 text-center text-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by keyword"
                  className="border border-gray-200 p-4 w-full rounded-xl focus:border-blue-500"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded"
                  onClick={() => setShowPopup(false)}
                >
                  Esc
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

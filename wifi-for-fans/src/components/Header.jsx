import { IoInformationSharp } from "react-icons/io5";
import React, { useState } from "react";

const Header = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  return (
    <div className="relative bg-slate-200">
      <header className="bg-black p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl">Wiki for Fans</h1>
          <button
            onClick={toggleInfo}
            className="text-white text-xl focus:outline-none"
            aria-label="Info"
          >
            <IoInformationSharp />
          </button>
        </div>
      </header>

      {/* Modal for Information */}
      {isInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">About Wiki for Fans</h2>
            <p className="text-gray-600">
              Wiki for Fans is a platform dedicated to providing detailed
              information about beloved characters in the Spider-Man universe.
              Click on a card to explore more about each character!
            </p>
            <button
              onClick={toggleInfo}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
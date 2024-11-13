import { useState } from "react";
import { IoInformationSharp } from "react-icons/io5";

const Header = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfoModal = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  return (
    <div className="flex h-full flex-col overflow-y-hidden bg-slate-200">
      <header className="bg-black p-4 text-white relative">
        <h1 className="text-2xl flex items-center">
          <a href="/" className="flex items-center gap-2">
            Wiki for Fans
          </a>
          <button onClick={toggleInfoModal} className="ml-2">
            <IoInformationSharp className="text-3xl hover:text-gray-300" />
          </button>
        </h1>

        {isInfoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4">About Wiki for Fans</h2>
              <p className="text-gray-700">
                Wiki for Fans is a dedicated platform for fans to explore and learn
                about their favorite characters from various universes. Each character
                has detailed information, enemies, and unique quotes. Dive in and discover
                fascinating facts about your favorite heroes and villains!
              </p>
              <button
                onClick={toggleInfoModal}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
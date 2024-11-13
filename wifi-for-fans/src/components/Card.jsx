import React, { useState } from 'react';
import spidermanImage from '../img/spiderman.jpg';
import venomImage from '../img/venom.jpg';
import greenGoblinImage from '../img/greengoblin.jpg';
import gwenImage from '../img/gwen.jpg';
import maryJaneImage from '../img/maryjane.jpg';
import drOctopusImage from '../img/droctopus.jpg';

const Card = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={toggleModal}
      >
        <img
          className="w-full h-auto object-cover"
          src={character.image}
          alt={character.name}
          style={{ aspectRatio: '1 / 1' }}
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">{character.name}</h1>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{character.name}</h2>
            <p className="text-gray-600">Age: {character.age}</p>
            <p className="text-gray-600">Identity: {character.identity}</p>
            <p className="italic text-gray-700 mt-2">"{character.quote}"</p>
            <div className="mt-2">
              <p className="text-gray-800 font-semibold">Enemies:</p>
              <ul className="list-disc list-inside text-gray-600">
                {character.enemies.map((enemy, index) => (
                  <li key={index}>{enemy}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={toggleModal}
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

// Characters with quotes
const characters = [
  {
    name: "Spiderman",
    age: 25,
    enemies: ["Green Goblin", "Doctor Octopus", "Venom"],
    identity: "Peter Parker",
    image: spidermanImage,
    quote: "With great power comes great responsibility.",
  },
  {
    name: "Venom",
    age: 30,
    enemies: ["Spiderman"],
    identity: "Eddie Brock",
    image: venomImage,
    quote: "We are Venom.",
  },
  {
    name: "Green Goblin",
    age: 45,
    enemies: ["Spiderman"],
    identity: "Norman Osborn",
    image: greenGoblinImage,
    quote: "Embrace the chaos!",
  },
  {
    name: "Gwen",
    age: 19,
    enemies: ["Kingpin"],
    identity: "Gwen Stacy",
    image: gwenImage,
    quote: "You only live once, right?",
  },
  {
    name: "Mary Jane",
    age: 20,
    enemies: [],
    identity: "Mary Jane Watson",
    quote: "Go get 'em, Tiger!",
    image: maryJaneImage,
  },
  {
    name: "Dr. Octopus",
    age: 50,
    enemies: ["Spiderman"],
    identity: "Otto Octavius",
    image: drOctopusImage,
    quote: "Intelligence is a privilege, and it must be used for the good of mankind.",
  },
];

const App = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </div>
  );
};

export default App;
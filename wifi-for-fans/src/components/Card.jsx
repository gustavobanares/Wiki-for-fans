import React, { useState } from 'react';
import spidermanImage from '../img/spiderman.jpg';

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const character = {
    name: "Spiderman",
    age: 25,
    enemies: ["Green Goblin", "Doctor Octopus", "Venom"],
    identity: "Peter Parker",
    image: spidermanImage,
  };

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-sm mx-auto">
      {/* Card com nome e imagem */}
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={toggleModal}
      >
        <img
          className="w-full h-auto object-cover"
          src={character.image}
          alt={character.name}
          style={{ aspectRatio: '1 / 1' }} // Garantindo que a imagem fique quadrada
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">{character.name}</h1>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{character.name}</h2>
            <p className="text-gray-600">Idade: {character.age}</p>
            <p className="text-gray-600">Identidade: {character.identity}</p>
            <div className="mt-2">
              <p className="text-gray-800 font-semibold">Inimigos:</p>
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
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
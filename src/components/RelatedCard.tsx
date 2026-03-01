import React from 'react';
import type { CardItem } from '../config/type';
import image1 from '../assets/Image (Mewtwo EX).png'
import image2 from '../assets/Image (Pikachu VMAX).png'
import image3 from '../assets/Image (Umbreon VMAX).png'
import imagedetais from '../assets/Image (Charizard VMAX).png';


const cardData: CardItem[] = [
  {
    id: 1,
    name: "Pikachu VMAX",
    price: 89.99,
    imageUrl: image1,
  },
  {
    id: 2,
    name: "Mewtwo EX",
    price: 65.00,
    imageUrl: image2,
  },
  {
    id: 3,
    name: "Umbreon VMAX",
    price: 285.00,
    imageUrl: image3,
  },
  {
    id: 4,
    name: "Rayquaza V",
    price: 45.00,
    imageUrl: imagedetais,
  },
];

const RelatedCard: React.FC = () => {
  return (
    <section className=" sm:max-w-294 px-2 mx-auto">
      <h2 className="text-2xl sm:text-3xl text-gray-800 mb-6">Related Cards</h2>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className="group cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
          >
   
            <div className="aspect-4/3 overflow-hidden bg-gray-100">
              <img
                src={card.imageUrl}
                alt={card.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

 
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {card.name}
              </h3>
              <p className="mt-1 text-blue-600 font-bold">
                ${card.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedCard;
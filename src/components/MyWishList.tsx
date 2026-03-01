import { Heart } from 'lucide-react';
import image from '../assets/Image (Scarlet & Violet).png';
import { toastMessag } from '../config/type';

const arrayOfProduct = [
  {
    image: image,
    category: 'Booster Packs',
    title: 'Scarlet & Violet',
    price: 4.99,
    stock: "In Stock"
  },
  {
    image: image,
    category: 'Booster Packs',
    title: 'Scarlet & Violet',
    price: 4.99,
    stock: "In Stock"
  },
  {
    image: image,
    category: 'Booster Packs',
    title: 'Scarlet & Violet',
    price: 4.99,
    stock: "In Stock"
  },
  {
    image: image,
    category: 'Booster Packs',
    title: 'Scarlet & Violet',
    price: 4.99,
    stock: "In Stock"
  },
];

export default function MyWishList() {
  return (
    <div className="">
      <h2 className="text-xl    text-[#1e293b] mb-6">My Wishlist</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {arrayOfProduct.map((item, k) => (
          <div 
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-md" 
            key={k}
          >
            {/* Image Container */}
            <div className="relative p-2">
              <div className="overflow-hidden rounded-xl bg-gray-100 aspect-4/3">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>
              
              {/* Stock Badge */}
              {item.stock && (
                <div className="absolute top-4 right-4 bg-[#22c55e] text-white text-[10px]    px-2.5 py-1 rounded-md shadow-sm">
                  {item.stock}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="px-4 pb-4 pt-2 flex flex-col grow">
              <span className="text-[#8e9aaf] text-[12px]       ">
                {item.category}
              </span>
              <h3 className="text-[#1a1a1a]    text-[16px] mt-0.5">
                {item.title}
              </h3>
              <p className="text-[#3062e0] font-extrabold text-[16px] mt-2 mb-4">
                ${item.price.toFixed(2)}
              </p>

              {/* Action Row */}
              <div className="flex gap-2 mt-auto">
                <button onClick={toastMessag} className="grow bg-[#3062e0] hover:bg-[#254dbd] text-white    py-2.5 rounded-lg text-xs transition-colors">
                  Add to Cart
                </button>
                <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-red-50 group transition-all">
                  <Heart size={18} className="text-[#ef4444] fill-[#ef4444]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
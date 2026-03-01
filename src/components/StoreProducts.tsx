import React from 'react';
import { Link, useLocation } from 'react-router';
import imagedetais from '../assets/Image (Umbreon VMAX).png';
import { toastMessag, type ProductSet } from '../config/type';
import pk1 from '../assets/pk-1.jfif'
import pk2 from '../assets/pk-2.jfif'
import pk3 from '../assets/pk-3.jfif'
import pk4 from '../assets/pk-4.jfif'
import pk5 from '../assets/pk-6.jfif'
import pk6 from '../assets/pk-7.jfif'
// import pk7 from '../assets/pk-6.jfif'


const productData: ProductSet[] = [
  {
    id: 1,
    title: "Scarlet & Violet",
    subtitle: "Main Expansion",
    cardsCount: 198,
    releaseDate: "Mar 2023",
    trend: "+12.4%",
    imageUrl: pk1,
  },
  {
    id: 2,
    title: "Crown Zenith",
    subtitle: "Special Set",
    cardsCount: 159,
    releaseDate: "Jan 2023",
    trend: "+8.2%",
    imageUrl: pk2,
  },
  {
    id: 3,
    title: "Silver Tempest",
    subtitle: "Sword & Shield",
    cardsCount: 195,
    releaseDate: "Nov 2022",
    trend: "+5.1%",
    imageUrl: pk3,
  },
  {
    id: 4,
    title: "Lost Origin",
    subtitle: "Origin Forme",
    cardsCount: 196,
    releaseDate: "Sep 2022",
    trend: "+15.7%",
    imageUrl: pk4,
  },
  {
    id: 5,
    title: "Astral Radiance",
    subtitle: "Regional Variant",
    cardsCount: 189,
    releaseDate: "May 2022",
    trend: "+10.1%",
    imageUrl: pk4
  },
  {
    id: 5,
    title: "Astral Radiance",
    subtitle: "Regional Variant",
    cardsCount: 189,
    releaseDate: "May 2022",
    trend: "+10.1%",
    imageUrl: imagedetais
  },
   {
    id: 6,
    title: "Scarlet & Violet",
    subtitle: "Main Expansion",
    cardsCount: 198,
    releaseDate: "Mar 2023",
    trend: "+12.4%",
    imageUrl: pk5,
  },
   {
    id: 7,
    title: "Scarlet & Violet",
    subtitle: "Main Expansion",
    cardsCount: 198,
    releaseDate: "Mar 2023",
    trend: "+12.4%",
    imageUrl: pk6,
  },
];


const StoreProducts: React.FC = () => {

  const loc = useLocation()
  console.log(loc.pathname, "locations")



  return (
    <section className="sm:max-w-294 px-2 mx-auto  ">
      <div className="">


        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Conditional Rendering logic */}
          {(loc.pathname === "/AllSetscards"
            ? productData
            : productData.slice(0, 8)
          ).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Card with Overlay */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-white/20 backdrop-blur-md border border-white/30">
                      {/* Choto icon image-ti product image er sathe dynamic kora hoyeche */}
                      <img className='w-full h-full p-2 object-contain' src={product.imageUrl} alt="" />
                    </div>

                    <div className='flex flex-col gap-y-1'>
                      <h3 className="text-white font-bold text-[18px] leading-tight">{product.title}</h3>
                      <p className="text-[#93C5FD] text-sm font-medium">{product.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div>
                  <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">Cards</p>
                  <p className="text-gray-800 font-semibold text-[16px]">{product.cardsCount}</p>
                </div>
                <div className="border-x border-gray-100 px-1">
                  <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">Released</p>
                  <p className="text-gray-800 font-semibold text-[16px] whitespace-nowrap">{product.releaseDate}</p>
                </div>
                <div>
                  <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">Trend</p>
                  <p className="text-green-400 font-semibold text-[16px]">{product.trend}</p>
                </div>
              </div>

              {/* Action Button */}
              <Link to={'/cardSetExplorer'}>
                <button onClick={toastMessag} className="py-2.75 cursor-pointer w-full border-2 border-[#1E40AF] text-[#1E40AF] font-bold rounded-xl hover:bg-blue-50 transition-colors duration-200">
                  View Set Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
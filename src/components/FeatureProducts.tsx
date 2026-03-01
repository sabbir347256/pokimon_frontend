

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import image1 from '../assets/pk-11.jfif'
import image2 from '../assets/pk-12.jfif'
import image4 from '../assets/pk-10.jfif'
import image3 from '../assets/pk-16.jfif'
import image5 from '../assets/pk-3.jfif'
import image6 from '../assets/pk-15.jfif'
import image7 from '../assets/card2.png'
import image8 from '../assets/card3.jpg'
import image9 from '../assets/card5.png'
import image10 from '../assets/card6.webp'




const buttonArray = ["All", "Newest", "Best Sellers", "Price"]

const productList = [
    {
        title: "Scarlet & Violet Booster Box",
        image: image1,
        rating: 4.5,
        price: 199.55,
        status: "Best Seller"
    }, {
        title: "Crown Zenith Elite Trainer Box",
        image: image2,
        rating: 4,
        price: 200.00,
        status: "New"
    }, {
        title: "Obsidian Flames Booster Pack",
        image: image3,
        rating: 3,
        price: 150.00,
        status: ""
    }, {
        title: "Charizard Collector Tin",
        image: image4,
        rating: 4,
        price: 140.00,
        status: "New"
    }, {
        title: "Paldean Fates Booster Box",
        image: image5,
        price: 80.00,
        rating: 4,
        status: "New"
    }
    , {
        title: "Paldean Fates Booster Box",
        image: image6,
        price: 80.00,
        status: "",
        rating: 4,
    }
    , {
        title: "Paldean Fates Booster Box",
        image: image7,
        price: 80.00,
        status: "",
        rating: 4,
    }
    , {
        title: "Paldean Fates Booster Box",
        image: image8,
        price: 80.00,
        status: "",
        rating: 4,
    }
    , {
        title: "Paldean Fates Booster Box",
        image: image9,
        price: 80.00,
        status: "",
        rating: 4,
    }
    , {
        title: "Paldean Fates Booster Box",
        image: image10,
        price: 80.00,
        status: "",
        rating: 4,
    }

]



export default function FeatureProducts() {

    const [btnType, setBtnType] = useState<string>("All")



    return (
        <div className='sm:max-w-294 px-2 mx-auto'>


            <div className='flex flex-col sm:flex-row justify-between my-7'>
                <h1 className='text-[#111827] text-3xl font-bold'>All Cards</h1>

                <div className='flex flex-wrap  gap-1'>
                    {
                        buttonArray?.map((item, key) => <button onClick={() => setBtnType(item)} className={`px-3.5 cursor-pointer ${btnType == item ? "bg-[#155DFC]" : "bg-[#111827]"} text-sm rounded-md  text-white py-1.5 `} key={key}>{item}</button>)
                    }
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {productList?.map((item, key) => (
                    <Link key={key} to={`/cardDetails/:id`} className="group block h-full">
                        <div
                            className="
      bg-white 
      rounded-[20px] 
      shadow-sm
      hover:shadow-xl 
      p-4
      flex flex-col 
      h-full
      transition-all 
      duration-500 
      ease-in-out 
      transform 
      hover:-translate-y-2 
      hover:scale-[1.02]
      border border-gray-50
    "
                        >
                            {/* Image Container - Fixed Aspect Ratio */}
                            <div className="w-full aspect-4/5 bg-[#F1F5F9] rounded-[15px] overflow-hidden flex items-center justify-center relative shrink-0">
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="
          w-full 
          h-full 
          object-contain 
          p-4
          transition-transform 
          duration-700 
          group-hover:scale-110
        "
                                />
                            </div>

                            {/* Text Content - Flex Grow ensures even height */}
                            <div className="mt-5 pb-2 flex flex-col grow">
                                <h1 className="text-[16px] text-[#111827] font-bold leading-snug line-clamp-2 min-h-11">
                                    {item?.title}
                                </h1>

                                <p className="text-[#6B7280] text-[14px] mt-auto font-normal pt-2">
                                    {"ME: Ascended Heroes"}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

            <div className="flex items-center my-5 justify-center">

                <Link to={'/all-cards'}>
                    <button className="flex cursor-pointer text-[18px] items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        View All
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>



        </div>
    )
}

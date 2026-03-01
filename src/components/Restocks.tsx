import { Box, ShoppingCart } from "lucide-react";
import image1 from '../assets/CategoryImages/Container.png';
import image2 from '../assets/CategoryImages/ImageWithFallback (1).png';
import image3 from '../assets/CategoryImages/ImageWithFallback (2).png';
import image4 from '../assets/CategoryImages/ImageWithFallback (4).png';
import { toastMessag } from "../config/type";


const productList = [
    {
        title: "Scarlet & Violet Booster Box",
        image: image1,
        rating: 4.5,
        price: 199.55,
        status: "Best Seller",
        time: "1 days left"
    }, {
        title: "Crown Zenith Elite Trainer Box",
        image: image2,
        rating: 4,
        price: 200.00,
        status: "New",
        time: "6 days left"
    }, {
        title: "Obsidian Flames Booster Pack",
        image: image3,
        rating: 3,
        price: 150.00,
        status: "",
        time: "2 days left"
    }, {
        title: "Charizard Collector Tin",
        image: image4,
        rating: 4,
        price: 140.00,
        status: "New",
        time: "2 days left"
    }

]


export default function Restocks() {

    return (
        <div className="sm:max-w-294 px-2 flex flex-col gap-y-3 mx-auto">


            <div className=" flex flex-col ">

                <div className="flex gap-x-3 items-center">
                    <Box size={28} className="text-[#2B7FFF]" />
                    <h1 className=" text-3xl      font-bold ">Store Products</h1>
                </div>

                <h1>Back in stock – grab them while you can!</h1>

            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {productList?.map((item, key) => (
                    <div
                        key={key}
                        className="group h-105 bg-[#F8FAFC] rounded-lg shadow-lg overflow-hidden flex flex-col"
                    >

                        <div className="h-2/3 relative overflow-hidden">
                            <img
                                src={item?.image}
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {
                                item?.status && <span className=' absolute left-2 top-2 rounded-l-full rounded-r-full text-[12px] text-white bg-green-500  px-3 py-1'> {item?.status} </span>
                            }
                        </div>


                        <div className="h-1/3 p-4 flex space-y-3 flex-col justify-between">
                            <div>
                                <h1 className="text-lg text-[#111827] font-semibold">
                                    {item?.title.slice(0, 23)}...
                                </h1>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-[20px]">
                                        ${item?.price.toFixed(2)}
                                    </h1>

                                    <h1 className="text-[14px]">
                                        {item?.time}
                                    </h1>
                                </div>

                            </div>

                            <button onClick={toastMessag} className="bg-[#155DFC] text-[15px] flex items-center gap-x-2  cursor-pointer justify-center py-2 rounded-lg text-white">  <ShoppingCart size={18} className="text-white"></ShoppingCart>  Add to Cart </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

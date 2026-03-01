import { Award, Shield } from "lucide-react";
import type { TradingCardProps } from "../config/type";
import imageCard from '../assets/ImageWithFallback (5).png'
import { Link } from "react-router";


const cards: TradingCardProps[] = [
    {
        name: "Charizard VMAX",
        set: "Champion's Path",
        price: 499.99,
        grade: "PSA 10",
        imageUrl: imageCard // Example placeholder
    },
    {
        name: "Pikachu V",
        set: "Vivid Voltage",
        price: 299.99,
        grade: "PSA 10",
        imageUrl: imageCard
    },
    {
        name: "Umbreon VMAX",
        set: "Evolving Skies",
        price: 599.99,
        grade: "PSA 10",
        imageUrl: imageCard
    }
];


export default function GradedCard() {
    return (
        <div className="sm:max-w-294 px-2 mx-auto">




            <div className="flex gap-x-1 sm:gap-x-0 justify-between">
                <div className=" flex flex-col gap-y-2 sm:gap-y-0 w-2/3 sm:w-2/3 ">

                    <div className="flex gap-y-2 sm:gap-x-2 items-center">
                        <Award size={25} className="text-yellow-400" />
                        <h1 className="text-xl sm:text-3xl      font-bold ">Graded Cards</h1>
                    </div>

                    <h1 className="text-sm sm:text-[18px] ">Premium authenticated cards from PSA, CGC, and BGS</h1>

                </div>
                <div className="flex justify-center  items-center  ">
                    <button className="sm:px-6 px-2  py-1 sm:py-1.75 text-sm border rounded-xl text-[#111827] border-[#111827]">View All Graded</button>
                </div>
            </div>
            <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    cards?.map((item, k) => {
                 
                        return <div className="bg-[#F8FAFC] shadow-xl  hover:scale-95 transition duration-1000  rounded-md" key={k}>
                            <div className=" relative">
                                <img className="w-full rounded-t-md " src={item?.imageUrl} alt="" />

                                <span className=" absolute right-2 flex items-center gap-x-1 font-semibold px-2.5 py-1.5 bg-[#F0B100] rounded-l-full rounded-r-full text-sm top-2"> <Shield size={15} /> {item?.grade} </span>
                            </div>
                            <div className="p-6 space-y-3 text-[#111827]">
                                <h1 className="text-[20px] font-bold">{item?.name}</h1>
                                <h1 className="text-sm font-medium">{item?.set}</h1>
                                <div className="flex justify-between">
                                    <h1 className="text-2xl font-bold ">${item?.price.toFixed(2)}</h1>
                                    <div className="flex items-center">
                                        <Link to={'/cardDetails/:id'}>
                                        <button className="bg-[#F0B100] px-6 py-2.5 rounded-lg cursor-pointer">View Details</button></Link>
                                    </div>
                                </div>

                                <hr className="bg-[#1F2937] h-0.5" />
                                <div className="flex gap-x-2">
                                    <div className="flex items-center">
                                        <Shield size={19} className="text-yellow-400"></Shield>
                                    </div>
                                    <h1 className="text-sm">100% Authenticated & Guaranteed</h1>
                                </div>
                            </div>



                        </div>
                    })
                }
            </div>




        </div>
    )
}




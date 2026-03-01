import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import StoreProducts from "../components/StoreProducts";
import { toastMessag } from "../config/type";

const cardsButton = [
    'All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'
]

const AllSetsCards = () => {
    const [click, setClick] = useState<string>(cardsButton[0])



    return (
        <div className="min-h-screen sm:max-w-294 px-2 mx-auto py-10">

            <h1 className=" text-[32px] ">Pokémon Sets Products</h1>


            <div className="flex justify-between gap-2 my-5 flex-wrap">
                <div className="flex gap-3 flex-wrap">
                    {
                        cardsButton?.map((item, k) => {
                            return <button onClick={() => setClick(item)} className={`text-sm p-2 sm:p-3 cursor-pointer  rounded-md   ${click == item ? 'bg-[#155DFC] text-white' : 'bg-[#F3F4F6] text-[#364153]'} `} key={k}> {item} </button>
                        })
                    }
                </div>

                <div>
                    <button onClick={toastMessag} className="flex items-center gap-x-2 text-white bg-[#155DFC] rounded-md py-2 sm:py-3 px-2 sm:px-4"> <ShoppingCart></ShoppingCart> 0 items</button>
                </div>
            </div>


            <div className="flex flex-col gap-y-2 mt-5 sm:mt-10 mb-2 w-full sm:max-w-100">
                <h1 className="text-2xl font-bold sm:tex-[40px]">Explore Card Sets</h1>
                <h2 className="text-sm text-[#64748B]">Browse through the history of the Trading Card Game. From vintage base sets to the latest expansions.</h2>
            </div>
            <StoreProducts></StoreProducts>


            <div className="">
                <div className="flex flex-col gap-y-2 mt-5 sm:mt-10 mb-2 w-full ">
                    <h1 className="text-2xl font-bold sm:tex-[40px]">Latest Sets in Pokemon</h1>
                    <h2 className="text-sm text-[#64748B]">Browse through the history of the Trading Card Game. From vintage base sets to the latest expansions.</h2>
                </div>
                <div className="flex flex-col gap-y-4">
                    <StoreProducts></StoreProducts>
                    <StoreProducts></StoreProducts>
                </div>
            </div>



        </div>
    );
};

export default AllSetsCards;
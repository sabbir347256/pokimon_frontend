import { TrendingUp } from "lucide-react"
import cardSetImage from '../assets/img.max-h-full.png'
import CardSetExplorerfilter from "../components/CardSetExplorerfilter"

// const cardsButton = [
//     'All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'
// ]

const cardSetArray = [
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
    {
        image: cardSetImage,
        title: "Scarlet & Violet - 151",
        date: "205 Cards • Sep 22, 2023",
        bandge: "Hot",
        valueTitle: "Market Value",
        value: "842.04",
        parcentage: "+4.2%"
    },
]

export default function CardSetExplorer() {
    // const [click, setClick] = useState<string>(cardsButton[0])



    return (
        <div className="min-h-screen sm:max-w-294 px-2 mx-auto py-10">

{/* 
            <h1 className=" text-[32px] ">Card Set Explorer</h1>
            <h1 className="text-[16px] text-[#64748B]">Browse and track market trends across all trading card game expansions.</h1>

            <div className="flex justify-between gap-2 my-7 flex-wrap">
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
            </div> */}

            <CardSetExplorerfilter></CardSetExplorerfilter>



            <div className="flex my-5 sm:mt-10 ">
                <h1>32,125 Result in pokemon</h1>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    cardSetArray?.map((item, k) => {
                        return <div key={k}>
                            <div className="border flex  sm:flex-row gap-x-8 rounded-lg border-[#dadde0] py-2 px-2">

                                <div className="bg-[#E2E8F0]  w-[30%] sm:w-[20%]  p-2.25 border rounded-md border-[#e7e3e3]">
                                    <img className=" rounded-md  w-full h-full" src={item?.image} alt="" />
                                </div>

                                <div className="flex flex-col gap-y-2 sm:gap-y-4">
                                    <div className="flex sm:flex-row flex-col justify-between gap-x-5">

                                        <div className="">
                                            <h1 className=" text-sm sm:text-[18px] font-bold text-[#0F172A]">{item?.title}</h1>
                                            <h2 className="text-[#64748B] text-[12px]">{item.date}</h2>
                                        </div>

                                        <div className="">
                                            <span className="bg-[#DBEAFE] px-2 py-0.5 rounded-l-full rounded-r-full text-[#2563EB] font-semibold text-[10px]">{item?.bandge}</span>
                                        </div>

                                    </div>

                                    <div className="flex justify-between items-end">

                                        <div>
                                            <h1 className="text-[10px] text-[#94A3B8]">{item?.valueTitle}</h1>
                                            <h1 className="text-lg text-[#1E293B] font-bold">${item?.value}</h1>
                                        </div>
                                        <div className="text-[#10B981]  bg-[#ECFDF5] px-2 py-1 rounded-lg">

                                            <span className="text-sm font-bold flex gap-x-1 items-center"><TrendingUp size={15} />{item?.parcentage}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>




        </div>
    )
}

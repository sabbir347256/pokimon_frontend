import { Flame, Sparkles, Leaf, Droplets, Crown, Loader2 } from "lucide-react";
import image1 from "../assets/pk-20.jfif";
import image2 from "../assets/pk-21.jfif";
import image5 from "../assets/pk-22.jfif";
import image3 from "../assets/pk-1.jfif";
import image4 from "../assets/pk-2.jfif";
import image6 from "../assets/pk-3.jfif";
import image7 from "../assets/pk-4.jfif";
import { Link } from "react-router";
import { useState } from "react";
import { toastMessag } from "../config/type";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";

const CategoryList = [
  {
    title: "Elite Trainer Boxes",
    image: image1,
    subTitle: "Everything you need to train",
  },
  {
    title: "Booster Boxes",
    subTitle: "Shop now for the latest sets!",
    image: image2,
  },
  {
    title: "Booster Packs",
    image: image3,
    subTitle: "Open packs and find rare cards",
  },
  {
    title: "Tins",
    subTitle: "Collectible tins with exclusive cards",
    image: image4,
  },
  {
    title: "Graded Cards",
    subTitle: "Premium authenticated cards",
    image: image5,
  },
  {
    title: "Premium authenticated cards",
    subTitle: "Graded Cards",
    image: image6,
  },
  {
    title: "Premium authenticated cards",
    subTitle: "Graded Cards",
    image: image7,
  },
  {
    title: "Premium authenticated cards",
    subTitle: "Graded Cards",
    image: image6,
  },
  {
    title: "Booster Packs",
    image: image3,
    subTitle: "Open packs and find rare cards",
  },
];

const cardCategories = [
  {
    name: "All Cards",
    count: "1,240 Cards",
    icon: <Flame size={24} />,
    color: "bg-slate-600",
  },
  {
    name: "Fire Types",
    count: "1,240 Cards",
    icon: <Crown size={24} />,
    color: "bg-orange-500",
  },
  {
    name: "Water Types",
    count: "980 Cards",
    icon: <Droplets size={24} />,
    color: "bg-blue-500",
  },
  {
    name: "Grass Types",
    count: "1,100 Cards",
    icon: <Leaf size={24} />,
    color: "bg-green-500",
  },
  {
    name: "Legendary",
    count: "150 Cards",
    icon: <Sparkles size={24} />,
    color: "bg-purple-500",
  },
];

const RatryArray = ["Ultra Rare", "Vintage Base", "Holo Rare", "Secret Rare"];

export default function AllCards() {
  const [clickCat, setClickcat] = useState<string>("All Cards");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [range, setRange] = useState([0, 500]);

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products", selectedSet, selectedRarity, range],
    queryFn: () =>
      getProducts({
        set: selectedSet || undefined,
        rarity: selectedRarity || undefined,
        minPrice: range[0],
        maxPrice: range[1],
      }),
  });

  console.log(productsData);

  return (
    <div className="min-h-screen sm:max-w-294 px-2 mx-auto py-10">
      <div className=" mb-3 sm:mb-6">
        <h1 className="font-bold text-2xl  sm:text-[32px]">All Cards</h1>
      </div>

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="w-full sm:w-1/4  p-2 sm:p-5 border border-[#D1D5DB] rounded-lg">
          <div>
            <h1 className=" font-bold text-[16px]">Card Types</h1>
            <h2 className=" text-[12px] text-[#4D6599]">
              Filter by elemental energy
            </h2>
          </div>

          <div className="flex mt-6 flex-col gap-y-3 sm:gap-y-6">
            {cardCategories?.map((item, k) => {
              return (
                <div
                  onClick={() => setClickcat(item?.name)}
                  className={`flex  cursor-pointer py-2 px-3 rounded-lg gap-x-2.5 transition-all duration-300 ease-in-out ${item?.name === clickCat ? "bg-sky-100 ml-4" : "ml-0"}
`}
                  key={k}
                >
                  <div
                    className={`} font-bold ${item?.name == clickCat ? "text-[#2463EB] " : "text-black"} `}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <h1
                      className={`font-bold text-sm ${item?.name == clickCat ? "text-[#2463EB] " : "text-black"}`}
                    >
                      {item?.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <h1 className="font-bold text-[16px]">Rarity</h1>
            <h2 className="text-[#4D6599] text-[12px]">
              Browse by card scarcity
            </h2>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            {RatryArray?.map((item, k) => {
              return (
                <div key={k} className="flex  gap-x-2 items-center ">
                  <div>
                    <input
                      type="checkbox"
                      className="w-4 h-4  border rounded-lg border-[#D1D5DB] accent-[#D1D5DB] cursor-pointer"
                    />
                  </div>
                  <h1 className="text-sm text-[#0E121B]">{item}</h1>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-3">
            <button
              onClick={toastMessag}
              className="text-[#2463EB]  w-full py-2.25 font-semibold cursor-pointer text-sm rounded-lg px-8 border border-[#2463EB]"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        <div className="w-full sm:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin text-blue-500" size={48} />
              </div>
            ) : (
              productsData?.products?.map((item : any, key :string) => {
                return (
                  <Link
                    key={key}
                    to={`/cardDetails/${item?._id}`}
                    className="group block h-full"
                  >
                    <div className="bg-white rounded-[20px] shadow-sm hover:shadow-xl p-4 flex flex-col h-full transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-50">
                      <div className="w-full aspect-4/5 bg-[#F1F5F9] rounded-[15px] overflow-hidden flex items-center justify-center relative shrink-0">
                        <img
                          src={item?.image}
                          alt={item?.title}
                          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-y-2">
                        <h1 className="text-[16px] font-bold truncate">
                          {item.name as string}
                        </h1>
                        <h2 className="text-[12px] text-[#4A5565]">
                          {(item.set as Record<string, string>)?.name ||
                            "Unknown Set"}
                        </h2>
                        <div className="flex justify-between items-center">
                          <h2 className="text-[18px] font-semibold text-[#155DFC]">
                            $
                            {(
                              (item.currentPrice as Record<string, number>)
                                ?.ungraded || 0
                            ).toFixed(2)}
                          </h2>
                          <span className="text-[#193CB8] bg-[#DBEAFE] rounded-md text-[10px] px-2 py-1 truncate max-w-[50%]">
                            {item.rarity as string}
                          </span>
                        </div>
                        <h1 className="text-[#6A7282] text-[12px] truncate">
                          PSA 10: $
                          {(
                            (item.currentPrice as Record<string, number>)
                              ?.psa10 || 0
                          ).toFixed(2)}
                        </h1>
                      </div> 
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

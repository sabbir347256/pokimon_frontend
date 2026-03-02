import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { featureCard, getNewestProduct } from "../services/api";

const buttonArray = ["All", "Newest"];

export default function FeatureProducts() {
  const [btnType, setBtnType] = useState<string>("All");

  const fetchData = btnType === "Newest" ? getNewestProduct : featureCard;

  const {
    data: featureCardData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [btnType],
    queryFn: fetchData,
  });


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="sm:max-w-294 px-2 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between my-7">
        <h1 className="text-[#111827] text-3xl font-bold">All Cards</h1>

        <div className="flex flex-wrap  gap-1">
          {buttonArray?.map((item, key) => (
            <button
              onClick={() => setBtnType(item)}
              className={`px-3.5 cursor-pointer ${btnType == item ? "bg-[#155DFC]" : "bg-[#111827]"} text-sm rounded-md  text-white py-1.5 `}
              key={key}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {featureCardData?.map((item, key) => (
          <Link
            to={`/cardDetails/${item._id as string}`}
            className="bg-[#f7f7f7] border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            key={(item._id as string) || k}
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
              <img
                className="w-full h-full object-contain bg-gray-100"
                src={item.image as string}
                alt={item.name as string}
              />
            </div>

            <div className="p-4 flex flex-col gap-y-2">
              <h1 className="text-[16px] font-bold truncate">
                {item.name as string}
              </h1>
              <h2 className="text-[12px] text-[#4A5565]">
                {(item.set as Record<string, string>)?.name || "Unknown Set"}
              </h2>
              <div className="flex justify-between items-center">
                <h2 className="text-[18px] font-semibold text-[#155DFC]">
                  $
                  {(
                    (item.currentPrice as Record<string, number>)?.ungraded || 0
                  ).toFixed(2)}
                </h2>
                <span className="text-[#193CB8] bg-[#DBEAFE] rounded-md text-[10px] px-2 py-1 truncate max-w-[50%]">
                  {item.rarity as string}
                </span>
              </div>
              <h1 className="text-[#6A7282] text-[12px] truncate">
                PSA 10: $
                {(
                  (item.currentPrice as Record<string, number>)?.psa10 || 0
                ).toFixed(2)}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center my-5 justify-center">
        <Link to={"/all-cards"}>
          <button className="flex cursor-pointer text-[18px] items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            View All
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
}

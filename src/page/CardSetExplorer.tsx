import { TrendingUp } from "lucide-react";
import cardSetImage from "../assets/img.max-h-full.png";
import CardSetExplorerfilter from "../components/CardSetExplorerfilter";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

const cardSetArray = [
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
  {
    image: cardSetImage,
    title: "Scarlet & Violet - 151",
    date: "205 Cards • Sep 22, 2023",
    bandge: "Hot",
    valueTitle: "Market Value",
    value: "842.04",
    parcentage: "+4.2%",
  },
];

interface CurrentPrice {
  ungraded: number;
  grade7: number;
  grade8: number;
  grade9: number;
  grade95: number;
  psa10: number;
  market: number;
  low: number;
  high: number;
}

interface Product {
  _id: string;
  cardNumber: string;
  createdAt: string;
  currentPrice: CurrentPrice;
  image: string;
  isFeatured: boolean;
  name: string;
  priceChartingSlug: string;
  rarity: string;
  set: string;
  sourceUrl: string;
  stock: number;
  subtypes: string[];
  types: string[];
  updatedAt: string;
  __v: number;
}

const CardSetExplorer = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://pokimon-server.onrender.com/api/products/allProductsData/product")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const setFilter = productData?.filter(
    (product: Product) => (product?.set as string) === id,
  );
  console.log(setFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen sm:max-w-294 px-2 mx-auto py-10">
      <CardSetExplorerfilter></CardSetExplorerfilter>
      <div className="flex my-5 sm:mt-10 "></div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {setFilter?.map((item, k) => {
          return (
            <Link key={k} to={`/cardDetails/${item._id as string}`}>
              <div >
                <div className="border flex  sm:flex-row gap-x-8 rounded-lg border-[#dadde0] py-2 px-2">
                  <div className="bg-[#E2E8F0]  w-[30%] sm:w-[20%]  p-2.25 border rounded-md border-[#e7e3e3]">
                    <img
                      className=" rounded-md  w-full h-full"
                      src={item?.image}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-y-2 sm:gap-y-4">
                    <div className="flex sm:flex-row flex-col justify-between gap-x-5">
                      <div className="">
                        <h1 className=" text-sm sm:text-[18px] font-bold text-[#0F172A]">
                          {item?.name}
                        </h1>
                        <h2 className="text-[#64748B] text-[12px]">
                          {formatDate(item.createdAt)}
                        </h2>
                      </div>

                      {/* <div className="">
                      <span className="bg-[#DBEAFE] px-2 py-0.5 rounded-l-full rounded-r-full text-[#2563EB] font-semibold text-[10px]">
                        {item?.bandge}
                      </span>
                    </div> */}
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        {/* <h1 className="text-[10px] text-[#94A3B8]">
                        {item?.valueTitle}
                      </h1> */}
                        <h1 className="text-lg text-[#1E293B] font-bold">
                          ${item?.currentPrice?.ungraded}
                        </h1>
                      </div>
                      {/* <div className="text-[#10B981]  bg-[#ECFDF5] px-2 py-1 rounded-lg">
                      <span className="text-sm font-bold flex gap-x-1 items-center">
                        <TrendingUp size={15} />
                        {item?.parcentage}
                      </span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardSetExplorer;

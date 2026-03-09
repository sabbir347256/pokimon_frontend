import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { toastMessag, type ProductSet } from "../config/type";
import { useQuery } from "@tanstack/react-query";
import { getAllSets, getProducts } from "../services/api";

const StoreProducts: React.FC = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://pokimon-server.onrender.com/api/products/allProductsData/product")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const {
    data: getAllSetsdata,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["sets"],
    queryFn: getAllSets,
  });

  console.log(getAllSetsdata);
  return (
    <section className="sm:max-w-294 px-2 mx-auto  ">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getAllSetsdata?.map((product, index) => (
            <Link to={`/cardSetExplorer/${product?._id}`} key={index}>
              <div
                className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="flex flex-col gap-y-1">
                    <h1 className="border border-gray-300 rounded-md text-center p-2">
                      {product?.name}
                    </h1>
                    <h3 className="text-white font-bold text-[18px] leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-[#93C5FD] text-sm font-medium">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div>
                    <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">
                      Cards
                    </p>
                    <p className="text-gray-800 font-semibold text-[16px]">
                      {
                        productData?.filter(
                          (specificProduct) =>
                            specificProduct.set === product._id,
                        ).length
                      }
                    </p>
                  </div>
                  <div className="border-x border-gray-100 px-1">
                    <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">
                      Released
                    </p>
                    <p className="text-gray-800 font-semibold text-[16px] whitespace-nowrap">
                      {product.releaseDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] tracking-wider text-[#94A3B8] font-bold mb-1">
                      Trend
                    </p>
                    <p className="text-green-400 font-semibold text-[16px]">
                      {product.trend}
                    </p>
                  </div>
                </div>

                <Link to={`/cardSetExplorer/${product?._id}`}>
                  <button
                    onClick={toastMessag}
                    className="py-2.75 cursor-pointer w-full border-2 border-[#1E40AF] text-[#1E40AF] font-bold rounded-xl hover:bg-blue-50 transition-colors duration-200"
                  >
                    View Set Details
                  </button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;

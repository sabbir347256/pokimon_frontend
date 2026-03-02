import { Heart, ExternalLink, Loader2, Minus, Plus, Share2, ShoppingCart, TrendingUp } from "lucide-react";
import { Analytics } from "../components/Analytics";
import DetailsGrade from "../components/DetailsGrade";
import RelatedCard from "../components/RelatedCard";
import StoreProducts from "../components/StoreProducts";
import { useParams } from "react-router";
import { useState } from "react";
import { toastMessag } from "../config/type";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/api";

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [count, setCount] = useState(1);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });

  console.log(product)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-blue-500" size={64} />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Card Not Found</h1>
        <p className="text-gray-500">This card may not exist or was removed.</p>
      </div>
    );
  }

  // Parse card number from name if backend didn't
  const cardNumber = product.cardNumber && product.cardNumber !== 'N/A'
    ? product.cardNumber
    : (() => { const m = product.name?.match(/#[\w-]+$/); return m ? m[0] : null; })();

    console.log(cardNumber)

  // Build card details — only show fields that have real data
  const cardDetails = [
    { label: 'Set', value: product.set?.name },
    { label: 'Card No.', value: cardNumber },
    { label: 'Rarity', value: product.rarity !== 'Unknown' ? product.rarity : null },
    { label: 'Type', value: product.types?.length > 0 ? product.types.join(', ') : null },
    { label: 'HP', value: product.hp || null },
    { label: 'Artist', value: product.artist || null },
  ].filter(d => d.value);

  // Grade-based prices for Market Price Range
  const gradePrices = [
    { label: 'Ungraded', value: product.currentPrice?.ungraded },
    { label: 'Grade 9', value: product.currentPrice?.grade9 },
    { label: 'BGS 9.5', value: product.currentPrice?.bgs95 || product.currentPrice?.grade95 },
    { label: 'PSA 10', value: product.currentPrice?.psa10 },
  ];

  return (
    <div className="sm:max-w-294 px-2 mx-auto sm:py-10">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
        {/* Left: Image */}
        <div className="w-full sm:w-1/3">
          <div className="px-3 sm:px-9 py-10 bg-[#F6F8FA] rounded-lg flex items-center justify-center min-h-64">
            <img
              className="w-full max-h-96 object-contain rounded-md"
              src={product.image || 'https://via.placeholder.com/300x400?text=No+Image'}
              alt={product.name}
            />
          </div>
          <h1 className="text-[#000000] mt-10 font-semibold text-2xl sm:text-4xl">{product.name}</h1>
          <h2 className="text-[#000000] mt-4 font-medium text-sm">
            {product.set?.name}{cardNumber ? ` — ${cardNumber}` : ''}. View pricing, grade values, and market analysis.
          </h2>
          {/* {product.sourceUrl && (
            <a
              href={product.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={14} /> View on PriceCharting
            </a>
          )} */}
        </div>

        {/* Right: Details */}
        <div className="w-full sm:w-2/3">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
            <h2 className="text-[#4A5565] text-[20px]">
              {product.set?.name}{cardNumber ? ` — ${cardNumber}` : ''}
            </h2>

            <div className="flex gap-x-2 items-center">
              <h1 className="text-[#155DFC] font-bold text-2xl sm:text-3xl">
                ${(product.currentPrice?.ungraded || 0).toFixed(2)}
              </h1>
              <div className="text-[#00A63E] flex gap-x-2.5 items-center">
                <TrendingUp />
                <h1>Market Price</h1>
              </div>
            </div>

            {/* Card Details — only shows fields with real data */}
            {cardDetails.length > 0 && (
              <div className="bg-[#F9FAFB] rounded-md p-6">
                <h1 className="text-[#101828] text-[18px] font-semibold mb-4">Card Details</h1>
                <div className="grid grid-cols-2 gap-4">
                  {cardDetails.map((detail) => (
                    <div key={detail.label} className="flex flex-col gap-y-1">
                      <h1 className="text-[#4A5565] text-sm">{detail.label}</h1>
                      <h1 className="text-[#101828] font-medium">{detail.value}</h1>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Market Price Range — shows per-grade prices */}
            <div className="bg-[#EFF6FF] mt-3 p-6 rounded-lg flex flex-col gap-y-5">
              <h1 className="font-semibold text-[#101828]">Price by Grade</h1>
              <div className="grid grid-cols-4 gap-4">
                {gradePrices.map((gp) => (
                  <div key={gp.label}>
                    <h1 className="text-[#4A5565] text-[12px]">{gp.label}</h1>
                    <p className={`text-sm font-semibold ${(gp.value || 0) > 0 ? 'text-[#101828]' : 'text-gray-300'}`}>
                      ${(gp.value || 0).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-3">
              <div className="flex gap-x-3">
                <div className="flex gap-x-2 border-2 rounded-lg border-[#D1D5DC]">
                  <div onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))} className="border-r-2 border-[#D1D5DC] p-4 cursor-pointer hover:bg-gray-50">
                    <Minus size={20} />
                  </div>
                  <div className="border-r-2 p-4 border-[#D1D5DC] min-w-[3rem] text-center">{count}</div>
                  <div onClick={() => setCount(prev => prev + 1)} className="p-4 cursor-pointer hover:bg-gray-50">
                    <Plus size={20} />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <button onClick={toastMessag} className="bg-[#155DFC] rounded-2xl cursor-pointer text-white text-sm flex items-center justify-center gap-x-2 h-full w-full">
                    <ShoppingCart /> Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-x-2">
              <div className="w-full h-full border-2 border-[#D1D5DC] py-3 rounded-[10px]">
                <button onClick={toastMessag} className="flex justify-center gap-x-2 items-center cursor-pointer w-full">
                  <Heart size={20} /> Add to Wishlist
                </button>
              </div>
              <div className="w-full h-full border-2 py-3 border-[#D1D5DC] rounded-[10px]">
                <button onClick={toastMessag} className="flex justify-center gap-x-2 cursor-pointer items-center w-full">
                  <Share2 size={20} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy & Tips (AI Content) */}
      {product.aiContent && (
        <div className="text-[#364153] my-10">
          <h1 className="text-2xl sm:text-[40px] mb-4">Strategy & Tips</h1>
          <div className="bg-[#F9FAFB] p-6 flex flex-col gap-y-4 rounded-md text-[16px]">
            <p>{product.aiContent}</p>
          </div>
        </div>
      )}

      {/* Price Chart — connected to real data */}
      <div className="my-10">
        <div className="flex flex-col gap-y-2 mb-3">
          <h1 className="font-semibold text-xl">Price Index: {product.name}</h1>
          <h1 className="text-xl sm:w-[60%]">Historical price data for {product.name} from {product.set?.name}</h1>
        </div>
        <Analytics priceHistory={product.priceHistory} />
      </div>

      {/* Grade Cards — connected to real data */}
      <div className="my-5 sm:my-10">
        <DetailsGrade currentPrice={product.currentPrice} />
      </div>

      <div className="my-5 sm:my-10">
        <RelatedCard />
      </div>

      <div className="my-5 sm:my-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-3xl text-[#101828]">Store Products</h2>
          <button className="text-gray-500 hover:text-gray-700 font-medium">View All</button>
        </div>
        <StoreProducts />
      </div>
    </div>
  );
}

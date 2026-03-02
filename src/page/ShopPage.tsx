import * as Slider from '@radix-ui/react-slider';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getSets } from '../services/api';
import { Link } from 'react-router';

export default function ShopPage() {
    const [selectedRarity, setSelectedRarity] = useState('');
    const [selectedSet, setSelectedSet] = useState('');
    const [range, setRange] = useState([0, 500]);

    const { data: sets } = useQuery({
        queryKey: ['sets'],
        queryFn: getSets
    });

    const { data: productsData, isLoading } = useQuery({
        queryKey: ['products', selectedSet, selectedRarity, range],
        queryFn: () => getProducts({
            set: selectedSet || undefined,
            rarity: selectedRarity || undefined,
            minPrice: range[0],
            maxPrice: range[1]
        })
    });


    const rarities = ['Common', 'Rare', 'Holo Rare', 'Ultra Rare', 'Secret Rare'];

    return (
        <div className="min-h-screen flex sm:flex-row flex-col gap-2 md:gap-5 sm:max-w-294 px-2 mx-auto py-10">
            <div className='w-full sm:w-1/3'>
                <div className='border rounded-lg border-[#F1F5F9] p-3'>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[#8e9aaf] font-bold text-sm tracking-wider">FILTER</h2>
                        <button
                            onClick={() => { setSelectedRarity(''); setSelectedSet(''); setRange([0, 500]); }}
                            className="text-blue-500 text-xs font-bold hover:underline"
                        >
                            Reset
                        </button>
                    </div>

                    <h3 className="font-bold text-base mb-6 text-[#1a1a1a]">Price Range</h3>

                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-10"
                        value={range}
                        max={500}
                        step={1}
                        minStepsBetweenThumbs={1}
                        onValueChange={setRange}
                    >
                        <Slider.Track className="bg-[#f0f3f8] relative grow rounded-full h-1.5">
                            <Slider.Range className="absolute bg-[#3062e0] rounded-full h-full transition-all duration-200" />
                        </Slider.Track>
                        <Slider.Thumb className="block w-4 h-4 bg-[#3062e0] rounded-full hover:scale-110 focus:outline-none" aria-label="Min" />
                        <Slider.Thumb className="block w-4 h-4 bg-[#3062e0] rounded-full hover:scale-110 focus:outline-none" aria-label="Max" />
                    </Slider.Root>

                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1 bg-[#f0f3f8] rounded-md py-2.5 px-4 text-center text-[#8e9aaf] font-bold transition-colors">
                            ${range[0]}
                        </div>
                        <span className="text-[#8e9aaf] font-medium">To</span>
                        <div className="flex-1 bg-[#f0f3f8] rounded-md py-2.5 px-4 text-center text-[#8e9aaf] font-bold transition-colors">
                            ${range[1]}
                        </div>
                    </div>

                    {/* Expansion Set */}
                    <div className="mb-8 mt-5">
                        <h3 className="font-bold text-base mb-4">Expansion Set</h3>
                        <div className="space-y-3 max-h-60 overflow-y-auto">
                            {sets?.map((set: Record<string, string | number | undefined>) => (
                                <label key={set._id as string} className="flex items-center group cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden peer"
                                        checked={selectedSet === set._id}
                                        onChange={() => setSelectedSet(selectedSet === set._id ? '' : set._id as string)}
                                    />
                                    <div className="w-5 h-5 border-2 border-[#d1d9e6] rounded bg-white peer-checked:bg-[#3062e0] peer-checked:border-[#3062e0] transition-colors mr-3"></div>
                                    <span className="text-[#8e9aaf] font-bold group-hover:text-[#1a1a1a] transition-colors">
                                        {set.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Rarity */}
                    <div className="mb-8">
                        <h3 className="font-bold text-base mb-4">Rarity</h3>
                        <div className="flex flex-wrap gap-2">
                            {rarities.map((rarity) => (
                                <button
                                    key={rarity}
                                    onClick={() => setSelectedRarity(selectedRarity === rarity ? '' : rarity)}
                                    className={`px-4 py-2.5 rounded-lg font-bold text-sm transition-all ${selectedRarity === rarity
                                        ? 'bg-[#3062e0] text-white'
                                        : 'bg-[#f0f3f8] text-[#8e9aaf] hover:bg-[#e2e8f0]'
                                        }`}
                                >
                                    {rarity}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full sm:w-2/3'>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-blue-500" size={48} />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                        {productsData?.products?.map((item: Record<string, unknown>, k: number) => {
                            return (
                                <Link to={`/cardDetails/${item._id as string}`} className='bg-[#f7f7f7] border border-gray-200 rounded-lg hover:shadow-lg transition-shadow' key={(item._id as string) || k}>
                                    <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
                                        <img className='w-full h-full object-contain bg-gray-100' src={item.image as string} alt={item.name as string} />
                                    </div>

                                    <div className='p-4 flex flex-col gap-y-2'>
                                        <h1 className='text-[16px] font-bold truncate'>{item.name as string}</h1>
                                        <h2 className='text-[12px] text-[#4A5565]'>{(item.set as Record<string, string>)?.name || 'Unknown Set'}</h2>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[18px] font-semibold text-[#155DFC]'>
                                                ${((item.currentPrice as Record<string, number>)?.ungraded || 0).toFixed(2)}
                                            </h2>
                                            <span className='text-[#193CB8] bg-[#DBEAFE] rounded-md text-[10px] px-2 py-1 truncate max-w-[50%]'>
                                                {item.rarity as string}
                                            </span>
                                        </div>
                                        <h1 className='text-[#6A7282] text-[12px] truncate'>
                                            PSA 10: ${((item.currentPrice as Record<string, number>)?.psa10 || 0).toFixed(2)}
                                        </h1>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )}
                {!isLoading && productsData?.products?.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No cards found matching your filters.
                    </div>
                )}
            </div>
        </div>
    )
}

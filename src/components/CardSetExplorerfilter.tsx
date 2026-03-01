import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const filterOptions: Record<string, string[]> = {
    "Condition": ["Near Mint", "Lightly Played", "Heavily Played", "Damaged"],
    "Printing": ["Holo", "Reverse Holo", "1st Edition", "Unlimited"],
    "Pokemon": ["Pikachu", "Charizard", "Mewtwo", "Gengar"],
    "Set": ["Base Set", "Jungle", "Fossil", "Neo Genesis"],
    "Product Type": ["Single Card", "Booster Pack", "Elite Trainer Box"],
    "Card Type": ["Pokémon", "Trainer", "Energy"],
    "Rarity": ["Common", "Uncommon", "Rare", "Ultra Rare", "Secret Rare"]
};

export default function CardSetExplorerfilter() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <div className="w-full bg-white  " ref={dropdownRef}>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Card Set Explorer</h1>
                <p className="text-gray-500 mt-1">Browse and track market trends across all trading card game expansions.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                    All Filters
                </button>

                {Object.keys(filterOptions).map((label) => (
                    <div key={label} className="relative">
                        <button
                            onClick={() => toggleDropdown(label)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition ${
                                openDropdown === label 
                                ? "bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm" 
                                : "bg-gray-100 border-transparent hover:bg-gray-200 text-gray-700"
                            }`}
                        >
                            <span className="font-medium text-[15px]">{label}</span>
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-200 ${openDropdown === label ? "rotate-180 text-blue-600" : "text-gray-500"}`} 
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === label && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                {filterOptions[label].map((option) => (
                                    <label 
                                        key={option} 
                                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                                    >
                                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <button 
                    onClick={() => setOpenDropdown(null)}
                    className="ml-2 text-gray-700 font-bold hover:underline text-[15px] cursor-pointer"
                >
                    Clear Filter
                </button>
            </div>
        </div>
    );
}
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Droplets, Flame, Leaf, Sparkles } from 'lucide-react';
import React from 'react';

interface PokemonItem {
  name: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const pokemonCategories: PokemonItem[] = [
  { name: 'Fire Types', count: '1,240 Cards', icon: <Flame size={16} />, color: 'bg-orange-500' },
  { name: 'Water Types', count: '980 Cards', icon: <Droplets size={16} />, color: 'bg-blue-500' },
  { name: 'Grass Types', count: '1,100 Cards', icon: <Leaf size={16} />, color: 'bg-green-500' },
  { name: 'Legendary', count: '150 Cards', icon: <Sparkles size={16} />, color: 'bg-purple-500' },
];

export const PokemonDropdown = ({ isOpen }: { isOpen: boolean }) => {


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 mt-2 z-100 w-112.5 mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400   tracking-widest">Browse by Category</span>
            <span className="text-[10px] bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full font-bold">New Sets Added</span>
          </div>

          <div className="p-2 grid grid-cols-1 gap-1">
            {pokemonCategories.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className={`${item.color} p-2.5 rounded-lg text-white shadow-lg shadow-opacity-20 transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.count}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>

          <div className="p-4 bg-sky-600 text-white flex justify-between items-center cursor-pointer hover:bg-sky-700 transition-colors">
            <span className="text-sm font-bold">View Full Marketplace</span>
            <ChevronRight size={18} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
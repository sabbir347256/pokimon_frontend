import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import type { cardCategoriesType } from '../config/type';
import { Link } from 'react-router';



export const MenuDropDwon = ({ items, title }: { items: cardCategoriesType[], title: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-4 z-100 w-[320px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
    >
        <div className="p-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-400   tracking-widest">{title}</span>
        </div>
        <div className="p-2 flex flex-col gap-1">
            {items.map((item, index) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-100"
                >
                    <Link to={item?.route}>
                    
                    <div className="flex items-center gap-3">
                        
                        <div className={`${item.color} p-2 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                            <p className="text-[10px] text-slate-400">{item.count}</p>
                        </div>
                    </div></Link>
                    {/* AllSetscards */}
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-sky-500 transition-all" />
                </motion.div>
            ))}
        </div>
    </motion.div>
);
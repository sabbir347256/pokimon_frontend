import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: 'Delivered' | 'Shipped' | 'Processing';
}

const  OderHistory: React.FC = () => {
  const orders: Order[] = [
    { id: 'ORD-001', date: '2026-01-10', items: 1, total: 425.00, status: 'Delivered' },
    { id: 'ORD-002', date: '2026-01-08', items: 2, total: 189.98, status: 'Shipped' },
    { id: 'ORD-003', date: '2026-01-05', items: 1, total: 189.98, status: 'Processing' },
  ];

  const statusStyles = {
    Delivered: 'bg-[#eefdf3] text-[#22c55e]',
    Shipped: 'bg-[#eff6ff] text-[#3b82f6]',
    Processing: 'bg-[#fffbeb] text-[#f59e0b]',
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <h2 className="text-2xl    text-[#1e293b] mb-6">Order History</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200"
          >
            {/* Left Section: Info */}
            <div className="space-y-1">
              <h3 className="   text-[#1e293b] text-lg">{order.id}</h3>
              <p className="text-sm text-gray-400 font-medium">{order.date}</p>
              <p className="text-sm text-gray-500">{order.items} item(s)</p>
              
              <button className="flex items-center gap-2 text-[#3062e0]    text-sm pt-2 group-hover:underline">
                View Details
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Section: Status & Price */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between mt-4 sm:mt-0 gap-3">
              <span className={`px-4 py-1 rounded-full text-xs    ${statusStyles[order.status]}`}>
                {order.status}
              </span>
              <p className="text-xl    text-[#1e293b]">
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  OderHistory;
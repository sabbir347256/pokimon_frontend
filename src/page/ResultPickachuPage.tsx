import React from 'react';
import { ShoppingCart } from 'lucide-react';
import cardImage from '../assets/Image (Scarlet & Violet).png'

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  status: 'In Stock' | 'Low Stock' | 'Pre-Order';
}

const ProductCard = ({ product }: { product: Product }) => {
  const statusColors = {
    'In Stock': 'bg-[#22c55e]',
    'Low Stock': 'bg-[#facc15]',
    'Pre-Order': 'bg-[#3b82f6]',
  };

  return (
    <div className="bg-white hover:scale-x-75 transition duration-1000 hover:saturate-100  rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      <div className="relative aspect-4/3 bg-[#f3f4f6] overflow-hidden group">
        {/* Status Badge */}
        <div className={`absolute top-2 right-2 z-5 text-[12px]  px-3 py-2 text-white rounded-l-full rounded-r-full  ${statusColors[product.status]}`}>
          {product.status}
        </div>
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 flex flex-col grow">
        <span className="text-[#8e9aaf] text-[10px] font-bold uppercase tracking-tight mb-1">
          {product.category}
        </span>
        <h3 className="text-[#1a1a1a] font-bold text-sm mb-1">{product.title}</h3>
        <p className="text-[#3062e0] font-bold text-sm mb-4">${product.price.toFixed(2)}</p>
        
        <button className="mt-auto w-full bg-[#3062e0] hover:bg-[#254dbd] text-white font-bold py-2 rounded-md text-xs transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ResultPickachuPage = () => {
  const categories = ['All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'];
  const [activeTab, setActiveTab] = React.useState('All');

  // Mock data to match your image
  const products: Product[] = Array(12).fill({
    title: 'Scarlet & Violet',
    category: 'Booster Packs',
    price: 4.99,
    image: cardImage, // Replace with your actual image path
    status: 'In Stock'
  }).map((p, i) => ({
    ...p,
    id: i,
    status: i % 4 === 0 && i !== 0 ? (i === 4 || i === 8 ? 'Low Stock' : 'Pre-Order') : 'In Stock'
  }));

  return (
    <div className="min-h-screen sm:max-w-294 px-2 mx-auto py-10 ">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-4">
          Home  &gt;  <span className="font-semibold text-gray-800">Search Results</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-[#1a1a1a]">
              Results for <span className="text-[#3062e0]">'Pikachu'</span>
            </h1>
            <p className=" text-sm "> <span className='text-[#155DFC]'>1,248</span>  matching items found</p>
          </div>
          
          <button className="bg-[#3062e0] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-md hover:bg-[#254dbd] transition-all">
            <ShoppingCart size={18} />
            0 items
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-md text-[16px]  whitespace-nowrap transition-all ${
                activeTab === cat 
                  ? 'bg-[#3062e0] text-white' 
                  : 'bg-[#f0f3f8] text-[#364153] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid - Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPickachuPage;
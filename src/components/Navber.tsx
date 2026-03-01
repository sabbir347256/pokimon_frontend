import { AnimatePresence, motion } from 'framer-motion';
import {
  CreditCard,
  Crown,
  Droplets,
  Flame,
  Globe,
  Leaf,
  Lock,
  Menu,
  MoveLeft,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router';
import logo from '../assets/CategoryImages/freepik_br_743a609a-a2ca-4faa-950d-71f099ce313b 1.png';
import payment from '../assets/payment.png';
import human from '../assets/person.png';
import shopping from '../assets/shopping_bag.png';
// import { MenuDropDwon } from './MenuDropDwon';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<string>("cart");
  const navigate = useNavigate()
 

  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isCartOpen) ? 'hidden' : 'unset';
  }, [isMenuOpen, isCartOpen]);

  const cardCategories = [
    { name: 'All Cards', count: '1,240 Cards', icon: <Flame size={16} />, color: 'bg-slate-600', route: '/all-cards' },
    { name: 'Fire Types', count: '1,240 Cards', icon: <Crown size={16} />, color: 'bg-orange-500', route: "/AllSetscards" },
    { name: 'Water Types', count: '980 Cards', icon: <Droplets size={16} />, color: 'bg-blue-500', route: "/AllSetscards" },
    { name: 'Grass Types', count: '1,100 Cards', icon: <Leaf size={16} />, color: 'bg-green-500', route: "/AllSetscards" },
    { name: 'Legendary', count: '150 Cards', icon: <Sparkles size={16} />, color: 'bg-purple-500', route: "/AllSetscards" }

  ];

  // const setCategories = [
  //   { name: 'Scarlet & Violet', count: '12 Sets', icon: <Layers size={16} />, color: 'bg-red-600', route: "/AllSetscards" },
  //   { name: 'Sword & Shield', count: '18 Sets', icon: <Box size={16} />, color: 'bg-cyan-600', route: "/AllSetscards" },
  //   { name: 'Sun & Moon', count: '14 Sets', icon: <Layers size={16} />, color: 'bg-yellow-500', route: "/AllSetscards" },
  //   { name: 'Vintage (WOTC)', count: '25 Sets', icon: <Sparkles size={16} />, color: 'bg-amber-700', route: "/AllSetscards" },
  // ];

  const navigateResultPichakuPage = () => {
    navigate('pikachu')
  }

  return (
    <div className=' fixed top-0  w-full z-10 '>
      <nav className="flex   flex-col w-full relative">
        {/* Top Bar */}
        <div className="w-full  bg-[#0a0a0b] border-b border-gray-800 z-60">
          <div className="max-w-294 w-full mx-auto text-white py-2 px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 cursor-pointer text-[13px] hover:text-sky-400 transition-colors">
                <Globe size={16} /> <span className='hidden sm:inline'>Global</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-[13px] hover:text-sky-400 transition-colors">
                <img src={payment} alt="pay" className="w-4 h-4" /> <span className='font-semibold'>Currency : USD</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-[13px] hover:text-sky-400 transition-colors">Authenticated PSA/CGC Graded Cards</a>
              <a href="#" className="text-[13px] hover:text-sky-400 transition-colors">Support</a>
              <a href="#" className="text-[13px] border-gray-700 pl-6 font-bold text-white">Sell With Us</a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full bg-linear-to-r from-[#0045DE] to-[#1D3988] z-55 sticky top-0 shadow-lg">
          <div className="max-w-294 w-full mx-auto py-3 px-4 flex items-center justify-between gap-4">
            <button className="lg:hidden text-white p-1" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>

            <div className="shrink-0">
              <Link to={'/'}><img className='w-25 sm:w-30' src={logo} alt="logo" /></Link>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-white text-[14px] font-medium h-full">
              <Link to={'/'} className="hover:text-cyan-200 transition-colors">Home</Link>
              {[{name : 'cards' ,lnk : '/all-cards'}, {name : 'sets' , lnk : '/AllSetscards'}].map((type: {name : string , lnk : string}) => (
                <div
                  key={type.name}
                  className="relative h-full flex items-center"
                  // onMouseEnter={() => setHoveredItem(type)}
                  // onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link className=' cursor-pointer' to={type.lnk}>
                  <button className="hover:text-cyan-200 cursor-pointer transition-colors flex items-center gap-1 py-4 tracking-tight">
                    All {type.name} 
                  </button></Link>
                  {/* {hoveredItem === type && <div className="absolute top-full w-full h-5 bg-transparent" />}
                  <AnimatePresence>
                    {hoveredItem === type && (
                      <MenuDropDwon
                        items={type === 'cards' ? cardCategories : setCategories}
                        title={`Browse ${type}`}
                      />
                    )}
                  </AnimatePresence> */}
                </div>
              ))}
              <Link to={'/Shop'} className="hover:text-cyan-200 transition-colors">Shop</Link>
              <Link to={'/news-article'} className="hover:text-cyan-200 transition-colors"> News & Articles</Link>
            </div>

            <div className="hidden md:flex grow relative max-w-sm">
              <input type="text" placeholder="Search cards..." className="w-full bg-white/10 border border-white/20 rounded-full py-2 px-4 pl-10 text-white placeholder-white/50 text-sm outline-none focus:bg-white/20" />
              <Search onClick={navigateResultPichakuPage} className="absolute cursor-pointer left-3 top-2.5 text-white/50" size={16} />
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className='h-8 hidden sm:block w-.5 border bg-white'></div>
              <Link to={'/logOrAccount'}>  <img src={human} alt="user" className="w-6 h-6 border-white/20 cursor-pointer" /></Link>

              {/* Shopping Cart Icon */}
              <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
                <img src={shopping} alt="bag" className='w-6 h-6' />
                <span className="absolute -top-1 -right-1 bg-green-500 text-[8px] px-1.5 rounded-full border-2 border-[#1D3988]">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION MENU (Sliding Down) */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="fixed inset-0  lg:hidden  z-120 flex flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full  bg-linear-to-b from-[#0045DE] to-[#1D3988] shadow-2xl rounded-b-3xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                <div className="p-3 flex justify-between items-center border-b border-gray-100">

                  <img className='w-[30%]' src={logo} alt="" />
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-black">
                    <X size={28} />
                  </button>
                </div>

                <div className="overflow-y-auto p-6  space-y-8">
                  {/* Search for mobile */}
                  <div className="relative md:hidden">
                    <input type="text" placeholder="Search cards..." className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 pl-10 text-black placeholder-gray-400 text-sm outline-none" />
                    <Search onClick={navigateResultPichakuPage} className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  </div>

                  <div className="space-y-1">

                    <div className="grid gap-3">
                      <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-lg font-medium text-white
               bg-white/10 backdrop-blur-md
               border border-white/20
               hover:bg-white/20 transition"
                      >
                        Home
                      </Link>

                      <Link
                        to="/news-article"
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-lg font-medium text-white
               bg-white/10 backdrop-blur-md
               border border-white/20
               hover:bg-white/20 transition"
                      >
                        News & Articles
                      </Link>

                      <Link
                        to="/AllSetscards"
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-lg font-medium text-white
               bg-white/10 backdrop-blur-md
               border border-white/20
               hover:bg-white/20 transition"
                      >
                        Set Cards
                      </Link>
                      <Link
                        to="/Shop"
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-lg font-medium text-white
               bg-white/10 backdrop-blur-md
               border border-white/20
               hover:bg-white/20 transition"
                      >
                        Shop
                      </Link>
                    </div>

                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Card Categories</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cardCategories.map((cat) => (
                        <div key={cat.name} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className={`${cat.color} p-1.5 rounded-lg text-white`}>{cat.icon}</div>
                          <span className="text-xs font-bold text-slate-700">{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 backdrop-blur-md border-t  border-slate-100">
                  <button className="w-full bg-white text-shadow-black   py-4 rounded-2xl font-bold shadow-lg">
                    Sell Your Collection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Cart & Checkout Sidebar (No changes here) */}


        <AnimatePresence>
          {isCartOpen && (
            <div className="fixed inset-0 z-110 flex justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-150 h-full bg-white shadow-2xl flex flex-col overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {checkoutStep === 'cart' ? (
                    <motion.div
                      key="cart-view"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="flex flex-col h-full"
                    >
                      <div className="p-6 flex justify-between items-center border-b border-gray-100">
                        <div className="flex items-center gap-3 text-[#2563EB] cursor-pointer" onClick={() => setIsCartOpen(false)}>
                          <MoveLeft size={19} />
                          <h2 className="text-[14px] font-bold">Continue Shopping</h2>
                        </div>
                        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-black transition-colors">
                          <X size={24} />
                        </button>
                      </div>

                      <div className='grow overflow-y-auto px-6 pt-6'>
                        <h1 className='text-[32px] font-bold text-slate-900'>Your Cart</h1>
                        <h1 className='text-[#64748B] text-[16px]'>3 collectors items ready for checkout</h1>
                        <hr className='text-gray-100 my-4' />

                        {/* Empty state or item list here */}
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <ShoppingBag size={30} className="text-gray-400" />
                          </div>
                          <h3 className="text-gray-900 font-semibold">Ready for checkout?</h3>
                          <p className="text-gray-500 text-sm">Review your summary below.</p>
                        </div>
                      </div>

                      <div className="p-2 border-t border-gray-100">
                        <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
                          <h2 className="text-lg font-bold text-slate-800 mb-3">Order Summary</h2>
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-slate-500 text-sm">
                              <span>Subtotal (3 items)</span>
                              <span className="text-slate-900 font-medium">$15,240.00</span>
                            </div>
                            <div className="flex justify-between text-slate-500 text-sm">
                              <span>Estimated Tax</span>
                              <span className="text-slate-900 font-medium">$1,219.20</span>
                            </div>
                            <div className="flex justify-between text-slate-500 text-sm">
                              <span>Insured Shipping</span>
                              <span className="text-slate-900 font-medium">$45.00</span>
                            </div>
                          </div>
                          <div className="h-px bg-slate-100 w-full my-3"></div>
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-md font-bold text-slate-800">Total</span>
                            <span className="text-2xl font-bold text-slate-900">$16,504.20</span>
                          </div>

                          <div className="mb-2 ">

                            <label className="block text-sm font-bold text-slate-700 mb-2">

                              Promo Code

                            </label>

                            <div className="flex gap-1">

                              <input

                                type="text"

                                placeholder="Enter code"

                                className="grow bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-slate-600 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"

                              />

                              <button className="bg-[#1a1c23] text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">

                                Apply

                              </button>

                            </div>

                          </div>


                          <button
                            onClick={() => setCheckoutStep('checkout')}
                            className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                          >
                            <Lock size={18} fill="currentColor" />
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="checkout-view"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      className="flex flex-col h-full bg-white"
                    >
                      {/* Checkout UI Header */}
                      <div className="p-6">
                        <button
                          onClick={() => setCheckoutStep('cart')}
                          className="flex items-center gap-2 text-[#2563EB] font-bold text-sm mb-4"
                        >
                          <MoveLeft size={16} />
                          Back to Cart
                        </button>
                        <h1 className="text-3xl font-bold text-slate-900 leading-tight">Checkout</h1>
                        <p className="text-slate-500 text-[13px] mt-1">
                          Secure transaction protected by <span className="font-bold text-slate-700">PokeGuard™</span> escrow
                        </p>
                      </div>

                      <div className="grow overflow-y-auto px-6 space-y-5 pb-32">
                        {/* Shipping Details Box */}
                        <div className="p-5 border border-slate-200 rounded-4xl space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Truck size={20} /></div>
                            <h2 className="text-lg font-bold text-slate-800">Shipping Details</h2>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[11px] font-black text-slate-400   ml-1">First Name</label>
                              <input type="text" placeholder="Ash" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] font-black text-slate-400   ml-1">Last Name</label>
                              <input type="text" placeholder="Ketchum" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] font-black text-slate-400   ml-1">Street Address</label>
                            <input type="text" placeholder="123 Pallet Town Way" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="Kanto Region" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none" />
                            <input type="text" placeholder="00151" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none" />
                          </div>
                        </div>

                        {/* Payment Method Box */}
                        <div className="p-5 border border-slate-200 rounded-4xl space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><CreditCard size={20} /></div>
                            <h2 className="text-lg font-bold text-slate-800">Payment Method</h2>
                          </div>
                          <div className="border-2 border-blue-500 bg-blue-50 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <CreditCard className="text-blue-600" />
                              <div>
                                <p className="font-bold text-sm text-slate-900">Credit or Debit Card</p>
                                <p className="text-[10px] text-slate-500 font-medium">Secure, encrypted payment processing</p>
                              </div>
                            </div>
                            <div className="w-5 h-5 rounded-full border-[5px] border-blue-600 bg-white"></div>
                          </div>
                          <div className="space-y-1 relative">
                            <label className="text-[11px] font-black text-slate-400   ml-1">Card Number</label>
                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none" />
                            <Lock size={14} className="absolute right-4 top-10 text-slate-300" />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="MM / YY" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none" />
                            <input type="password" placeholder="***" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none" />
                          </div>
                        </div>
                      </div>

                      {/* Fixed Footer Button */}
                      <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-slate-100">
                        <button className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98]">
                          <ShieldCheck size={20} />
                          Place Order
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
import { Star } from 'lucide-react'
import banner from '../assets/Banner.png'
import { toastMessag } from '../config/type'



export default function Hero() {

  



  return (
    <div className='relative  w-full min-h-100 sm:min-h-150 flex items-center overflow-hidden'>

      <div className='absolute inset-0 -z-10'>
        <img
          className='w-full h-full object-cover object-center'
          src={banner}
          alt="Banner Background"
        />

        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='sm:max-w-294 w-full mx-auto px-2 sm:px-6 lg:px-0'>

        <div className='max-w-150  flex flex-col items-start gap-y-3 sm:gap-y-5'>

          <div className='inline-block overflow-hidden rounded-md shadow-lg'>
            <button className='bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-2 text-sm font-bold tracking-widest rounded-l-full flex  gap-x-2 items-center rounded-r-full  transition-all duration-300'>
              <div className='w-2 h-2 bg-amber-300 rounded-full'></div>
              LIMITED TIME OFFER
            </button>
          </div>

          <h1 className=' text-xl sm:text-3xl tracking-wider font-semibold text-white '>1st Edition Shadowless</h1>

          <p className='text-white/90 text-3xl lg:text-6xl   font-extrabold   drop-shadow-md'>
            Charizard PSA 10
          </p>

          <p className='text-white '>The holy grail of Pokémon cards. Track historical data, authenticated and ready for your portfolio.</p>

          <div className='flex gap-x-4'>
            <button onClick={toastMessag} className=' py-1 sm:py-4 bg-[#2563EB] font-semibold text-white px-3 sm:px-9  rounded-lg  hover:bg-blue-700 transition-all shadow-xl'>
              View Listing
            </button>

            <button onClick={toastMessag} className='bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-3 sm:px-9 py-1 sm:py-4 rounded-lg'>Market Insights</button>
          </div>

          <div className='flex flex-wrap gap-x-2 sm:gap-x-4 items-center'>
            <div className='flex sm:gap-x-1'>
              {
                Array(5).fill(5).map((_, i) => <Star key={i} size={26} className='text-yellow-400'></Star>)
              }
            </div>

            <h1 className='text-gray-200 text-xs sm:text-sm'>4.9/5 Rating</h1>

            <h1 className='text-gray-200 text-xs  sm:text-sm'>50,000+ Happy Collectors</h1>
          </div>

        </div>

      </div>
    </div>
  )
}
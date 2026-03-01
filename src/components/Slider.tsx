import { useEffect, useState } from 'react';
import image1 from '../assets/pke.jpg';
import image2 from '../assets/card2.png'
import image3 from '../assets/card3.jpg'
import image4 from '../assets/card4.webp'
import image5 from '../assets/card5.png'
import image6 from '../assets/card6.webp'
import { Link } from 'react-router';

const slides = [
    {
        title: "The Most Valuable Cards",
        subtitle: "in Ascended Heroes",
        bgImage: "https://images7.alphacoders.com/592/592678.jpg",
        packs: [
            image1,
            image2,
            image3
        ]
    },
    {
        title: "Discover Rare Ex Cards",
        subtitle: "30th Anniversary Set",
        bgImage: "https://images7.alphacoders.com/592/592678.jpg",
        packs: [
            image4,
            image5,
            image6
        ]
    }
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Changes every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    return (
        <div className="relative sm:max-w-294 px-2 mx-2 sm:mx-auto h-[50vh] overflow-hidden rounded-2xl shadow-2xl  group">

            {/* Slides Container */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-5" : "opacity-0 z-0"
                        }`}
                >

                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 scale-110"
                        style={{ backgroundImage: `url(${slide.bgImage})`, transform: index === current ? 'scale(1)' : 'scale(1.1)' }}
                    >
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full py-3 mx-auto px-8 flex flex-col sm:flex-row items-center justify-between">
                        <div className={`flex flex-col space-y-4 transition-all duration-700 delay-300 ${index === current ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className='flex justify-center'>
                                <button className='bg-white/15 backdrop-blur-[2px] px-5 py-2 sm:px-9 sm:py-3 text-white  rounded-l-full rounded-r-full border border-gray-400'>POKÉMON</button>
                            </div>
                            <h2 className="text-white text-3xl text-center md:text-4xl font-bold  drop-shadow-2xl">
                                {slide.title} <br />
                                <span className="text-blue-400">{slide.subtitle}</span>
                            </h2>
                            <div className='flex justify-center items-center'>
                                <Link to={'/news-article'}>
                                   <button className=" bg-[#2563EB] cursor-pointer hover:text-white text-white  font-bold px-5 py-2 sm:py-3.5 sm:px-10.5 rounded-md transition-all transform hover:scale-105 active:scale-95 w-fit shadow-xl">
                                    Read More
                                </button>
                                </Link>
                             
                            </div>
                        </div>

                        {/* Packs Stack */}
                        <div className={`hidden lg:flex items-center -space-x-12.5 transition-all duration-700 delay-500 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {slide.packs.map((pack, pIdx) => (
                                <img
                                    key={pIdx}
                                    src={pack}
                                    alt="Pack"
                                    className={`w-44 h-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] rounded-lg transform hover:-translate-y-5 transition-all duration-300
                    ${pIdx === 1 ? 'z-9 scale-110' : 'z-7 rotate-[-10deg]'} 
                    ${pIdx === 2 ? 'rotate-[8deg]' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}


            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>


            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-8 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-blue-500" : "w-2 h-2 bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
}
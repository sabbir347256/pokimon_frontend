import { useState } from 'react';
import newsBack3 from '../assets/back2.webp';
import newsBack4 from '../assets/back3.avif';
import newsBack2 from '../assets/backroundImage.webp';
import newsBack from '../assets/newsHero.png';

// Define the type for our news items
interface NewsItem {
    img: string;
    title: string;
}

const backArray: NewsItem[] = [
    { img: newsBack, title: "The Best<br />Poke Pixel" },
    { img: newsBack2, title: "Amazing<br />Card Decks" },
    { img: newsBack3, title: "Top<br />Strategies" },
    { img: newsBack4, title: "Latest<br />Updates" }
];

export default function NewsShow() {
    // State to manage the open modal and its content
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

    return (
        <div className='sm:max-w-294 px-2 mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
            {backArray.map((item, index) => (
                <div
                    key={index}
                    className='group hover:scale-95 transition duration-1000  relative bg-blue-600 rounded-md overflow-hidden shadow-lg'
                >
                    <img
                        src={item.img}
                        alt={item.title.replace(/<br \/>/g, " ")}
                        className='w-full h-[40vh] object-cover'
                    />

                    <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent'></div>

                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'> 
                        <button 
                            onClick={() => setSelectedNews(item)} 
                            className='px-6 py-2 cursor-pointer bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition transform hover:scale-105'
                        >
                            Read More
                        </button>
                    </div>

                    <div className='absolute bottom-0 left-0 p-5 text-white'>
                        <h2
                            className='text-2xl font-bold leading-tight'
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h2>
                    </div>
                </div>
            ))}

            {/* --- Modal UI --- */}
            {selectedNews && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <img src={selectedNews.img} className="w-full h-48 object-cover" alt="Modal view" />
                        <div className="p-6">
                            <h3 
                                className="text-2xl font-bold text-gray-800 mb-4"
                                dangerouslySetInnerHTML={{ __html: selectedNews.title }}
                            ></h3>
                            <p className="text-gray-600">
                                This is where your detailed news content would go. You can pass more data into the backArray to show unique descriptions here.
                            </p>
                            <button 
                                onClick={() => setSelectedNews(null)}
                                className="mt-6 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
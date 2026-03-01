import { Calendar, Loader2, User } from 'lucide-react'
import contentImage from '../assets/Frame 202.png'
import { useQuery } from '@tanstack/react-query'
import { getNews } from '../services/api'
import { Link } from 'react-router'

export default function NewsPage() {
    const { data: newsData, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: getNews,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const news = (newsData as any)?.news || [];

    return (
        <div className="sm:max-w-294 px-2 mx-auto py-10 min-h-screen">
            <div className="flex sm:flex-row flex-col justify-between gap-5">

                {/* Main News Feed */}
                <div className="sm:w-2/3">
                    <h1 className="text-[#101828] font-bold text-2xl sm:text-4xl">News & Articles</h1>

                    <div className='mt-8 flex flex-col gap-y-4'>
                        {isLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="animate-spin text-blue-500" size={48} />
                            </div>
                        ) : news.length === 0 ? (
                            <div className="text-center text-gray-500 py-20">No articles found.</div>
                        ) : (
                            news.map((item: Record<string, string | number | undefined>) => (
                                <Link to={`/news/${item.slug}`} key={item._id as string}>
                                    <div className='border border-[#e4e2e2] rounded-xl overflow-hidden hover:shadow-md transition-shadow'>
                                        <div className='rounded-t-lg overflow-hidden'>
                                            <img
                                                src={item.image as string}
                                                alt={item.title as string}
                                                className='w-full h-52 object-cover'
                                            />
                                        </div>
                                        <div className='mt-4 p-3 sm:p-6'>
                                            <span className='bg-[#DBEAFE] text-blue-700 px-3 py-1 rounded-full text-sm'>
                                                {item.category}
                                            </span>
                                            <div className='flex flex-col gap-y-3 mt-3'>
                                                <h1 className='text-lg sm:text-2xl font-bold'>{item.title}</h1>
                                                <p className='text-[12px] sm:text-sm text-[#364153]'>{item.summary}</p>
                                                <div className='flex gap-x-3 text-[#4A5565]'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <User size={16} />
                                                        <h1 className='text-[12px] sm:text-[14px]'>{item.author}</h1>
                                                    </div>
                                                    <div className='flex items-center gap-x-1 sm:gap-x-2'>
                                                        <Calendar size={16} />
                                                        <h1 className='text-[12px] sm:text-[14px]'>
                                                            {new Date(item.publishedAt as string | number).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>

                {/* Sidebar: Popular Content */}
                <div className="sm:w-1/3">
                    <h2 className="text-2xl font-bold">Popular Content</h2>
                    <div className='mt-8 grid grid-cols-2 gap-3'>
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-32" />
                            ))
                        ) : (
                            news.map((item: Record<string, string | number | undefined>) => (
                                <Link to={`/news/${item.slug}`} key={item._id as string}>
                                    <div
                                        className="bg-cover bg-center rounded-xl overflow-hidden h-32 flex flex-col justify-end p-2"
                                        style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${(item.image as string) || contentImage})` }}
                                    >
                                        <h1 className='text-white text-[12px] sm:text-[13px] font-semibold leading-tight line-clamp-2'>
                                            {item.title}
                                        </h1>
                                        <div className='text-[#CFCFCF] flex items-center gap-x-1 mt-1'>
                                            <User size={12} />
                                            <h1 className='text-[11px]'>{item.author}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

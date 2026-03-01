
import { CircleCheckBig } from 'lucide-react';
import star from '../assets/star.png'
import type { TReviews } from '../config/type';



const reviews: TReviews[] = [
    {
        name: "Alex Johnson",
        date: "January 15, 2026",
        review:
            "Amazing selection and fast shipping! Got my Scarlet & Violet booster box in perfect condition. Highly recommend!",
        rating: 5,
    },
    {
        name: "Emily Carter",
        date: "February 2, 2026",
        review:
            "Great quality products and excellent customer support. Will definitely order again.",
        rating: 4,
    },
    {
        name: "Michael Brown",
        date: "March 10, 2026",
        review:
            "Delivery was quick and packaging was solid. Overall a very good experience.",
        rating: 4,
    },
    {
        name: "Sophia Lee",
        date: "April 5, 2026",
        review:
            "Nice collection and reasonable prices. Just wish there were more discounts.",
        rating: 4,
    },
];


export default function Reviews() {
    return (
        <div className='sm:max-w-294 px-2 mx-auto'>


            <div className='flex justify-center items-center'>

                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-[#111827] text-center font-bold text-3xl'>Verified Reviews</h1>

                    <div className='flex gap-x-2'>
                        <div className='flex items-center'>
                            <div className='flex gap-x-1'>
                                {
                                    Array(5).fill(0).map((_, index) => (
                                        <img key={index} className='h-4' src={star} alt="star" />
                                    ))
                                }
                            </div>
                        </div>
                        <h1 className='text-[16px]'>4.8 out of 5 (1,234 reviews)</h1>
                    </div>
                </div>
            </div>


            <div className='grid mt-10 grid-cols-1 sm:grid-cols-2 gap-6'>
                {
                    reviews?.map((item, k) => {
                        return <div className='bg-[#F8FAFC] p-6 flex flex-col gap-y-4  rounded-md shadow-xl' key={k}>

                            <div className='flex justify-between'>
                                <div className='flex gap-x-1 items-center'>
                                    <div>
                                        <h1 className='font-bold text-[16px]'>{item?.name}</h1>
                                    </div>
                                    <div>
                                        <CircleCheckBig size={19} className='text-green-400' />
                                    </div>
                                </div>

                                <div className='flex gap-x-0.5'>
                                    {Array.from({ length: item?.rating ?? 0 }).map((_, k) => (
                                        <img className='h-4' key={k} src={star} alt="star" />
                                    ))}
                                </div>
                            </div>

                            <h1 className='text-sm font-medium text-[#111827]'>{item?.date}</h1>
                            <h1 className='text-[16px] '>{item?.review}</h1>


                            <hr className='bg-black h-0.3' />
                            <div>
                                <div className='flex gap-x-2 items-center'>
                                    <CircleCheckBig size={20} className='text-[#00C950]' />
                                    <h1 className='text-[#00C950]'>Verified Purchase</h1>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

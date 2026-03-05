
import { ArrowRight } from 'lucide-react'
import image1 from '../assets/CategoryImages/Container.png'
import image2 from '../assets/CategoryImages/ImageWithFallback (1).png'
import image5 from '../assets/CategoryImages/ImageWithFallback (2).png'
import image3 from '../assets/CategoryImages/ImageWithFallback (3).png'
import image4 from '../assets/CategoryImages/ImageWithFallback (4).png'
import image6 from '../assets/CategoryImages/ImageWithFallback.png'
import { Link } from 'react-router'


const CategoryList = [

    {
        title: "Elite Trainer Boxes",
        image: image1,
        subTitle: "Everything you need to train"
    }, {
        title: "Booster Boxes",
        subTitle: "Shop now for the latest sets!",
        image: image2
    }, {
        title: "Booster Packs",
        image: image3,
        subTitle: "Open packs and find rare cards"
    }, {
        title: "Tins",
        subTitle: "Collectible tins with exclusive cards",
        image: image4
    }, {
        title: "Graded Cards",
        subTitle: "Premium authenticated cards",
        image: image5
    }, {
        title: "Premium authenticated cards",
        subTitle: "Graded Cards",
        image: image6
    }, {
        title: "Elite Trainer Boxes",
        image: image1,
        subTitle: "Everything you need to train"
    }, {
        title: "Elite Trainer Boxes",
        image: image2,
        subTitle: "Everything you need to train"
    },
]


export default function Category() {

    return (
        <div className='sm:max-w-294 px-2 mx-auto' >

            <div className=' space-y-7'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    {
                        CategoryList?.map((item, key) => {

                            // /cardDetails/:id
                            return <Link key={key} state={item} className='cursor-pointer hover:saturate-150 hover:scale-x-75 transition duration-1000' to={'/cardDetails/:id'}>

                                <div  className=' rounded-md  space-y-2 bg-[#F8FAFC] shadow-lg   '>

                                    <div className=''>
                                        <img className='w-full   rounded-tl-2xl  rounded-tr-2xl
                                    ' src={item?.image} alt="" />
                                    </div>
                                    <div className='space-y-3 p-3'>
                                        <h1 className='text-[20px] font-semibold'>{item?.title.slice(0, 20)}...</h1>
                                        <h1 className='text-[15px]'>{item?.subTitle}</h1>

                                        <div className='hover:scale-95 mb-2 transition duration-1000 '>
                                            <button className='text-[#2B7FFF] hover:cursor-pointer flex items-center gap-3 text-sm '>Show More <ArrowRight className='text-[#2B7FFF]' size={18} /> </button>
                                        </div>
                                    </div>
                                </div></Link>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

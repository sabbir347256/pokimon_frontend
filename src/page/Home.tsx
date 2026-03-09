
import { BookOpen, ChevronRight } from "lucide-react";
import FeatureProducts from "../components/FeatureProducts";
import Hero from "../components/Hero";
import NewsShow from "../components/NewsShow";
import Restocks from "../components/Restocks";
import Slider from "../components/Slider";
import StoreProducts from "../components/StoreProducts";
import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <Hero></Hero>

            {/* <div className=" my-5 md:my-14">

                <Category></Category>
            </div> */}

            <div>
                <FeatureProducts></FeatureProducts>
            </div>
            <div>
                <div className="flex  justify-between gap-4 mt-10 mb-1 sm:max-w-294 px-2 mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800">ALL SETS</h1>

                    <div>
                        <Link to={'/AllSetscards'}>
                            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors">
                                View All
                                <ChevronRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
                <StoreProducts></StoreProducts>
            </div>
            <div className="sm:my-13 my-10">
                <Restocks></Restocks>
            </div>
            <div className=" my-5 sm:my-10">

                <div className="text-center mb-10">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">News & Updates</h1>
                    <p className="text-gray-600">Stay updated with the latest Pokémon card trends and releases.</p>
                </div>
                <Slider></Slider>
            </div>

            <div>
                <div className="flex flex-col items-center  space-y-2 mb-1">
                    <div className="flex items-center gap-2 text-blue-600  uppercase tracking-widest text-sm">
                        <BookOpen size={18} />
                        <span>Knowledge Base</span>
                    </div>

                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 capitalize">
                        Latest Articles
                    </h1>

                    <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <NewsShow></NewsShow>
            </div>




            {/* <div className="sm:my-13 my-10">
                <Reviews></Reviews>
            </div> */}
            {/* <div className="sm:my-17 my-10">
                <AskQuestion></AskQuestion>
            </div> */}

            {/* <div className="sm:my-17 my-10">
                <Suscribe></Suscribe>
            </div> */}

        </div>
    );
};

export default Home;
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Suscribe() {

    const [bounce, setBounce] = useState(false);

    const handleClick = () => {
        setBounce(true);
        setTimeout(() => setBounce(false), 500);
    };
    return (
        <div className="sm:max-w-294 flex justify-center items-center px-2 py-7.25 mx-auto bg-[#CBD5E1] rounded-sm">

            <div className="flex flex-col text-center  gapy-3 sm:gap-y-4  ">

                <div className="flex justify-center items-center">
                    <Mail size={40} className="text-[#3B82F6]" />
                </div>
                <h1 className="text-[16px]">Join Our Newsletter</h1>
                <h1 className="text-[18px] ">Get exclusive deals, early access to new products, and special promotions delivered to your inbox</h1>
                <div className="flex justify-center items-center">

                    <div className="flex gap-x-2">

                        <div>
                            <input className="bg-white px-6 py-3 rounded-lg" placeholder="Enter Your Email Address" type="text" />
                        </div>

                        <div>
                            <button onClick={() => handleClick()} className={`bg-[#3B82F6] text-white cursor-pointer h-full px-6 rounded-lg ${bounce ? ' animate-spin' : ''}`}>Suscribe</button>
                        </div>
                    </div>
                </div>
                <h1 className="text-sm">We respect your privacy. Unsubscribe at any time.</h1>
            </div>
        </div>
    )
}

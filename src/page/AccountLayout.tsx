import { Heart, Package, Settings, User } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";


const accountItems = [
    {
        icon: <User></User>,
        name: "Profile",
        route: 'profile-form'
    },
    {
        icon: <Package />,
        name: "Oders",
        route: "oder-history"
    },
    {
        icon: <Heart />,
        name: "Wishlist",
        route: 'wish'
    },
    {
        icon: <Settings />,
        name: "Settings",
        route: 'password'
    },

]


export default function AccountLayout() {

    const [currentClick, setCurrentclick] = useState<string>("Profile")


    return (
        <div className="sm:max-w-294 min-h-[80vh] px-2 mx-auto py-10">

            <h1 className="text-[32px] font-semibold my-5 sm:my-5">My Account</h1>
            <div className="flex sm:flex-row flex-col gap-20">
                <div className="border w-full sm:w-1/4 border-gray-300 p-2 sm:p-4 rounded-lg">

                    <div className="flex  gap-y-3 flex-col">
                        {
                            accountItems?.map((item, k) => {
                                return <Link to={`${item?.route}`} key={k}>
                                    <div onClick={() => setCurrentclick(item.name)} className={` cursor-pointer p-3 ${currentClick == item?.name ? 'bg-[#155DFC] text-white ' : "bg-white"} rounded-lg flex gap-x-2 `} >
                                        <div>
                                            {
                                                item?.icon
                                            }
                                        </div>
                                        <h1 className="text-[16px]">{item?.name}</h1>
                                    </div>
                                    </Link>
                            })
                        }
                    </div>

                </div>

                <div className="w-full sm:w-3/4">
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    )
}

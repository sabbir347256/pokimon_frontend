import { Home } from "lucide-react";


export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">

        <div className="flex flex-col gap-y-3 text-center">
            <h1 className="text-4xl sm:text-7xl text-[#155DFC]">404</h1>
            <h1 className="text-[40px] text-[#101828]">Oops! Page Not Found</h1>
            <h2 className="text-[#4A5565] text-[20px]">Looks like this Pokémon got away! The page you're looking for doesn't exist or has been moved.</h2>

            <div className="flex justify-center items-center">
                <button className="flex gap-x-2 items-center bg-[#155DFC] px-4.25 text-white rounded-lg py-3"> <Home></Home> Go to Homepage</button>
            </div>
        </div>
    </div>
  )
}

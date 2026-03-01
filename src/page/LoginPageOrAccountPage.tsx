import { Link } from "react-router";

export default function LoginPageOrAccountPage() {
    return (
        <div className='sm:max-w-294 min-h-screen flex justify-center items-center px-2 mx-auto py-10'>
            <div className="flex gap-x-5">
                <Link to={'/login'}>
                    <button className='bg-green-500 px-3 text-white\ cursor-pointer py-2 rounded-lg'>Login</button></Link>
               <Link to={'/account'}>
                <button className='bg-blue-600 px-3 py-2 text-white rounded-lg'>My Account</button></Link>
            </div>
        </div>
    )
}

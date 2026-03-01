import { motion } from 'framer-motion';
import {
    ChevronLeft,
    Mail,
    Phone,
    ShieldCheck,
    Sparkles,
    User
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';

interface TsignUp {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password : string;
    confirmPassword : string;
}


const SignUp = () => {
    // 1. Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<TsignUp>();

    // 2. Handle Form Submission
    const onSubmit = async (data: TsignUp) => {
        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Trainer Data:", data);

        // Show Success Toast
        toast.success(`Welcome to the league, ${data.firstName}!`, {
            description: "Your trainer account has been created successfully.",
            duration: 4000,
        });

        reset(); // Clear form after success
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8   ">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-5xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden "
            >
                {/* Left Panel: Brand Story (Visible on MD+) */}
                <div className="hidden md:flex md:w-[40%] bg-linear-to-br from-[#0045DE] to-[#1D3988] p-12 flex-col justify-between">
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group">
                            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold">Back to Store</span>
                        </Link>
                        <h1 className="text-4xl font-black text-white leading-tight">
                            Start Your <br />
                            <span className="text-cyan-300">Journey.</span>
                        </h1>
                        <p className="mt-4 text-blue-100/80 leading-relaxed">
                            Join the world's most secure platform for elite Pokémon collectors.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white/90">
                            <div className="p-2 bg-white/10 rounded-xl"><ShieldCheck size={20} /></div>
                            <p className="text-sm font-medium">Verified PSA/CGC Authentic</p>
                        </div>
                        <div className="flex items-center gap-4 text-white/90">
                            <div className="p-2 bg-white/10 rounded-xl"><Sparkles size={20} /></div>
                            <p className="text-sm font-medium">Priority Marketplace Access</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20
  rounded-xl p-8 sm:p-12 lg:p-8">
                    <div className="mb-10">

                        <h2 className="text-3xl font-bold text-black">Create Account</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* First Name */}
                            <div className="space-y-2">
                                <label className="text-[18px]  ml-1">First Name</label>
                                <div className="relative">
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.firstName ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                    <input
                                        {...register("firstName", { required: "First name is required" })}
                                        type="text"
                                        placeholder="Ash"
                                        className={`w-full bg-sky-50 border ${errors.firstName ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                </div>
                                {errors.firstName && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.firstName.message}</span>}
                            </div>

                            {/* Last Name */}
                            <div className="space-y-2">
                                <label className="text-[18px]  ml-1">Last Name</label>
                                <div className="relative">
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.lastName ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                    <input
                                        {...register("lastName", { required: "Last name is required" })}
                                        type="text"
                                        placeholder="Ketchum"
                                        className={`w-full bg-sky-50 border ${errors.lastName ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black  outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                </div>
                                {errors.lastName && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.lastName.message}</span>}
                            </div>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* First Name */}
                            <div className="space-y-2">
                                <label className="text-[18px]  ml-1">Password</label>
                                <div className="relative">
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.firstName ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                    <input
                                        {...register("password", { required: "password is required" })}
                                        type="password"
                                        placeholder="password"
                                        className={`w-full bg-sky-50 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                </div>
                                {errors.password && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.password.message}</span>}
                            </div>

                            {/* Last Name */}
                            <div className="space-y-2">
                                <label className="text-[18px]  ml-1">Confirm Password</label>
                                <div className="relative">
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.lastName ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                    <input
                                        {...register("confirmPassword", { required: "confirmPassword is required" })}
                                        type="password"
                                        placeholder="confirm Password"
                                        className={`w-full bg-sky-50 border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black  outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                </div>
                                {errors.confirmPassword && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.confirmPassword.message}</span>}
                            </div>
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-[18px]  ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                    })}
                                    type="email"
                                    placeholder="ash@pallettown.com"
                                    className={`w-full bg-sky-50 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                />
                            </div>
                            {errors.email && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.email.message}</span>}
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-[18px]  ml-1">Phone Number</label>
                            <div className="relative">
                                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? 'text-red-400' : 'text-slate-500'}`} size={18} />
                                <input
                                    {...register("phone", { required: "Phone number is required" })}
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className={`w-full bg-sky-50 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                />
                            </div>
                            {errors.phone && <span className="text-[10px] text-red-400 font-bold ml-1">{errors.phone.message}</span>}
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all mt-4"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign Up
                                    <Sparkles size={18} />
                                </>
                            )}
                        </button>

                        <p className="text-center text-slate-500 text-sm mt-6">
                            Already a member? <Link to="/login" className="text-blue-400 font-bold hover:text-blue-300">Login</Link>
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default SignUp;
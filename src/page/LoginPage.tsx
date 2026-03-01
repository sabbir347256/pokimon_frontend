import { motion } from "framer-motion";
import { ChevronLeft, KeyRound, LogIn, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import logo from "../assets/Logo.png";

interface TLogin {
  email: string;
  password: string;
}

const LoginPage = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLogin>();

  const onSubmit = async (data: TLogin) => {
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Welcome back!");
    console.log(data)
    navigate('/')
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center  p-4">



      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative w-full max-w-105
          bg-white
          rounded-3xl
          shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]
          p-8
        "
      >

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 transition"
        >
          <ChevronLeft size={16} />
          <span className="text-sm">Back</span>
        </Link>

        {/* Logo Section (FOCUS) */}
        <div className="flex flex-col items-center text-center mb-2">
          <div className="
            w-30 h-30
            rounded-full
            bg-white
            shadow-lg
            flex items-center justify-center
            mb-4
          ">
            <img
              src={logo}
              alt="Logo"
              className="w-full  object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Login
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Continue your journey
          </p>
        </div>

    
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div className="space-y-1.5">
            <label className="text-xl text-slate-700 ml-1">
              Email
            </label>
            <div className="relative">
              <Mail
                size={18}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? "text-red-400" : "text-slate-400"
                  }`}
              />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                type="email"
                placeholder="example@gmail.com"
                className="
                  w-full
                 bg-sky-50
            
                  rounded-xl
                  py-3.5 pl-12 pr-4
                  text-slate-900
                  outline-none
                  focus:ring-2 focus:ring-blue-500/40
                  focus:border-blue-500
                "
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xl text-slate-700 ml-1">
              Password
            </label>
            <div className="relative">
              <KeyRound
                size={18}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.password ? "text-red-400" : "text-slate-400"
                  }`}
              />
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  bg-sky-50
               
                  rounded-xl
                  py-3.5 pl-12 pr-4
                  text-slate-900
                  outline-none
                  focus:ring-2 focus:ring-blue-500/40
                  focus:border-blue-500
                "
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="
              w-full
     
              bg-linear-to-r from-blue-600 to-blue-700
              py-4
              rounded-xl
              font-bold
              flex items-center justify-center gap-2
              shadow-lg  text-white
              active:scale-[0.97]
              transition
            "
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                Enter
                <LogIn size={18} />
              </>
            )}
          </button>

          <p className="text-center text-slate-500 text-sm mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-bold hover:underline">
              Create account
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;

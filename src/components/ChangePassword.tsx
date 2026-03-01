import  { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

const   ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Lock className="text-[#3062e0]" size={24} />
        </div>
        <h2 className="text-xl    text-[#1a1a1a]">Security Settings</h2>
      </div>

      <form className="space-y-6 max-w-2xl">
        {/* Current Password */}
        <div className="space-y-2">
          <label className="text-sm    text-[#8e9aaf]">Current Password</label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter current password"
              className="w-full bg-[#f8fafc] border-0 rounded-xl px-4 py-3.5 pr-12 focus:ring-2 focus:ring-[#3062e0]/20 outline-none transition-all placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e9aaf] hover:text-[#3062e0] transition-colors"
            >
              {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <hr className="border-gray-50 my-8" />

        {/* New Password */}
        <div className="space-y-2">
          <label className="text-sm    text-[#8e9aaf]">New Password</label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Minimum 8 characters"
              className="w-full bg-[#f8fafc] border-0 rounded-xl px-4 py-3.5 pr-12 focus:ring-2 focus:ring-[#3062e0]/20 outline-none transition-all placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e9aaf]"
            >
              {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-2">
          <label className="text-sm    text-[#8e9aaf]">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat your new password"
              className="w-full bg-[#f8fafc] border-0 rounded-xl px-4 py-3.5 pr-12 focus:ring-2 focus:ring-[#3062e0]/20 outline-none transition-all placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e9aaf]"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#3062e0] hover:bg-[#254dbd] text-white    rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
          >
            Update Password
          </button>
          <button
            type="button"
            className="px-8 py-3.5 bg-white text-[#8e9aaf]    rounded-xl border border-gray-100 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default   ChangePassword;
import React, { useState } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const  ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: 'john',
    lastName: 'doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

  };

  return (
    <div className="min-h-screen  flex items-start justify-center ">
      <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-10">
        <h2 className="text-xl  text-[#2d3748] mb-8">Profile Information</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm  text-[#64748b]">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm  text-[#64748b]">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Email Row */}
          <div className="space-y-2">
            <label className="text-sm  text-[#64748b]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Phone Row */}
          <div className="space-y-2">
            <label className="text-sm  text-[#64748b]">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Address Row */}
          <div className="space-y-2">
            <label className="text-sm  text-[#64748b]">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#1d61f2] hover:bg-[#1652d1] text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default  ProfileForm;
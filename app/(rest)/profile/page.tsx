"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="w-full max-w-md  bg-white rounded-2xl  p-6">
      <h1 className="text-2xl font-black text-center mb-6">Edit Profile</h1>

      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24 mb-2">
          <Image
            src={profileImage}
            alt="Profile picture"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <label className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          Change Profile Picture
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Update
        </button>
      </form>
    </div>
  );
}

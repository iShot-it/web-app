"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Camera, Loader, Mail, Phone, User } from "lucide-react";

import { useGetUser, useUpdateProfile } from "@/app/api/user";
import LoadingSkeleton from "./loading";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateUser } from "@/types/type";
import { useToast } from "@/hooks/use-toast";
import { avatar } from "@/lib/constant";

export default function ProfilePage() {
  const { toast } = useToast();
  const { profileData, profileLoading } = useGetUser();
  console.log(profileData, "profileData");
  const [isEditing, setIsEditing] = useState(false);
  const [, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: profileData?._id,
      firstname: profileData?.firstname,
      lastname: profileData?.lastname,
      email: profileData?.email,
      phoneNumber: profileData?.phoneNumber,
      username: profileData?.username,
      photo: profileData?.photo,
    },
  });

  useEffect(() => {
    if (profileData) {
      reset({
        id: profileData._id,
        firstname: profileData.firstname,
        lastname: profileData.lastname,
        email: profileData.email,
        phoneNumber: profileData.phoneNumber,
        username: profileData.username,
        photo: profileData.photo,
      });
    }
  }, [profileData, reset]);

  const { updateprofile, isProfileUpdating } = useUpdateProfile();

  const handleOnSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    const updatedData = {
      firstname: data.firstname,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      photo: data.photo,
    };
    try {
      const response = await updateprofile(updatedData as IUpdateUser);
      if (response) {
        toast({
          description: "Profile Updated Successfully",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (profileLoading) {
    return <LoadingSkeleton />;
  }

  if (isEditing) {
    return (
      <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-2xl bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative">
                  <Image
                    src={profileData?.photo || avatar}
                    alt="Profile picture"
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                    onClick={triggerFileInput}
                  >
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Camera className="h-4 w-4" />
                  Change Profile Picture
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...register("firstname")}
                    className="mt-1 block w-full rounded-md border p-2 border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    {...register("lastname")}
                    className="mt-1 block w-full rounded-md border border-gray-700 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  {...register("username")}
                  disabled
                  className="mt-1 block w-full rounded-md border p-2 border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-md border p-2 border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber")}
                  className="mt-1 block w-full rounded-md border p-2 border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isProfileUpdating ? (
                    <Loader className="animate-spin mx-auto" />
                  ) : (
                    "Update Profile"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-2xl bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Your Profile</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img
                src={profileData?.photo || "/placeholder.svg"}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold">{profileData?.username}</h2>

            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <User className="h-5 w-5" />
                <span>
                  {profileData?.firstname} {profileData?.lastname}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>{profileData?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>{profileData?.phoneNumber}</span>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

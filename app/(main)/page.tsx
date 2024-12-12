"use client"
import Posts from "@/components/Posts/Post";
import { useAuth } from "@/context/AuthContext";
import { useGetUser } from "../api/user";
import { IUser } from "@/types/type";

export default function Home() {
  const {setLoggedInUser} = useAuth();
  const {profileData}=useGetUser()
  setLoggedInUser(profileData as IUser)

  return <Posts />;
}

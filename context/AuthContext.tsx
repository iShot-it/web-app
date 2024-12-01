"use client";

import { useGetUser } from "@/app/api/user";
import { IUser } from "@/types/type";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SignupData {
  _id: string;
  userType: string;
  permissions: any[];
  status: string;
  createdAt: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  __v: number;
  token: string;
}

interface AuthContextType {
  loggedInUser: IUser | null;
  setLoggedInUser: (loggedInUser: IUser) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { profileData, profileLoading } = useGetUser();
  const [loggedInUser, setLoggedInUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!loggedInUser && profileData && !profileLoading) {
      setLoggedInUser(profileData as IUser);
    }
  }, [profileData, profileLoading, loggedInUser]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

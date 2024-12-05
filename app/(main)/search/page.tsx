"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { avatar } from "@/lib/constant";
import { useFriendsSearch } from "@/app/api/friends";
import { User } from "@/types/type";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [invitedUsers, setInvitedUsers] = useState<Set<string>>(new Set());
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // const { searchResult } = useFriendsSearch({ search: searchQuery });
  console.log(searchQuery, "searchQuery");
  // console.log(searchResult, "searchResult");
  const { searchFriend } = useFriendsSearch();
  // const filteredUsers = users.filter((user) =>
  //   user.username.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleInvite = (userId: string) => {
    setInvitedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const handleFriendSearch = async ({
    search: searchQuery,
  }: {
    search: string;
  }) => {
    if (!searchQuery) {
      return;
    }
    const response = await searchFriend({ search: searchQuery });
    setFilteredUsers(response.data);
    console.log(response, "response");
  };

  useEffect(() => {
    handleFriendSearch({ search: searchQuery });
  }, [searchQuery]);

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Find Friends
        </h1>

        {/* Search Input */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                     transition-all duration-200 shadow-sm hover:shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 inset-y-0 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Users List */}
        <div className="space-y-3">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between p-4 bg-white rounded-xl 
                       shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={user.photo || avatar}
                    alt={user.username}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-gray-800">
                  {user.username}
                </span>
              </div>
              <button
                onClick={() => handleInvite(user._id)}
                className={`px-2 text-xs md:text-base md:px-6 py-2 rounded-full font-medium transition-all duration-200 
                          ${
                            invitedUsers.has(user._id)
                              ? "bg-green-50 text-green-600 hover:bg-green-100"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
              >
                {invitedUsers.has(user._id) ? "Invited" : "+ Invite"}
              </button>
            </div>
          ))}

          {searchQuery && filteredUsers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No users found matching {searchQuery}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

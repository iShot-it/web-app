"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { avatar } from "@/lib/constant";

interface Friend {
  id: string;
  name: string;
  avatar: string;
}

interface FriendsListProps {
  user: {
    name: string;
    avatar: string;
  };
  friends: Friend[];
}

export default function SuggestedFriendsList({
  user,
  friends,
}: FriendsListProps) {
  console.log(user);
  return (
    <div className="w-full max-w-xs bg-white rounded-lg  border border-gray-200 ">
      {/* Friends Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          Suggested friends
        </h3>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src={friend.avatar || avatar}
                  alt={friend.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900">{friend.name}</div>
                <div className="text-sm text-gray-500 cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="focus:border-none focus:outline-none">
                      Add Friend
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="bg-white">
                        <div
                          className="flex items-center justify-between gap-3 p-4 bg-white rounded-xl 
                         duration-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden ">
                              <Image
                                src={avatar}
                                alt={"friends"}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-gray-800">
                              Mark Henry
                            </span>
                          </div>
                          <button
                            // onClick={() => handleInvite(user.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-200  bg-blue-600 text-white hover:bg-blue-700`}
                          >
                            + Invite
                          </button>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

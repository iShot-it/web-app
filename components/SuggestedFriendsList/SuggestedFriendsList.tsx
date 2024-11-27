"use client";

import Image from "next/image";

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
  console.log(user)
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
                  src={friend.avatar}
                  alt={friend.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{friend.name}</p>
                <p className="text-sm text-gray-500 cursor-pointer">
                  Add Friend
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

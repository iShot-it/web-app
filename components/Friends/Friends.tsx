"use client";
import React from "react";

import FriendsList from "../FriendList/FriendsList";
import SuggestedFriendsList from "../SuggestedFriendsList/SuggestedFriendsList";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { useGetFriendsList } from "@/app/api/friends";
import { avatar } from "@/lib/constant";

const Friends = () => {
  const [showScrollbar, setShowScrollbar] = React.useState(false);

  const { friendsList } = useGetFriendsList();

  const userData = {
    name: "Henry_Mark",
    avatar,
  };

  const friendsData = [
    {
      id: "1",
      name: "Bestie",
      avatar,
    },
    {
      id: "2",
      name: "Daniella_u",
      avatar,
    },
    {
      id: "3",
      name: "Promise",
      avatar,
    },
    {
      id: "4",
      name: "Victoeria",
      avatar,
    },
    {
      id: "5",
      name: "Curiosita",
      avatar,
    },
  ];

  return (
    <div
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
      className={cn(
        "h-screen sticky top-0 right-0  border-l bg-white pb-10 space-y-6 px-6 ",
        {
          "overflow-auto": showScrollbar,
          "overflow-hidden": !showScrollbar,
        }
      )}
    >
      <FriendsList user={userData} friends={friendsList || []} />
      <Separator />
      <SuggestedFriendsList user={userData} friends={friendsData} />
    </div>
  );
};

export default Friends;

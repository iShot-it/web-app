"use client";
import React from "react";

import FriendsList from "../FriendList/FriendsList";
import SuggestedFriendsList from "../SuggestedFriendsList/SuggestedFriendsList";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { useGetFriendsList } from "@/app/api/friends";

const Friends = () => {
  const [showScrollbar, setShowScrollbar] = React.useState(false);

  const { friendsList, isFetchingFriendList } = useGetFriendsList();
  console.log(friendsList, "friendsList");
  const avatar =
    "https://ik.imagekit.io/0xy9wqmrh/749b0a25645533031bc51d31b04e30c7_Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piTzbG8vtmDMTxxkLquucNCwVqtFolWHy4KsM991~jm7oXH24USgwTrWdQHMuZSqjXXRWg0Dfc1EvnNSmn5hsZN5GJxvGS1xM1snOQ~mNkLa8Vt5XsU054h7zEmPD3glptHBiNoj0LJ~F0Z07sfdE2J1SIuH9FQwgB6vrU9VBTiT1~A9svaFCtKuJ2xsj3buGe8cbfrtaZlculwjTdiE5MBKpnwWQmRHLMa5s7izSVhTqfJBQiROsHcpEbdyJ6WJ~G~RnutnKOCGZS6lUNTu0WfJdQl7DLdpt3teTSerLAC8kJR9YoWwvLYlEUcQR9Bmz-~BKWxMFVw6jeYwtkrwJQ__?updatedAt=1730200589644";

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

import { avatar } from "@/lib/constant";
import Image from "next/image";

interface NotificationItem {
  id: string;
  username: string;
  action: string;
  avatar: string;
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    username: "Bestie",
    action: "Liked your post",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    username: "Daniella_u",
    action: "Commented on your post",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    username: "Promise",
    action: "Reposted your post",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    username: "Victoeria",
    action: "Commented on your post",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    username: "Curiosita",
    action: "Liked your post",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
export default function Notification() {
  return (
    <div className="w-full  bg-white  rounded-lg overflow-hidden">
      <div className="px-6 py-4 ">
        <h1 className="text-2xl font-black  text-center">Notifications</h1>
      </div>
      <div className="">
        {notifications.map((notification) => (
          <div key={notification.id} className="px-6">
            <NotificationItem {...notification} />
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationItem({ username, action }: NotificationItem) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image src={avatar} alt={username} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{username}</span>
        <span className="text-sm text-gray-500">{action}</span>
      </div>
    </div>
  );
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { avatar } from '@/lib/constant'
import { useGetUser } from "@/app/api/user";

interface Contact {
  id: string;
  name: string;
  image: string;
}

const contacts: Contact[] = [
  { id: "1", name: "Bestie", image: "/placeholder.svg?height=40&width=40" },
  { id: "2", name: "Daniella_u", image: "/placeholder.svg?height=40&width=40" },
  { id: "3", name: "Promise", image: "/placeholder.svg?height=40&width=40" },
  { id: "4", name: "Victooria", image: "/placeholder.svg?height=40&width=40" },
  { id: "5", name: "Curiosita", image: "/placeholder.svg?height=40&width=40" },
];

export default function MessagesPage() {
  const { profileData } = useGetUser();
  const [hasMessages] = useState(true); // Toggle this to show empty state

  if (!hasMessages) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-sm text-center space-y-4">
          <div className="flex justify-center">
            <MessageCircle className="w-16 h-16 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">
            Your messages appear here. Chat with your friends
          </p>
        </div>
      </div>
    );
  }

  const imageUrl =
    profileData?.photo && profileData.photo !== "null"
      ? profileData.photo
      : avatar;

  return (
    <div className="min-h-screen ">
      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-sm">
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src={imageUrl}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              {profileData?.username}
            </h1>
          </div>
        </div>

        {/* Messages List */}
        <div className="p-2">
          <h2 className="text-xl font-bold px-2 py-4">Messages</h2>
          <div className="space-y-1">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={avatar}
                    alt={contact.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {contact.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
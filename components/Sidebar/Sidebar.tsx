"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Users,
  MessageCircle,
  Monitor,
  Camera,
  DollarSign,
  Menu,
  BellDotIcon,
  User,
} from "lucide-react";
import Image from "next/image";

import Ishot from "@/assets/ishot.svg";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Search className="w-6 h-6" />,
    label: "Search",
    href: "/search",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "About iShot-ft",
    href: "/about",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    label: "Premium",
    href: "/premium",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: "Monetise",
    href: "/monetise",
  },
  {
    icon: <BellDotIcon className="w-6 h-6" />,
    label: "Notification",
    href: "/notification",
  },
  {
    icon: <User className="w-6 h-6" />,
    label: "Profile",
    href: "/profile",
  },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`sticky top-0 left-0 h-screen transform md:translate-x-0 transition duration-200 ease-in-out z-30 max-w-[320px] w-full bg-white  border-r`}
      >
        {/* Logo */}
        <div className="py-2">
          <Image
            src={Ishot}
            alt="Ishot"
            className="mx-auto"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 py-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-150"
            >
              {item.icon}
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

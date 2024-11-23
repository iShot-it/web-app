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
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div className=" bg-white shadow-lg min-h-screen flex flex-col ">
        {/* Logo */}
        <div className="p-6">
          <Image src={Ishot} alt="Ishot" className="mx-auto" />
        </div>

        {/* Navigation */}
        <nav className="px-4 py-2 space-y-2">
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

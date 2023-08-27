// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import menu from "../../public/menu.svg";

export default function Navbar() {
  const avatarUrl = "https://avatars.dicebear.com/api/croodles/stefan.svg";

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="flex space-x-4">
        <Link href="/search" className="text-gray-600 hover:text-gray-800">
          Search
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-800">
          Discuss <span className="text-xs text-gray-400">(Coming Soon)</span>
        </Link>
        {/* <Link href="/plans" className="text-gray-600 hover:text-gray-800">
          My Plans
        </Link>
        <Link href="/budget" className="text-gray-600 hover:text-gray-800">
          My Budget & Forecast
        </Link>
        <Link href="/network" className="text-gray-600 hover:text-gray-800">
          Expert Network
        </Link> */}
      </div>
      <div className="flex items-center space-x-2">
        <Image
          src={avatarUrl}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <button className="text-gray-600 hover:text-gray-800">
          <Image src={menu} alt="Menu" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
}

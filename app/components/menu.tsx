'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus, Bug, Layers, Bell, User, Home, ChevronDown, X } from 'lucide-react';

export default function MainNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', icon: <Home className="w-[36px] h-[36px]" /> },
    { label: 'Bugs', href: '/bugs', icon: <Bug className="w-[36px] h-[36px]" /> },
    { label: 'Epics', href: '/epics', icon: <Layers className="w-[36px] h-[36px]" /> },
  ];

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed top-0 left-0 h-full transition-all duration-300 z-20 bg-[#282828] text-white shadow-lg overflow-y-auto ${
        isExpanded ? 'w-[375px]' : 'w-[80px]'
      }`}
    >
      <div className={`flex gap-2 px-6 py-4 ${isExpanded ? 'justify-center' : 'items-center'}`}>
        <div className="flex items-center justify-center text-black font-bold bg-white rounded-full w-8 h-8 min-w-[2rem] min-h-[2rem]">
          AS
        </div>
        {isExpanded && (
          <span className="text-lg transition-all duration-300 opacity-100">Agile Studio</span>
        )}
      </div>

      {/* Search Bar */}
      <div
        className={`px-6 pb-2 transition-all ${
          isExpanded ? 'opacity-100 h-auto' : 'opacity-100 h-[36px] flex items-center justify-center'
        }`}
      >
        <div className="relative w-[331px]">
          <input
            type="text"
            placeholder="Search…"
            className={`w-full ${isExpanded ? 'pl-12 pr-4' : 'hidden'} h-[36px] rounded-full bg-[#353636] placeholder-gray-400 italic text-white transition-all duration-300`}
          />
          <div className={`absolute inset-y-0 left-0 flex items-center ${isExpanded ? 'pl-3' : 'justify-center w-full'}`}>
            <svg className="w-[36px] h-[36px] text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-start ${isExpanded ? 'gap-3' : 'gap-0'} pl-0 pr-4 py-2 transition-all hover:text-blue-500`}
          >
            <span className={`h-[36px] flex items-center ${isExpanded ? 'ml-[22px] mr-[22px] w-[36px] justify-start' : 'w-[80px] ml-[22px] mr-[22px] justify-center'}`}>{icon}</span>
            <span
              className={`text-lg transition-all duration-300 ${
                isExpanded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Create Menu */}
      <div className="flex flex-col w-full transition-all duration-300">
        <button
          onClick={() => setShowCreateMenu((prev) => !prev)}
          className="flex items-start justify-between py-2 pl-0 pr-4 transition-all w-full text-lg hover:text-blue-500 cursor-pointer"
          aria-haspopup="menu"
          aria-expanded={showCreateMenu}
        >
          <div className={`flex items-start ${isExpanded ? 'gap-3' : 'gap-0'}`}>
            <span className={`w-[36px] h-[36px] flex items-center ${isExpanded ? 'ml-[22px] mr-[22px] justify-start' : 'w-[80px] justify-center'}`}>
              <Plus className="w-[36px] h-[36px]" />
            </span>
            <span
              className={`transition-all duration-300 ${
                isExpanded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Create
            </span>
          </div>
          {isExpanded && (
            <span className="ml-auto mr-6">
              {showCreateMenu ? (
                <X className="w-[36px] h-[36px]" />
              ) : (
                <ChevronDown className="w-[36px] h-[36px]" />
              )}
            </span>
          )}
        </button>

        {showCreateMenu && isExpanded && (
          <div className="flex flex-col gap-1 mt-0 bg-black py-2 w-full">
            <button
              className="ml-[80px] w-full text-left px-4 py-2 rounded hover:text-blue-500 text-lg font-medium cursor-pointer"
              onClick={() => router.push('/bugs')}
            >
              Create Bug
            </button>
            <button
              className="ml-[80px] w-full text-left px-4 py-2 rounded hover:text-blue-500 text-lg font-medium cursor-pointer"
              onClick={() => router.push('/epics')}
            >
              Create Epic
            </button>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Utilities Container to stick to bottom */}
      <div className="absolute bottom-0 w-full">
  <div className="h-[1px] bg-gray-700 shadow-inner mx-4" />
  <div className="flex flex-col items-start gap-1 p-0 bg-[#282828]">
    <Link href="/notifications" className={`flex items-start ${isExpanded ? 'gap-3' : 'gap-0'} pl-0 pr-4 py-2 transition-all hover:text-blue-500 w-full`}>
      <span className={`h-[36px] flex items-center ${isExpanded ? 'ml-[22px] mr-[22px] w-[36px] justify-start' : 'ml-[22px] justify-start'}`}>
        <Bell className="w-[36px] h-[36px] hover:text-blue-500 cursor-pointer" />
      </span>
      <span className={`text-lg transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Notifications</span>
    </Link>
    <Link href="/profile" className={`flex items-start ${isExpanded ? 'gap-3' : 'gap-0'} pl-0 pr-4 py-2 transition-all hover:text-blue-500 w-full`}>
      <span className={`h-[36px] flex items-center ${isExpanded ? 'ml-[22px] mr-[22px] w-[36px] justify-start' : 'ml-[22px] justify-start'}`}>
        <User className="w-[36px] h-[36px] hover:text-blue-500 cursor-pointer" />
      </span>
      <span className={`text-lg transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Profile</span>
    </Link>
  </div>
</div>
</aside>
  );
}

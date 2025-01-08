import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img src="/Logo Horiz.png" alt="Scenebud Logo" className="w-[300px] h-auto" />
            </Link>
            <div className="relative w-[400px]">
              <Search className="absolute left-3 top-2.5 text-purple-700 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events, artists, venues..."
                className="w-full pl-10 pr-4 py-2 border border-purple-700 rounded-lg text-purple-700 placeholder-purple-400"
              />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-purple-700 hover:underline">Home</Link>
            <Link href="/dashboard" className="text-purple-700 hover:underline">Dashboard</Link>
            <Link href="/events" className="text-purple-700 hover:underline">Events</Link>
            <Link href="/login" className="text-purple-700 hover:underline">Log in</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
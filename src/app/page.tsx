import React from 'react';
import { ArrowRight, Calendar, MapPin, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <Link href="/login" className="text-purple-700 hover:underline">Log In</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl text-purple-700 font-light leading-tight">
              We help music fans<br />
              discover the best live music<br />
              by being the only place to list<br />
              <strong>every gig, everywhere.</strong>
            </h1>
            
            {/* Quick Search Bar */}
            <div className="max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-purple-700 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Search events, artists, venues..."
                  className="w-full pl-10 pr-4 py-2 border border-purple-700 rounded-lg text-purple-700 placeholder-purple-400"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
          <img src="/Header Square.png" alt="Scenebud Logo" className="w-[500px] h-auto" />
          </div>
        </div>
      </section>

      {/* Industry Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {/* For Artists */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-700 transition-colors">
              <Users className="w-8 h-8 text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">For Artists</h3>
              <p className="text-gray-600 mb-4">Create your artist profile and reach more fans.</p>
              <a href="/artistsubmit" className="text-purple-700 hover:underline flex items-center gap-2">
                Create Artist Profile <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* For Venues */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-700 transition-colors">
              <Building2 className="w-8 h-8 text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">For Venues</h3>
              <p className="text-gray-600 mb-4">Highlight your venue and promote your events.</p>
              <a href="/venuesubmit" className="text-purple-700 hover:underline flex items-center gap-2">
                Create Venue Profile <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* For Promoters */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-700 transition-colors">
              <Calendar className="w-8 h-8 text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">For Promoters</h3>
              <p className="text-gray-600 mb-4">List your events and sell your tickets.</p>
              <a href="/eventsubmit" className="text-purple-700 hover:underline flex items-center gap-2">
                Submit an Event <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-purple-700 mb-8">
            Find out who's playing before anyone else does
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="hello@example.com"
                className="flex-1 max-w-md px-4 py-2 border border-purple-700 rounded-lg text-purple-700"
              />
              <button 
                className="px-6 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors"
              >
                Join our mailing list
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex justify-center items-center gap-8">
            <li><a href="/" className="text-purple-700 hover:underline">Scenebud.com</a></li>
            <li><a href="/"><img src="/Logo Horiz.png" alt="Scenebud Logo" className="w-[150px] h-auto" /></a></li>
            <li><a href="mailto:hello@scenebud.com" className="text-purple-700 hover:underline">Contact Me</a></li>
            <li><a href="https://www.instagram.com/scenebud/" className="text-purple-700 hover:underline">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

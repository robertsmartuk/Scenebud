import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex justify-center items-center gap-8">
          <li><Link href="/" className="text-purple-700 hover:underline">Scenebud.com</Link></li>
          <li><Link href="/"><img src="/Logo Horiz.png" alt="Scenebud Logo" className="w-[150px] h-auto" /></Link></li>
          <li><a href="mailto:hello@scenebud.com" className="text-purple-700 hover:underline">Contact Me</a></li>
          <li><a href="https://www.instagram.com/scenebud/" className="text-purple-700 hover:underline">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
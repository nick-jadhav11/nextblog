'use client';
import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; // Hamburger + Close icons
import Logo from '@/Assets/logo.avif';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        <Image src={Logo} alt="Logo" className="w-28 h-auto" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex justify-between items-center space-x-4 text-white">
          {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map((item, i) => (
            <li
              key={i}
              className="p-[10px_20px] rounded-full hover:bg-amber-400 hover:text-zinc-950 transition-all"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Get Started button */}
        <button className="hidden md:block bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-500 transition">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 text-white px-4 pt-4 pb-6 space-y-4">
          {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded hover:bg-amber-400 hover:text-zinc-900 transition-all"
            >
              {item}
            </div>
          ))}
          <button className="w-full bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-500 transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;

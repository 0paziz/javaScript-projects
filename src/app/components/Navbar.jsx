'use client'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 px-6 md:px-24 py-4 shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">JS Projects</h1>

        {/* Hamburger button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#home" className="text-white hover:text-blue-500">Home</a>
          <a href="#projects" className="text-white hover:text-blue-500">Projects</a>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col mt-3 gap-2 md:hidden">
          <a href="#home" className="text-white hover:text-blue-500">Home</a>
          <a href="#projects" className="text-white hover:text-blue-500">Projects</a>
        </div>
      )}
    </nav>
  );
}

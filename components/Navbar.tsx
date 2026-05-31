"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="font-bold text-lg">
          Mountain of Breakthrough Church
        </h1>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="#map" className="hover:text-blue-600">Location</a>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="#map" className="hover:text-blue-600">Location</a>
        </div>
      )}

    </nav>
  );
}
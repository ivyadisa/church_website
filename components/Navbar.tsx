"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      {/* MAIN NAV BAR */}
      <div className="flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <h1 className="font-bold text-lg">
          Mountain of Breakthrough Church
        </h1>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#map" className="hover:text-blue-600">Location</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

      </div>

      {/* MOBILE MENU (VISIBLE WHEN OPEN) */}
      {open && (
        <div className="md:hidden flex flex-col bg-white border-t px-4 py-3 space-y-3 shadow-md">

          <a onClick={() => setOpen(false)} href="#">Home</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#map">Location</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}
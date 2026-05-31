"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-3">

        <h1 className="font-bold text-lg text-gray-900">
          Mountain of Breakthrough Church
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-900"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#map" className="hover:text-blue-600">Location</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 space-y-4">

          <a
            onClick={() => setOpen(false)}
            href="#"
            className="block text-gray-900 font-semibold text-lg hover:text-blue-600"
          >
            Home
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#services"
            className="block text-gray-900 font-semibold text-lg hover:text-blue-600"
          >
            Services
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#map"
            className="block text-gray-900 font-semibold text-lg hover:text-blue-600"
          >
            Location
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="block text-gray-900 font-semibold text-lg hover:text-blue-600"
          >
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}
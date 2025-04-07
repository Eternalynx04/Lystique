// src/layout/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">Lystique</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-fuchsia-400 transition">Feed</li>
        <li className="hover:text-fuchsia-400 transition">My List</li>
        <li className="hover:text-fuchsia-400 transition">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;

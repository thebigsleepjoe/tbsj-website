"use client";

import React, { useState } from "react";
import {
  faAddressBook,
  faBars,
  faBook,
  faCodeBranch,
  faMoon,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: IconDefinition;
  text: string;
}) {
  return (
    <a
      href={href}
      className="block text-lg no-underline text-gray-400 hover:text-gray-100 py-2 sm:inline-block sm:ml-5"
    >
      <FontAwesomeIcon icon={icon} />
      <span className="ml-2">{text}</span>
    </a>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Adjusted gradient overlay */}
      <div className="h-8 absolute inset-x-0 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900/50 pointer-events-none">
      </div>

      <nav className="bg-gradient-to-r from-gray-900 to-sky-950 font-sans px-6 shadow w-full z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl no-underline text-gray-400 hover:text-blue-dark"
            >
              <FontAwesomeIcon icon={faMoon} />
              <span className="ml-2">bigsleepjoe.com</span>
            </a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-100 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="hidden sm:flex">
            <NavbarItem href="#" text="About" icon={faBook} />
            <NavbarItem href="#" text="Contact" icon={faAddressBook} />
            <NavbarItem
              href="https://www.github.com/thebigsleepjoe"
              text="GitHub"
              icon={faCodeBranch}
            />
          </div>
        </div>
        {/* Mobile menu, toggleable */}
        {isOpen && (
          <div className="sm:hidden">
            <NavbarItem href="#" text="About" icon={faBook} />
            <NavbarItem href="#" text="Contact" icon={faAddressBook} />
            <NavbarItem
              href="https://www.github.com/thebigsleepjoe"
              text="GitHub"
              icon={faCodeBranch}
            />
          </div>
        )}
      </nav>
    </div>
  );
}

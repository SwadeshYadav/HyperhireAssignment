"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <section className="h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Hyperhire */}
          <div className="flex items-center">
            <Image
              src="https://hyperhire.in/logo.svg"
              alt="Hyperhire Logo"
              width={180} 
              height={40} 
              className="md:h-7 h-6" 
            />
          </div>

          <nav className="relative">
            {/* Mobile menu toggle */}
            <div className="block sm:hidden mr-2">
              <a
                id="nav-toggle"
                href="#!"
                className="p-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`block w-6 h-1 bg-white mb-1 transition-transform duration-300 ${
                    isOpen ? "transform rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-1 bg-white transition-transform duration-300 ${
                    isOpen ? "transform -rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block mt-1 w-6 h-1 bg-white transition-transform duration-300 ${
                    isOpen ? "transform -rotate-45" : ""
                  }`}
                ></span>
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex space-x-8">
              {/* Employment Section with Dropdown */}
              <li className="relative group">
                <a
                  href="#!"
                  className="text-white text-[19px] px-5 py-3 block"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen); 
                  }}
                >
                  Employment ▾
                </a>
                <ul className={`absolute bg-white shadow-lg z-10 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                  <li>
                    <a
                      href="#!"
                      className="block px-5 py-2 text-black hover:bg-gray-200 "
                    >
                      Remote recruitment of overseas developers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="block px-5 py-2 text-black hover:bg-gray-200"
                    >
                      Remote recruitment of foreigners (non-development occupations)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="block px-5 py-2 text-black hover:bg-gray-200"
                    >
                      Hiring foreigners who can speak Korean
                    </a>
                  </li>
                </ul>
              </li>

              {/* Overseas Developer Utilization Service */}
              <li>
                <a
                  href="#!"
                  className="text-white md:text-[19px] text-[12px]  px-5 py-3 block"
                >
                  Overseas developer utilization service
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-cyan-500 bg-white rounded hover:bg-gray-50 md:text-[19px] text-[12px] px-2 py-1 mt-2 block"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Full-screen Drawer */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col ml-4 space-y-5 mt-10">
          {/* Drawer Items */}
          <div className="relative">
            <button
              className="text-gray-700 md:text-xl text-[18px]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown in mobile drawer
            >
              Employment ▾
            </button>
            <ul className={`absolute bg-white shadow-lg z-10 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li>
                <a
                  href="#!"
                  className="block px-5 py-2 text-black hover:bg-gray-200"
                >
                  Remote recruitment of overseas developers
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block px-5 py-2 text-black hover:bg-gray-200"
                >
                  Remote recruitment of foreigners (non-development occupations)
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block px-5 py-2 text-black hover:bg-gray-200"
                >
                  Hiring foreigners who can speak Korean
                </a>
              </li>
            </ul>
          </div>
          <a href="#!" className="md:text-xl text-[18px] text-gray-700">
            Overseas developer utilization service
          </a>
          <a href="#!" className="md:text-xl text-[18px] text-gray-700">
            Contact us
          </a>
        </nav>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className="flex justify-between items-center py-[10px] px-[120px] tablet:py-[25px] tablet:px-[50px] mobile:py-[20px] mobile:px-[20px] bg-black text-white">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.jpg" alt="Company Logo" className="h-10" />
        </Link>
      </div>
      <div className="tablet:flex mobile:flex hidden hamburger-icon">
        <button className="relative group" onClick={toggleModal}>
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-white h-[1px] rounded"></div>
              <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>
      <ul className="flex tablet:hidden mobile:hidden list-text gap-14">
        <li className="text-[1.0248901903vw] font-bold relative text-effect">
          <Link href="/" className="link">
            Services
          </Link>
        </li>
        <li className="text-[1.0248901903vw] font-bold relative text-effect">
          <Link href="/about" className="link">
            Our Work
          </Link>
        </li>
        <li className="text-[1.0248901903vw] font-bold relative text-effect">
          <Link href="/about" className="link">
            About Us
          </Link>
        </li>
        <li className="text-[1.0248901903vw] font-bold relative text-effect">
          <Link href="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-center z-50 transition-opacity duration-300 ease-in-out slide-in"
          style={{ backgroundImage: "url('/modal-bg.jpg')" }}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleModal}
          >
            &times;
          </button>
          <div className="flex flex-col mobile:justify-around tablet:flex-row tablet:items-center tablet:justify-between w-full h-full max-w-[1200px] p-6">
            <ul className="flex flex-col items-center text-white gap-6 tablet:w-1/2 tablet:items-start">
              <li className="text-2xl hover:text-[#41E1DB] font-bold">
                <Link href="/" onClick={toggleModal}>
                  Services
                </Link>
              </li>
              <li className="text-2xl hover:text-[#41E1DB] font-bold">
                <Link href="/about" onClick={toggleModal}>
                  Our Work
                </Link>
              </li>
              <li className="text-2xl hover:text-[#41E1DB] font-bold">
                <Link href="/about" onClick={toggleModal}>
                  About Us
                </Link>
              </li>
              <li className="text-2xl hover:text-[#41E1DB] font-bold">
                <Link href="/contact" onClick={toggleModal}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="text-2xl flex flex-col items-center mobile:items-start tablet:items-start tablet:w-1/2 tablet:text-left">
              <div className="text-5xl mb-4">
                Craft your success story with us where your dreams meet our
                expertise
              </div>
              <span className="text-[#41e1db]">Let's Connect</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

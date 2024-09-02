import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[10px] px-[120px] bg-black text-white">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.jpg" alt="Company Logo" className="h-10" />
        </Link>
      </div>
      <ul className="flex list-text gap-14">
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
    </nav>
  );
};

export default Navbar;

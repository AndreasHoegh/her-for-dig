import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-12 bg-red-600 text-white px-4 font-bold">
      {/* Centreret menu for større skærme */}
      <ul className="hidden md:flex justify-center items-center flex-grow space-x-4">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Bliv frivillig
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Få hjælp
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Nyheder
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Om os
          </Link>
        </li>
      </ul>

      {/* Sørger for, at FaBars er yderst til højre */}
      <div className="md:hidden ml-auto" onClick={handleClick}>
        {!nav ? (
          <FaBars className="text-2xl text-white" />
        ) : (
          <FaTimes className="text-2xl text-white" />
        )}
      </div>

      {/* Mobilmenu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-red-600 flex flex-col justify-center items-center ${
          !nav ? "hidden" : ""
        }`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

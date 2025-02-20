import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const linkStyle = "text-white font-bold hover:text-[#8ed081]";
  const mobileLinkStyle = "p-2 hover:text-teal-600";

  return (
    <nav className="top-0 z-10 absolute w-full font-serif ">
      <div className="flex m-6 md:m-10 h-10 [text-shadow:_0px_0px_8px_rgba(0,0,0,0.72)]">
        <div className="flex items-center w-full">
          <div>
            <NavLink to="/home">
              <div className="mt-5 pr-4 pl-4 pt-3 pb-3 text-xl leading-none bg-green-900 text-white">
                BAM
                <br />
                BINA
                <div className="text-sm">ponsonby</div>
              </div>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-10 justify-center w-full text-xl">
            <NavLink to="/home" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/food" className={linkStyle}>
              Food
            </NavLink>
            <NavLink to="/drink" className={linkStyle}>
              Drink
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className="md:hidden z-10 flex items-center"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          {menuToggle ? (
            <FaTimes size={40} color="white" />
          ) : (
            <RxHamburgerMenu size={40} color="white" />
          )}
        </div>
      </div>

      {/* mobile menu items */}
      <div
        className={` ${
          menuToggle
            ? "text-white opacity-90 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex
        flex-col justify-center items-center text-2xl`}
        onClick={() => setMenuToggle(false)}
      >
        <NavLink to="/home" className={mobileLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/food" className={mobileLinkStyle}>
          Food
        </NavLink>
        <NavLink to="/drink" className={mobileLinkStyle}>
          Drink
        </NavLink>
        <NavLink to="/contact" className={mobileLinkStyle}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

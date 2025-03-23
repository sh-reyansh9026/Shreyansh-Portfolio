import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // {Link} is used to navigate other parts of the page
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          {/* // above code provides a navigation bar which has clickable logo and on clicking on logo
          it resets the active state and scrolls to the top of the page */}
          <p
            className="text-white text-[18px] 
          font-bold cursor-pointer flex"
          >
            Shreyansh &nbsp;
            <span className="block">| Developer</span>
          </p>
        </Link>

        {/* list-none it will remove all styling like bullets from ul */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {/* here map is used to traverse each link and checks if link is active or not
           if active then convert text color to white 
           else to secondary */}
          {/* Changes the mouse pointer to a hand cursor (used to indicate a clickable element) */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }   
                hover:text-white text-[18px] font-medium cursor-pointer
            `}
              onClick={() => setActive(link.title)}
            >
              {/* here on above line it sets to activate link on clicking */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* here menu bar is given so that if screen is medium or smaller 
        then home, about, work, contact everything will come upon clicking
         the menu that is why md:hidden is given which means for medium and 
         smaller screens, the menu bar is hidden */}
        {/* src={toggle ? close : menu} this line tells if toggle is true then show close option otherwise menu option */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} 
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2
            min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* here map is used to traverse each link and checks if link is active or not
           if active then convert text color to white 
           else to secondary */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                font-poppins font-medium cursor-pointer
            `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {/* here on above line it sets to activate link on clicking */}
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

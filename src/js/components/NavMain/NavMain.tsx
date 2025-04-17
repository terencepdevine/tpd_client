import { useState, useEffect, useRef } from "react";

import NavMainItem from "./NavMainItem";
import IconGithub from "../icons/IconGithub/IconGithub";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavMain = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setIsActive((s) => !s);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    const handleScroll = () => {
      setIsActive(false);
    };

    if (isActive) {
      document.addEventListener("mousedown", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <nav className="relative">
      <button className="button button--icon lg:hidden!" onClick={handleClick}>
        {isActive ? (
          <XMarkIcon className="h-5 w-5 fill-amber-300" />
        ) : (
          <Bars3Icon className="h-5 w-5 fill-amber-300" />
        )}
      </button>
      <ul
        ref={menuRef}
        className={`nav-main-list absolute top-full right-0 mt-8 min-w-max flex-col justify-end gap-3 bg-sky-950 p-6 lg:static lg:mt-0 lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:py-2 ${
          isActive ? "flex" : "hidden"
        } items-end lg:flex`}
      >
        {/* <NavMainItem to="/about" onClick={handleClick}>
          About
        </NavMainItem> */}
        <NavMainItem to="/projects" onClick={handleClick}>
          Work
        </NavMainItem>
        <NavMainItem to="/posts" onClick={handleClick}>
          Blog
        </NavMainItem>
        <NavMainItem
          download="/docs/terencepdevine_resume.pdf"
          icon={<ArrowDownTrayIcon className="h-6 w-6 fill-sky-100" />}
          onClick={handleClick}
        >
          Resume
        </NavMainItem>
        <NavMainItem
          to="https://github.com/terencepdevine"
          target="_blank"
          onClick={handleClick}
        >
          <IconGithub />
          <span className="gradient-action lg:hidden">Github</span>
        </NavMainItem>
      </ul>
    </nav>
  );
};

export default NavMain;

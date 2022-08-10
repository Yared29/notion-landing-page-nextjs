import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center pb-8">
      <div className="flex items-center">
        <div className="pr-4 pt-2">
          <Image src="/logo.svg" alt="logo" width="64" height="30" />
        </div>
        <div>
          <ul className="flex space-x-2">
            <NavItem title="Product" />
            <NavItem title="Download" />
            <NavItem title="Solutions" />
            <NavItem title="Resources" />
            <NavItem title="Pricing" />
          </ul>
        </div>
      </div>
      <ul className="flex  items-center space-x-2">
        <NavItem title="Contact sales" />
        <NavItem title="Login" />
        <li className="rounded font-semibold border-x m-1 border-gray300 cursor-pointer bg-red-500 text-gray-200 p-1 text-xs hover:bg-red-600 ">
          Try Notion free
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

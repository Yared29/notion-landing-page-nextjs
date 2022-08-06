import React from "react";

const NavItem = ({ title }) => {
  return (
    <li className="text-xs font-semibold text-gray-700 px-2 py-1 hover:bg-gray-100 rounded transition-colors duration-100 hover:cursor-pointer">
      {title}
    </li>
  );
};

export default NavItem;

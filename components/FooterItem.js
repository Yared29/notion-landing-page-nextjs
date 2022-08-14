import React from "react";

const FooterItem = ({ data }) => {
  const { title, links } = data;
  return (
    <div>
      <div className="text-xs font-semibold text-black">{title}</div>
      {links.map((link) => (
        <div
          key={link.title}
          className="text-xs text-gray-500 pt-1 hover:text-red-500 hover:underline hover:cursor-pointer"
        >
          {link.title}
        </div>
      ))}
    </div>
  );
};

export default FooterItem;

import React from "react";
import Image from "next/image";

const TestimonyCard = ({ testimony }) => {
  const { imageUrl, imageWidth, userImageUrl, desc, name, role } = testimony;
  return (
    <div className="max-w-xs">
      <div>
        <Image src={imageUrl} height="30" width={imageWidth} alt="user" />
      </div>
      <div className="text-gray-500 font-semibold pt-2">{desc}</div>

      <div className="flex items-center pt-2">
        <Image src={userImageUrl} height="60" width="60" alt={name} />
        <div>
          <div className="text-xs">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;

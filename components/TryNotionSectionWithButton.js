import React from "react";
import Image from "next/image";

const TryNotionSectionWithButton = () => {
  return (
    <div className="flex justify-between">
      <div className="space-y-3 max-w-xs">
        <div className="text-black font-bold text-3xl">
          Built for endless uses. Across all teams.
        </div>
        <div className="text-gray-500 text-sm font-semibold">
          Notion solves problems common and unique to every team. These are just
          a few.
        </div>
        <div className="max-w-fit mt-4 rounded font-semibold border-x border-gray-300 cursor-pointer bg-red-500 text-gray-200 p-2 text-xs hover:bg-red-600 ">
          Try Notion free
        </div>
      </div>
      <div className=" ">
        <Image
          src="/bookshelf-spot.png"
          alt="bookshelf"
          height="115"
          width="215"
        />
      </div>
    </div>
  );
};

export default TryNotionSectionWithButton;

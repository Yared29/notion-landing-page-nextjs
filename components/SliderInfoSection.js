import React, { useEffect, useState } from "react";
import Image from "next/image";

const slideData = [
  {
    title: "Company home",
    imageUrl: "/figma.png",
    iconUrl: "/figmaLogo.png",
    iconWidth: "95",
  },
  {
    title: "Roadmap",
    imageUrl: "/roadmap.png",
    iconUrl: "/match.png",
    iconWidth: "139",
  },
  {
    title: "Design docs",
    imageUrl: "/en-US.png",
    iconUrl: "/headspace.png",
    iconWidth: "117",
  },
  {
    title: "Engineering wiki",
    imageUrl: "/eng.png",
    iconUrl: "/branch.png",
    iconWidth: "89",
  },
  {
    title: "Meeting notes",
    imageUrl: "/meet.png",
    iconUrl: "/mixpanelBalck.png",
    iconWidth: "94",
  },
  {
    title: "Website publishing",
    imageUrl: "/multiverse-v2.png",
    iconUrl: "/multiverseLogo.png",
    iconWidth: "98",
  },
];

const SliderInfoSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex pt-10 space-x-10 justify-between pb-5 ta">
      <div className="grid ">
        <ul className="space-y-2  items-start">
          {slideData.map((data, index) => (
            <div
              key={data.title}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <li
                className={`text-black text-sm font-semibold ${
                  index == selectedIndex ? "bg-gray-200" : "bg-white"
                } hover:bg-gray-100 py-1 px-2  rounded transition-colors duration-100 hover:cursor-pointer`}
              >
                {data.title}
              </li>
            </div>
          ))}
        </ul>
        <div className="flex items-end">
          <div>
            <div className="text-gray-400 text-xs pb-2 ">Used by teams at</div>
            <Image
              src={slideData[selectedIndex].iconUrl}
              height="30"
              width={slideData[selectedIndex].iconWidth}
              alt={slideData[selectedIndex].iconUrl}
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center shadow-gray-200 shadow-lg">
        <Image
          src={slideData[selectedIndex].imageUrl}
          alt={slideData[selectedIndex].imageUrl}
          height="505"
          width="840"
        />
      </div>
    </div>
  );
};

export default SliderInfoSection;

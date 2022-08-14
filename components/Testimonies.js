import React from "react";
import TestimonyCard from "./TestimonyCard";

const testimoniesData = [
  {
    imageUrl: "/match.png",
    imageWidth: "139",
    userImageUrl: "/rahim-makani.png",
    name: "Rahim Makani",
    role: "Director of Product",
    desc: '"Notion is a workspace that adapts to your needs. It\'s as minimal or as powerful as you need it to be."',
  },
  {
    imageUrl: "/loom.png",
    imageWidth: "99",
    userImageUrl: "/vinay-hiremath.png",
    name: "Vinay Hiremath",
    role: "Co-founder and Head of Engineering",
    desc: '"Notion continues to be the easiest way to get information centralized somewhere and shout it out to someone else. For us, that`s extremely important because half our team is remote."',
  },
  {
    imageUrl: "/figmaLogo.png",
    imageWidth: "95",
    userImageUrl: "/vinay-hiremath.png",
    name: "Marie Szuts",
    role: "Head of People Ops",
    desc: '"Notion`s ease of use is one of its hallmarks. It helps you visually navigate content and remember where something is."',
  },
];

const Testimonies = () => {
  return (
    <div className="flex items-center justify-evenly pt-2">
      {testimoniesData.map((testimony) => (
        <TestimonyCard key={testimony.name} testimony={testimony} />
      ))}
    </div>
  );
};

export default Testimonies;

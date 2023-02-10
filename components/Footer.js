import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Overview", link: "#" },
      { title: "Pricing", link: "#" },
      { title: "Customer stories", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Desktop apps", link: "#" },
      { title: "Mobile apps", link: "#" },
      { title: "Web Clipper", link: "#" },
      { title: "Security", link: "#" },
      { title: "Terms & privacy", link: "#" },
    ],
  },

  {
    title: "Notion for",
    links: [
      { title: "Enterprise", link: "#" },
      { title: "Small business", link: "#" },
      { title: "Personal use", link: "#" },
      { title: "Remote work", link: "#" },
      { title: "Startups", link: "#" },
      { title: "Education", link: "#" },
      { title: "Engineering", link: "#" },
      { title: "Product", link: "#" },
      { title: "Design", link: "#" },
      { title: "Managers", link: "#" },
    ],
  },

  {
    title: "Resources",
    links: [
      { title: "Blog", link: "#" },
      { title: "Guides & tutorials", link: "#" },
      { title: "Help center", link: "#" },
      { title: "Webinars", link: "#" },
      { title: "Template gallery", link: "#" },
      { title: "Community", link: "#" },
      { title: "What’s new", link: "#" },
      { title: "Find a consultant", link: "#" },
      { title: "API docs", link: "#" },
      { title: "Switch from Evernote", link: "#" },
      { title: "Switch from Confluence", link: "#" },
    ],
  },

  {
    title: "Templates",
    links: [
      { title: "Company home", link: "#" },
      { title: "Meeting notes", link: "#" },
      { title: "To-dos", link: "#" },
      { title: "Weekly agenda", link: "#" },
      { title: "Docs", link: "#" },
      { title: "Roadmap", link: "#" },
      { title: "Design system", link: "#" },
      { title: "New hire onboarding", link: "#" },
      { title: "Product wiki", link: "#" },
      { title: "Content calendar", link: "#" },
    ],
  },

  {
    title: "Company",
    links: [
      { title: "About us", link: "#" },
      { title: "Careers", link: "#" },
      { title: "Media kit", link: "#" },
      { title: "Contact sales", link: "#" },
      { title: "Contact support", link: "#" },
      { title: "Email us", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div className="xs:flex justify-evenly items-start hidden">
        <Image src="/logo.svg" alt="logo" width="64" height="30" />
        {footerLinks.map((data) => (
          <FooterItem key={data.title} data={data} />
        ))}
      </div>
      <div className="h-px bg-gray-300 my-5" />
      <div className="flex justify-between text-xs text-black items-center">
        <div className="flex space-x-6 ">
          <div className="flex space-x-1  text-center grayscale">
            <Image src="/globe.png" alt="globe" width="22" height="22" />
            <div className="text-xs">English</div>
          </div>
          <div className=" hover:text-red-500 hover:underline hover:cursor-pointer text-center">
            Cookie settings
          </div>
          <div className=" hover:text-red-500 hover:underline hover:cursor-pointer">
            Status
          </div>
          <div className="text-gray-500 ">©2022 Notion Labs, Inc.</div>
        </div>
        <div className="flex space-x-2 ">
          <div className="h-4  hover:grayscale-0 grayscale hover:cursor-pointer">
            <Image src="/twitter.png" alt="twitter" width="22" height="22" />
          </div>
          <div className="h-4  hover:grayscale-0 grayscale hover:cursor-pointer">
            <Image src="/linkedin.png" alt="linkedin" width="22" height="22" />
          </div>
          <div className="h-4  hover:grayscale-0 grayscale hover:cursor-pointer">
            <Image src="/facebook.png" alt="facebook" width="22" height="22" />
          </div>
          <div className="h-4  hover:grayscale-0 grayscale hover:cursor-pointer">
            <Image
              src="/instagram.png"
              alt="instagram"
              width="22"
              height="22"
            />
          </div>
          <div className="h-4  hover:grayscale-0 grayscale hover:cursor-pointer">
            <Image src="/youtube.png" alt="youtube" width="22" height="22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
